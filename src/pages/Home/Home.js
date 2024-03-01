import * as React from "react";
import { RecipeGrid } from "../../components/RecipeGrid/RecipeGrid";
import { getFeedRecipes } from "../../api/getRecipes";
import { myContext } from "../../contexts/AppContext";

export function Home() {
  // imported
  const { currentChef } = React.useContext(myContext);

  // derived
  const displayedRecipes = getFeedRecipes(currentChef);

  return (
    <div>
      {!!displayedRecipes ? (
        <RecipeGrid recipes={displayedRecipes} className={"sm:grid-cols-2"} />
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}
