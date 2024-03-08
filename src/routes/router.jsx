import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../components/HomePage";
import FilmsList from "../components/features/films/FilmsList";
import FavoritesFilms from "../components/features/favorites/FavoritesFilms";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/topten", element: <FilmsList /> },
            { path: "tendances", element: <FilmsList /> },
            { path: "/favoris", element: <FavoritesFilms /> },
        ],
    },
]);

export default router;




