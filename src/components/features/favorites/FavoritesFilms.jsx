/* eslint-disable react/no-unescaped-entities */
import { useSelector } from 'react-redux'
import FilmCard from '../films/FilmCard';

const FavoritesFilms = () => {

    const favoritesFilms = useSelector(state => state.favorites.favorites);



  return (
    <article>
        <h1 className="mb-8 py-2 px-1 lg:py-8 text-lg lg:text-2xl font-bold text-center text-secondary bg-primary rounded-md">
            Vos films favoris 🎥💘
        </h1>
        <div className="flex flex-wrap gap-8 justify-center">
            { favoritesFilms.length === 0 && <p className="text-center">Vous n'avez pas encore de films favoris</p> }
            { favoritesFilms.map(film => (
                <FilmCard key={film.id} film={film} />
            ))}
        </div>

    </article>
  )
}
export default FavoritesFilms