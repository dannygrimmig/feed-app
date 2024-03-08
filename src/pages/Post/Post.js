import * as React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { addNewRecipeToDataBase } from "../../api/recipes";
import { ShadowBox } from "../../components/ShadowBox/ShadowBox";

export function Post() {
  // imported
  const { currentUser, currentUserEmail } = useAuth();

  // managed
  const [name, setName] = React.useState("");
  const [image, setImage] = React.useState("");
  const [serves, setServes] = React.useState(0);
  const [time, setTime] = React.useState(0);
  const [newIngredient, setNewIngredient] = React.useState("");
  const [newDirection, setNewDirection] = React.useState("");

  const [ingredients, setIngredients] = React.useState([]);
  const [directions, setDirections] = React.useState([]);

  const [postSuccess, setPostSuccess] = React.useState(false);

  // refs
  const ingredientRef = React.useRef();
  const directionsRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const newRecipe = {
      chef: currentUserEmail,
      chefId: currentUser,
      name: name,
      image: image,
      serves: serves,
      time: time,
      ingredients: ingredients,
      directions: directions,
    };
    addNewRecipeToDataBase(newRecipe);

    setPostSuccess(true);
    setTimeout(() => {
      setPostSuccess(false);
    }, 5000);

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

  function handleIngredientSubmit() {
    if (newIngredient.length <= 0) {
      return;
    }

    setIngredients([...ingredients, newIngredient]);
    setNewIngredient("");
    ingredientRef.current.focus();
  }

  function handleDirectionSubmit() {
    if (newDirection.length <= 0) {
      return;
    }

    setDirections([...directions, newDirection]);
    setNewDirection("");
    directionsRef.current.focus();
  }

  return (
    <>
      {!!postSuccess && (
        <ShadowBox innerClassName="px-4 py-2 rounded-md border border-black bg-green-300">
          Successfully Added Recipe
        </ShadowBox>
      )}

      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 py-4">
          <div className="flex flex-col md:border-r p-4 gap-4">
            <input
              value={name}
              onChange={({ target }) => setName(target.value)}
              type="text"
              placeholder="recipe name"
              className="outline-none text-3xl font-header"
            />

            <div className="flex items-center pb-6 border-b">
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

            <div className="border-b pb-6">
              <label className="font-header">ingredients</label>

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
              <label className="font-header">directions</label>

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

          <div className="p-4 flex flex-col justify-start">
            <img
              src={
                !!image
                  ? image
                  : "https://t3.ftcdn.net/jpg/02/43/64/02/360_F_243640274_bRUJEbjJw0ei8K9vrHTMVAfKMtwNx0qO.jpg"
              }
              alt=""
            />

            <input
              value={image}
              onChange={({ target }) => setImage(target.value)}
              type="text"
              placeholder="paste image url"
              className="border rounded px-2 py-1 w-full"
            />
          </div>
        </div>

        <button type="submit" className="border rounded-full px-4 py-2">
          add recipe
        </button>
      </form>
    </>
  );
}
