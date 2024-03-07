import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchFilms } from './filmsSlice'

import FilmCard from './FilmCard'

const FilmsList = () => {

  const dispatch = useDispatch();

  const films = useSelector(state => state.films);

  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);
    

  return (
    <div>
      <h1 className="mb-8 py-2 px-1 text-2xl font-bold text-center text-secondary bg-primary rounded-md">
        Les films les mieux notés</h1>
      <div className="flex flex-wrap gap-8 justify-center">
        {films.films.map(film => (
          <FilmCard key={film.id} film={film} />
        ))}
      </div>
    </div>

  )
}

export default FilmsList