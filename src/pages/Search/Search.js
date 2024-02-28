import * as React from "react";
import { RecipeGrid } from "../../components/RecipeGrid/RecipeGrid";
import { getRecipesBySearch, getRecipesByTags } from "../../api/getRecipes";
import { MEAL_FILTERS } from "../../constants/filters";
import { Filter } from "../../components/Filter/Filter";

export function Search({ initialRecipes }) {
  // managed
  const [queriedRecipes, setQueriedRecipes] = React.useState(initialRecipes);
  const [activeFilters, setActiveFilters] = React.useState([]);

  // derived
  const [filteredRecipes, setFilteredRecipes] = React.useState(initialRecipes);

  React.useEffect(() => {
    setFilteredRecipes(getRecipesByTags(queriedRecipes, activeFilters));
  }, [queriedRecipes, activeFilters]);

  return (
    <div>
      <div className="flex space-x-4 mb-2">
        <input
          type="search"
          placeholder="search recipes"
          className="flex-2 border px-4 py-2 rounded focus:outline-slate-500"
          onChange={(event) => {
            const query = event.target.value;

            setQueriedRecipes(
              getRecipesBySearch(initialRecipes, !!query ? query : "")
            );
          }}
        />

        <div className="flex-1 flex gap-2 overflow-x-scroll">
          {MEAL_FILTERS.map((filter) => (
            <Filter
              text={filter}
              key={filter}
              onClick={(isActive) => {
                isActive
                  ? setActiveFilters([...activeFilters, filter])
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
          className={"grid-cols-2 lg:grid-cols-3"}
        />
      ) : (
        <p>Make a search fool</p>
      )}
    </div>
  );
}
