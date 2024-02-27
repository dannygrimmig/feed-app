import * as React from "react";
import { getRecipesByUserId } from "../../api/getRecipes";
import { RecipeGrid } from "../../components/RecipeGrid/RecipeGrid";
import { myContext } from "../../contexts/AppContext";

export function Two() {
  const { currentChef } = React.useContext(myContext);
  const [displayedRecipes, setDisplayedRecipes] = React.useState(
    getRecipesByUserId(currentChef)
  );

  return (
    <div>
      {!!displayedRecipes ? (
        <RecipeGrid
          recipes={displayedRecipes}
          className={"md:grid-cols-2 lg:grid-cols-3"}
        />
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}
