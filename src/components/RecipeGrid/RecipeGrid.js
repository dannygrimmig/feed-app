import * as React from "react";
import { RecipeCard } from "../RecipeCard/RecipeCard";

export function RecipeGrid({ recipes, className }) {
  return (
    <div className={`grid md:grid-cols-2 gap-4 ${className}`}>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
