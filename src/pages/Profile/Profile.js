import * as React from "react";
import { getRecipesByUserId } from "../../api/getRecipes";
import { RecipeGrid } from "../../components/RecipeGrid/RecipeGrid";
import { useAuth } from "../../contexts/AuthContext";

export function Profile() {
  // imported
  const { currentUser, currentUserEmail } = useAuth();

  // managed

  // derived
  const displayedRecipes = getRecipesByUserId(currentUser.email);

  return (
    <div>
      <h1>current uid: {currentUser}</h1>
      <h1 className="mb-4">current email: {currentUserEmail}</h1>

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
