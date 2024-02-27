import * as React from "react";
import { RecipeGrid } from "../../components/RecipeGrid/RecipeGrid";
import { getAllRecipes, getFeedRecipes } from "../../api/getRecipes";
import { myContext } from "../../contexts/AppContext";

export function Home() {
  const { currentChef } = React.useContext(myContext);

  const [displayedRecipes, setDisplayedRecipes] = React.useState(
    getFeedRecipes(currentChef)
  );

  return (
    <div>
      {!!displayedRecipes ? (
        <RecipeGrid recipes={displayedRecipes} />
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}
