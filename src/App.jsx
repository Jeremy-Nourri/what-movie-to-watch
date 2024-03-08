import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link, ScrollRestoration } from "react-router-dom";
import { BiCameraMovie } from "react-icons/bi";
import { clearFavorites } from "./components/features/favorites/favoritesSlice";
import NavBar from "./components/NavBar";

function App() {

    const dispatch = useDispatch();
    const favoritesFilms = useSelector((state) => state.favorites.favorites);

    return (
        <>
            <header className="container relative ">
                <div className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between w-full p-3 lg:p-6 bg-primary text-white">
                    <h1 className="hidden sm:block">What movie to watch !?</h1>
                    <h1 className="sm:hidden">W M T W !?</h1>
                    <NavBar />

                    <div className="flex-none">
                        <Link to="/favoris">
                            <div tabIndex={0} role="button" className="btn btn-neutral btn-circle">
                                <div className="indicator">
                                    <BiCameraMovie className="size-6" />
                                    <span className="badge badge-sm absolute right-0 translate-x-1/2 -translate-y-full bg-secondary">
                                        {favoritesFilms.length}
                                    </span>
                                </div>
                            </div>
                        </Link>
                        {favoritesFilms.length > 0 && (
                            <button 
                                className="btn btn-circle btn-xs btn-accent absolute z-20 right-2 bottom-2"
                                onClick={() => dispatch(clearFavorites())}
                            >
                                X
                            </button>
                        )}
                    </div>
                </div>
            </header>
            <main className="container mt-16 lg:mt-24 p-6">
                <Outlet />
            </main>
            <footer></footer>
            <ScrollRestoration />
        </>
    );
}

export default App;
