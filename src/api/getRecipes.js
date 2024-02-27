import { RECIPES } from "../data/recipes";

// All Recipes
export function getAllRecipes() {
  return RECIPES;
}

// Feed Recipes
export function getFeedRecipes(currentChef) {
  return RECIPES.filter((recipe) => recipe.chef !== currentChef);
}

// Recipes by User
export function getRecipesByUserId(userid) {
  return RECIPES.filter((recipe) => recipe.chef === userid);
}

// Recipes by Search Query
export function getRecipesBySearch(recipes, query) {
  return recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(query.toLowerCase())
  );
}

export function getRecipesByTags(recipes, filters) {
  //no filters, return recipes
  if (!filters || filters.length === 0) {
    return recipes;
  }

  const toReturn = [];
  for (const recipe of recipes) {
    const { tags } = recipe;
    for (const tag of tags) {
      if (filters.includes(tag)) {
        toReturn.push(recipe);
        break;
      }
    }
  }
  return toReturn;
}
