// routes.js

import Home from "../pages/Home/Home";
import NewMovies from "../pages/NewMovie/NewMovies";
import Popular from "../pages/popular/Popular";
import Movie from "../pages/Movie/Movie";
import Error404 from "../pages/404/Error404";
import Search from "pages/Search/Search";



const routes = [
  { path: "/",label:'Home', element: <Home /> },
  { path: "/new-movies",label:'Latest releases', element: <NewMovies /> },
  { path: "/popular",  label: 'Popular',element: <Popular /> },
  { path: "/search",  label: 'Search', element: <Search /> },
  { path: "/movie/:movieId",  label: 'Movie', element: <Movie /> },
  { path: "*", label:'error', element: <Error404 /> },
];
export type routeType = typeof routes[0]
export default routes;
