import * as React from "react";
import { RecipeCard } from "../RecipeCard/RecipeCard";

export function RecipeGrid(props) {
  const {
    recipes,
    className,
    onRecipeClick = (recipe) => {
      console.log(recipe);
    },
  } = props;

  const { maxRecipes = recipes.length } = props;
  const derivedMax = maxRecipes < recipes.length ? maxRecipes : recipes.length;

  function handleClick(recipe) {
    onRecipeClick(recipe);
  }

  return (
    <div className={`grid gap-4 ${className}`}>
      {recipes.slice(0, derivedMax).map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onRecipeClick={(recipe) => handleClick(recipe)}
        />
      ))}
    </div>
  );
}
