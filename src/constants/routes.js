import { Search } from "../pages/Search/Search";
import { Profile } from "../pages/Profile/Profile";
import { RECIPES } from "../data/recipes";

export const ROUTES = [
  {
    path: "search",
    element: <Search initialRecipes={RECIPES} />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
];
