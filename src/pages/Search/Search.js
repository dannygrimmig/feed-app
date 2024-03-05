import * as React from "react";
import { RecipeGrid } from "../../components/RecipeGrid/RecipeGrid";
import { getRecipesBySearch, getRecipesByTags } from "../../api/getRecipes";
import { FILTER_CATEGORIES } from "../../constants/filters";
import { FilterCategory } from "../../components/FilterCategory/FilterCategory";

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
    console.log("search active filters", activeFilters);
    setFilteredRecipes(getRecipesByTags(queriedRecipes, activeFilters));
  }, [queriedRecipes, activeFilters]);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-2 items-center">
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

        <div className="flex-1 flex min-w-fit items-center">
          <div className="flex flex-wrap gap-2 h-max">
            {Object.keys(FILTER_CATEGORIES).map(function (keyName, keyIndex) {
              return (
                <FilterCategory
                  key={keyName}
                  text={keyName}
                  filters={FILTER_CATEGORIES[keyName]}
                  onFilterChange={(filter, isActive) => {
                    isActive
                      ? setActiveFilters([...activeFilters, filter])
                      : setActiveFilters((prevFilters) =>
                          prevFilters.filter((prev) => prev !== filter)
                        );
                  }}
                />
              );
            })}
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
