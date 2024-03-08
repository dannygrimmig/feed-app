import * as React from "react";
import { getRecipesByUserId } from "../../api/getRecipes";
import { RecipeGrid } from "../../components/RecipeGrid/RecipeGrid";
import { useAuth } from "../../contexts/AuthContext";
import { useRecipes } from "../../contexts/RecipeContext";

export function Profile() {
  // imported
  const { currentUser, currentUserEmail } = useAuth();
  const { recipes } = useRecipes();

  // derived
  const displayedRecipes = getRecipesByUserId(recipes, currentUser);

  return (
    <div>
      <h1>Hi, {currentUserEmail}!</h1>
      <p className="font-header mb-4">your recipes</p>

      {!!displayedRecipes && displayedRecipes.length > 0 ? (
        <RecipeGrid
          recipes={displayedRecipes}
          className={"md:grid-cols-2 lg:grid-cols-3"}
        />
      ) : (
        <p>no recipes</p>
      )}
    </div>
  );
}
