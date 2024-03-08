// Feed Recipes
export function getFeedRecipes(recipes, currentChefId) {
  return recipes.filter((recipe) => recipe.chefId !== currentChefId);
}

// Recipes by User
export function getRecipesByUserId(recipes, userId) {
  return recipes.filter((recipe) => recipe.chefId === userId);
}

// Recipes by Search Query
export function getRecipesBySearch(recipes, query) {
  return recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(query.toLowerCase())
  );
}

// Recipes by FilterTags
export function getRecipesByTags(recipes, filters) {
  if (!filters || filters.length === 0) {
    return recipes;
  }

  return recipes.filter(({ tags }) =>
    tags?.some((tag) => filters.includes(tag))
  );
}
