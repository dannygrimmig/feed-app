import { Search } from "../pages/Search/Search";
import { Profile } from "../pages/Profile/Profile";
import { Post } from "../pages/Post/Post";

export const ROUTES = [
  {
    path: "search",
    element: <Search gridClassName={"grid-cols-2 lg:grid-cols-4"} />,
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
