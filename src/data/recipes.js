import { USERS } from "./users";

const recipeNames = [
  "Beef Stew",
  "Chicken Pot Pie",
  "PB and J",
  "Cookies",
  "Ceaser Wrap",
  "Cacio Pepe",
  "Chedar Bomb",
  "Soup",
  "Penne Pasta",
];

function makeRecipes() {
  const recipes = [];

  for (let i = 0; i < recipeNames.length; i++) {
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
  return recipes;
}

export const RECIPES = makeRecipes();
