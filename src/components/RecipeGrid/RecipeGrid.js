import * as React from "react";
import { RecipeCard } from "../RecipeCard/RecipeCard";
import { Recipe } from "../Recipe/Recipe";

export function RecipeGrid(props) {
  // imported
  const {
    recipes,
    className,
    onRecipeClick = (recipe) => setOpenRecipe(recipe),
  } = props;
  const { maxRecipes = recipes.length } = props;

  // managed
  const [openRecipe, setOpenRecipe] = React.useState();

  // derived
  const derivedMax = maxRecipes < recipes.length ? maxRecipes : recipes.length;

  return (
    <>
      {!!openRecipe ? (
        <Recipe recipe={openRecipe} onClose={() => setOpenRecipe()} />
      ) : (
        <div className={`grid gap-4 ${className}`}>
          {recipes.slice(0, derivedMax).map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onRecipeClick={onRecipeClick}
            />
          ))}
        </div>
      )}
    </>
  );
}
