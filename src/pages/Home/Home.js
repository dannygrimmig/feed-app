import * as React from "react";
import { RecipeGrid } from "../../components/RecipeGrid/RecipeGrid";
import { getFeedRecipes } from "../../api/getRecipes";
import { useRecipes } from "../../contexts/RecipeContext";
import { useAuth } from "../../contexts/AuthContext";

export function Home() {
  // imported
  const { currentUser } = useAuth();
  const { recipes } = useRecipes();

  // derived
  const displayedRecipes = getFeedRecipes(recipes, currentUser);

  return (
    <div>
      {!!displayedRecipes && displayedRecipes.length > 0 ? (
        <RecipeGrid recipes={displayedRecipes} className={"sm:grid-cols-2"} />
      ) : (
        <p>No Feed Recipes</p>
      )}
    </div>
  );
}
