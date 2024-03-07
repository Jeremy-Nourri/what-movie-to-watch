import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../components/HomePage";
import FilmsList from "../components/features/films/FilmsList";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/films", element: <FilmsList /> },
        ],
    },
]);

export default router;




