import { Search } from "../pages/Search/Search";
import { Profile } from "../pages/Profile/Profile";
import { Post } from "../pages/Post/Post";

export const NAV_ROUTES = [
  {
    path: "search",
    element: <Search gridClassName={"grid-cols-2 lg:grid-cols-4"} />,
  },
  {
    path: "post",
    element: <Post />,
  },
];

export const PROFILE_ROUTE = {
  path: "profile",
  element: <Profile />,
};

export const ROUTES = [
  ...NAV_ROUTES,
  {
    path: "profile",
    element: <Profile />,
  },
];
