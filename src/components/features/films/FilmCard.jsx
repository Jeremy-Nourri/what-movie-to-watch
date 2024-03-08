import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addFavorite, removeFavorite } from "../favorites/favoritesSlice";

const FilmCard = ({ film }) => {
    const location = useLocation();

    const dispatch = useDispatch();

    return (
        <div className="card max-w-[400px] lg:max-w-[850px] lg:card-side text-white bg-primary rounded-lg">
            <figure className="lg:min-w-[400px]">
                <img
                    className="w-full h-full object-cover"
                    src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
                    alt={film.title}
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-lg">{film.title}</h2>
                <p className="text-sm text-pretty">{film.overview}</p>
                <div className="flex gap-2">
                    <p className="badge badge-accent h-8 text-xs text-white flex-grow-0">{film.release_date}</p>
                    <p className="badge badge-accent h-8 text-xs text-white flex-grow-0">
                        VO : {film.original_language}
                    </p>
                </div>
                <div className="max-w-[130px] py-2 px-1 text-sm text-center">
                    <p className="mb-2">Note moyenne</p>
                    <p className="badge badge-info">{film.vote_average}</p>
                </div>
                <div className="card-actions justify-center">
                    {location.pathname === "/favoris" ? (
                        <button className="btn btn-sm btn-secondary" onClick={() => dispatch(removeFavorite(film.id))}>
                            Retirer
                        </button>
                    ) : (
                        <button className="btn btn-sm btn-secondary" onClick={() => dispatch(addFavorite(film))}>
                            Ajouter
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

FilmCard.propTypes = {
    film: PropTypes.object.isRequired,
};

export default FilmCard;
