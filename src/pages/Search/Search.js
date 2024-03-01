import * as React from "react";
import { RecipeGrid } from "../../components/RecipeGrid/RecipeGrid";
import { getRecipesBySearch, getRecipesByTags } from "../../api/getRecipes";
import { MEAL_FILTERS } from "../../constants/filters";
import { Filter } from "../../components/Filter/Filter";

export function Search(props) {
  const {
    initialRecipes,
    recipesToQueryFrom,
    gridClassName,
    onRecipeClick = () => {},
  } = props;

  const { maxRecipes = initialRecipes.length } = props;

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
      <div className="flex flex-wrap gap-2 mb-2">
        <input
          type="search"
          placeholder="search recipes"
          className="flex-1 border px-4 py-2 rounded focus:outline-slate-500"
          onChange={(event) => {
            const query = event.target.value;

            setQueriedRecipes(
              getRecipesBySearch(recipesToQueryFrom, !!query ? query : "")
            );
          }}
        />

        <div className="flex-1 flex items-center min-w-fit">
          <div className="flex flex-wrap gap-2">
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
      </div>

      {!!filteredRecipes ? (
        <RecipeGrid
          recipes={filteredRecipes}
          className={gridClassName}
          maxRecipes={maxRecipes}
          onRecipeClick={(recipe) => onRecipeClick(recipe)}
        />
      ) : (
        <p>Make a search fool</p>
      )}
    </div>
  );
}
