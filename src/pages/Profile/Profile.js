import * as React from "react";
import { getRecipesByUserId } from "../../api/getRecipes";
import { RecipeGrid } from "../../components/RecipeGrid/RecipeGrid";
import { useAuth } from "../../contexts/AuthContext";
import { useRecipes } from "../../contexts/RecipeContext";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../utils/authentication";

export function Profile() {
  // imported
  const { currentUser, currentUserEmail } = useAuth();
  const { recipes } = useRecipes();

  // derived
  const displayedRecipes = getRecipesByUserId(recipes, currentUser);

  const navigate = useNavigate();

  async function handleLogOut() {
    try {
      await logOut();
      navigate("/");
    } catch {
      console.log("failed to logout");
    }
  }

  return (
    <div>
      <div className="flex justify-between">
        <h1>Hi, {currentUserEmail}!</h1>
        <button
          className="border px-4 py-2 rounded-full"
          type="button"
          onClick={() => handleLogOut()}
        >
          log out
        </button>
      </div>
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
