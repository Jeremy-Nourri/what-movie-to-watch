import PropTypes from "prop-types";

const FilmCard = ({ film }) => {
    return (
        <div className="card max-w-[600px] lg:card-side text-white bg-primary rounded-lg">
            <figure className="card-image">
                <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} alt={film.title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{film.title}</h2>
                <p className="text-pretty">{film.overview}</p>
                <div className="flex gap-2">
                    <p className="badge badge-accent h-8 text-white flex-grow-0">{film.release_date}</p>
                    <p className="badge badge-accent h-8 text-white flex-grow-0">VO : {film.original_language}</p>
                </div>
                <div className="max-w-[120px] py-2 px-1 text-center">
                    <p>Note moyenne</p>
                    <p className="badge badge-secondary">{film.vote_average}</p>
                </div>
            </div>
        </div>
    );
};
FilmCard.propTypes = {
    film: PropTypes.object.isRequired,
};
export default FilmCard;
