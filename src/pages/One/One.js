import * as React from "react";
import { RecipeGrid } from "../../components/RecipeGrid/RecipeGrid";
import { getRecipesBySearch, getRecipesByTags } from "../../api/getRecipes";
import { MEAL_FILTERS } from "../../constants/filters";
import { Filter } from "../../components/Filter/Filter";
import { RECIPES } from "../../data/recipes";

export function One() {
  const [activeQuery, setActiveQuery] = React.useState("");
  const [activeFilters, setActiveFilters] = React.useState([]);

  const [queriedRecipes, setQueriedRecipes] = React.useState(RECIPES);
  const [filteredRecipes, setFilteredRecipes] = React.useState(RECIPES);

  React.useEffect(() => {
    setQueriedRecipes(getRecipesBySearch(RECIPES, activeQuery));
  }, [activeQuery]);

  React.useEffect(() => {
    console.log(activeFilters);
    setFilteredRecipes(getRecipesByTags(queriedRecipes, activeFilters));
  }, [queriedRecipes, activeFilters]);

  return (
    <div>
      <div className="flex space-x-4">
        <input
          type="search"
          placeholder="search"
          className="flex-2 border px-4 py-2 rounded focus:outline-slate-500"
          onChange={(e) => {
            const query = e.target.value;
            !!query ? setActiveQuery(query) : setActiveQuery("");
          }}
        />

        <div className="flex-1 flex gap-2">
          {MEAL_FILTERS.map((filter) => (
            <Filter
              text={filter}
              key={filter}
              onClick={(isActive) => {
                isActive
                  ? setActiveFilters(["breakfast"])
                  : setActiveFilters((prevFilters) =>
                      prevFilters.filter((prev) => prev !== filter)
                    );
              }}
            />
          ))}
        </div>
      </div>

      {!!filteredRecipes ? (
        <RecipeGrid
          recipes={filteredRecipes}
          className={"md:grid-cols-3 lg:grid-cols-4"}
        />
      ) : (
        <p>Make a search fool</p>
      )}
    </div>
  );
}
