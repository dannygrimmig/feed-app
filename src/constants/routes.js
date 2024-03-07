import { Search } from "../pages/Search/Search";
import { Profile } from "../pages/Profile/Profile";
import { RECIPES } from "../data/recipes";
import { Post } from "../pages/Post/Post";

export const ROUTES = [
  {
    path: "search",
    element: (
      <Search
        initialRecipes={RECIPES}
        recipesToQueryFrom={RECIPES}
        gridClassName={"grid-cols-2 lg:grid-cols-4"}
      />
    ),
  },
  {
    path: "post",
    element: <Post />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
];
