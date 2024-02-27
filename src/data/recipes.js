import { USERS } from "./users";

const recipeNames = [
  "Eggs",
  "Scone",
  "Muffin",
  "Sandwhich",
  "Chicken Ceaser Wrap",
  "PB & J",
  "Beef Stew",
  "Chicken Pot Pie",
  "Cacio Pepe",
  "Penne Pasta",
];

function makeRecipes() {
  const recipes = [];

  for (let i = 0; i < 3; i++) {
    const newRecipe = {
      id: i,
      name: recipeNames[i],
      chef: USERS[i] ?? USERS[0],
      stars: 5,
      serves: 3,
      time: 30,
      tags: ["breakfast"],
    };
    recipes.push(newRecipe);
  }
  for (let i = 3; i < 5; i++) {
    const newRecipe = {
      id: i,
      name: recipeNames[i],
      chef: USERS[i] ?? USERS[0],
      stars: 5,
      serves: 3,
      time: 30,
      tags: ["lunch"],
    };
    recipes.push(newRecipe);
  }
  for (let i = 5; i < recipeNames.length; i++) {
    const newRecipe = {
      id: i,
      name: recipeNames[i],
      chef: USERS[i] ?? USERS[0],
      stars: 5,
      serves: 3,
      time: 30,
      tags: ["dinner"],
    };
    recipes.push(newRecipe);
  }
  return recipes;
}

export const RECIPES = makeRecipes();
