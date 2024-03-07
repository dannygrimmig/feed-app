import * as React from "react";
import { getRecipesByUserId } from "../../api/getRecipes";
import { RecipeGrid } from "../../components/RecipeGrid/RecipeGrid";
import { useAuth } from "../../contexts/AuthContext";
import { addNewRecipeToDataBase } from "../../api/recipes";

export function Profile() {
  // imported
  const { currentUser, currentUserEmail } = useAuth();

  // managed
  const [name, setName] = React.useState("");
  const [image, setImage] = React.useState("");
  const [serves, setServes] = React.useState(0);
  const [time, setTime] = React.useState(0);

  const [newIngredient, setNewIngredient] = React.useState("");
  const [ingredients, setIngredients] = React.useState([]);

  const [newDirection, setNewDirection] = React.useState("");
  const [directions, setDirections] = React.useState([]);

  // derived
  const [displayedRecipes, setDisplayedRecipes] = React.useState(
    getRecipesByUserId(currentUser.email)
  );

  // refs
  const ingredientRef = React.useRef();
  const directionsRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const newRecipe = {
      chef: currentUserEmail,
      name: name,
      image: image,
      serves: serves,
      time: time,
      ingredients: ingredients,
      directions: directions,
    };
    addNewRecipeToDataBase(newRecipe, currentUser);
    setDisplayedRecipes([...displayedRecipes, newRecipe]);
    clearForm();
  }

  function clearForm() {
    setName("");
    setImage("");
    setServes(0);
    setTime(0);
    setIngredients([]);
    setDirections([]);
  }

  function handleIngredientSubmit(e) {
    // defense
    if (newIngredient.length <= 0) {
      return;
    }

    setIngredients([...ingredients, newIngredient]);
    setNewIngredient("");
    ingredientRef.current.focus();
  }

  function handleDirectionSubmit(e) {
    // defense
    if (newDirection.length <= 0) {
      return;
    }

    setDirections([...directions, newDirection]);
    setNewDirection("");
    directionsRef.current.focus();
  }

  return (
    <div>
      <h1>current uid: {currentUser}</h1>
      <h1 className="mb-4">current email: {currentUserEmail}</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-6">
            <input
              value={name}
              onChange={({ target }) => setName(target.value)}
              type="text"
              placeholder="title"
              className="outline-none text-3xl font-header"
            />

            <div className="flex items-center">
              <div className="flex gap-2">
                <label>serves: </label>
                <input
                  value={serves}
                  onChange={({ target }) => setServes(target.value)}
                  type="number"
                  className="outline-none w-8"
                />
              </div>

              <div className="flex gap-2">
                <label>time: </label>
                <input
                  value={time}
                  onChange={({ target }) => setTime(target.value)}
                  type="number"
                  className="outline-none w-8"
                />
              </div>
            </div>

            <div>
              <label>ingredients</label>

              <ol className="pl-4 list-disc">
                {ingredients.map((ingredient, index) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ol>

              <div className="flex items-center gap-2">
                <input
                  ref={ingredientRef}
                  type="text"
                  value={newIngredient}
                  onChange={({ target }) => setNewIngredient(target.value)}
                  className="border rounded px-2 py-1 w-full"
                />

                <button
                  type="button"
                  onClick={handleIngredientSubmit}
                  className="border rounded-full px-4 py-2"
                >
                  add
                </button>
              </div>
            </div>

            <div>
              <label>directions</label>

              <ol className="pl-4 list-decimal">
                {directions.map((direction, index) => (
                  <li key={direction}>{direction}</li>
                ))}
              </ol>

              <div className="flex items-center gap-2">
                <input
                  ref={directionsRef}
                  type="text"
                  value={newDirection}
                  onChange={({ target }) => setNewDirection(target.value)}
                  className="border rounded px-2 py-1 w-full"
                />

                <button
                  type="button"
                  onClick={handleDirectionSubmit}
                  className="border rounded-full px-4 py-2"
                >
                  add
                </button>
              </div>
            </div>
          </div>

          <div className="p-8 flex flex-col justify-center">
            <img src={image} alt="" />

            <input
              value={image}
              onChange={({ target }) => setImage(target.value)}
              type="text"
              placeholder="image url"
              className="border rounded px-2 py-1 w-full"
            />
          </div>
        </div>

        <button type="submit" className="border rounded-full px-4 py-2 w-max">
          add recipe
        </button>
      </form>

      {!!displayedRecipes && displayedRecipes.length > 0 ? (
        <RecipeGrid
          recipes={displayedRecipes}
          className={"md:grid-cols-2 lg:grid-cols-3"}
        />
      ) : (
        <p>no recipes</p>
      )}
    </div>
  );
}
