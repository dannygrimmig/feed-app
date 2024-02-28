import * as React from "react";
import { getRecipesByUserId } from "../../api/getRecipes";
import { RecipeGrid } from "../../components/RecipeGrid/RecipeGrid";
import { myContext } from "../../contexts/AppContext";

export function Profile() {
  //imported
  const { currentChef } = React.useContext(myContext);

  //derived
  const displayedRecipes = getRecipesByUserId(currentChef);

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
