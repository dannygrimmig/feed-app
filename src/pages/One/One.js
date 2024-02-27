import * as React from "react";
import { RecipeGrid } from "../../components/RecipeGrid/RecipeGrid";
import { getRecipesBySearch, getRecipesByTag } from "../../api/getRecipes";
import { FILTERS, MEAL_FILTERS } from "../../constants/filters";
import { Filter } from "../../components/Filter/Filter";
import { RECIPES } from "../../data/recipes";

export function One() {
  const [recipes, setRecipes] = React.useState(RECIPES);

  const [displayedRecipes, setDisplayedRecipes] = React.useState(recipes);

  const [displayedFilters, setDisplayedFilters] = React.useState(MEAL_FILTERS);

  /* 
    - breakfast,lunch, dinner, dessert
    - go to blog see their tags (rachel mans)
  */

  return (
    <div>
      <div className="flex space-x-4">
        <input
          type="search"
          placeholder="search"
          className="flex-2 border px-4 py-2 rounded focus:outline-slate-500"
          onChange={(e) => {
            const query = e.target.value;
            if (!!query) {
              setDisplayedRecipes(getRecipesBySearch(recipes, query));
            } else {
              setDisplayedRecipes(RECIPES);
            }
          }}
        />

        <div className="flex-1 flex gap-2">
          {displayedFilters.map((filter) => (
            <Filter
              text={filter}
              key={filter}
              onClick={(isActive) => {
                if (isActive) {
                  setDisplayedRecipes(
                    getRecipesByTag(displayedRecipes, filter)
                  );
                } else {
                  setDisplayedRecipes(RECIPES);
                }
              }}
            />
          ))}
        </div>
      </div>

      {!!displayedRecipes ? (
        <RecipeGrid
          recipes={displayedRecipes}
          className={"md:grid-cols-2 lg:grid-cols-4"}
        />
      ) : (
        <p>Make a search fool</p>
      )}
    </div>
  );
}
