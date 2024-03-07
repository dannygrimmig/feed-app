import * as React from "react";
import { getRecipesByUserId } from "../../api/getRecipes";
import { RecipeGrid } from "../../components/RecipeGrid/RecipeGrid";
import { useAuth } from "../../contexts/AuthContext";
import { addNewRecipeToDataBase } from "../../api/recipes";

export function Profile() {
  //imported
  const { currentUser, currentUserEmail } = useAuth();

  //derived
  const displayedRecipes = getRecipesByUserId(currentUser.email);

  // refs
  const titleRef = React.useRef();
  const imageRef = React.useRef();
  const servesRef = React.useRef();
  const timeRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const newRecipe = {
      name: titleRef.current.value,
      image: imageRef.current.value,
      stars: 0,
      serves: servesRef.current.value,
      time: timeRef.current.value,
      ingredients: ["i0", "i1"],
      directions: ["d0", "d1"],
    };
    addNewRecipeToDataBase(newRecipe, currentUser);
  }

  return (
    <div>
      <h1>current uid: {currentUser}</h1>
      <h1>current email: {currentUserEmail}</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>title</label>
          <input
            ref={titleRef}
            type="text"
            className="border rounded px-2 py-1 w-full"
          />
        </div>

        <div>
          <label>image</label>
          <input
            ref={imageRef}
            type="text"
            className="border rounded px-2 py-1 w-full"
          />
        </div>

        <div>
          <label>serves</label>
          <input
            ref={servesRef}
            type="number"
            className="border rounded px-2 py-1 w-full"
          />
        </div>

        <div>
          <label>time</label>
          <input
            ref={timeRef}
            type="number"
            className="border rounded px-2 py-1 w-full"
          />
        </div>

        <button type="submit" className="border rounded-full px-4 py-2">
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
