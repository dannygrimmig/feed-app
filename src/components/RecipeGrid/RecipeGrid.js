import * as React from "react";
import { HomeCard } from "../../components/Card/HomeCard/HomeCard";

export function RecipeGrid({ recipes, className }) {
  return (
    <div className={`grid md:grid-cols-2 gap-4 ${className}`}>
      {recipes.map((recipe) => (
        <HomeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
