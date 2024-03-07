import { getDatabase, ref, push, set } from "firebase/database";

export function addNewRecipeToDataBase(recipe, userId) {
  // get database
  const db = getDatabase();

  // add to db/recipes
  const recipesReference = ref(db, "recipes/");
  const newRecipeReference = push(recipesReference);
  set(newRecipeReference, recipe);
}
