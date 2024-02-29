import * as React from "react";
import { RecipeCard } from "../RecipeCard/RecipeCard";

export function RecipeGrid({
  recipes,
  className,
  onRecipeClick = (recipe) => {
    console.log(recipe);
  },
}) {
  function handleClick(recipe) {
    onRecipeClick(recipe);
  }

  return (
    <div className={`grid gap-4 ${className}`}>
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onRecipeClick={(recipe) => handleClick(recipe)}
        />
      ))}
    </div>
  );
}
