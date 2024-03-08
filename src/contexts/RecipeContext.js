import * as React from "react";
import { getDatabase, onValue, ref } from "firebase/database";

const RecipesContext = React.createContext();

export function useRecipes() {
  return React.useContext(RecipesContext);
}

export function RecipesProvider({ children }) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [recipes, setRecipes] = React.useState([]);

  React.useEffect(() => {
    setIsLoading(true);

    const db = getDatabase();
    const recipesRef = ref(db, "recipes/");
    onValue(recipesRef, (snapshot) => {
      const data = snapshot.val();

      const array = Object.keys(data).map((keyName) => ({
        id: keyName,
        ...data[keyName],
      }));

      setRecipes(array);
      setIsLoading(false);
    });
  }, []);

  const value = {
    recipes,
  };

  return (
    <RecipesContext.Provider value={value}>
      {!isLoading && children}
    </RecipesContext.Provider>
  );
}
