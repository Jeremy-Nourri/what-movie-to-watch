import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { fetchFilms, fetchFilmsTrending, setLocationNavUser } from './filmsSlice'

import FilmCard from './FilmCard'

const FilmsList = () => {

  const dispatch = useDispatch();
  const location = useLocation();

  const films = useSelector(state => state.films);
  const locationNavUser = useSelector(state => state.films.locationNavUser)

  useEffect(() => {
    if (location.pathname === '/topten') {
      dispatch(setLocationNavUser('topten'))
      dispatch(fetchFilms())
    } else if (location.pathname === '/tendances') {
      dispatch(setLocationNavUser('trending'))
      dispatch(fetchFilmsTrending())
    }
  }, [dispatch, location.pathname])    

  return (
    <div>
      <h1 className="mb-8 py-2 px-1 lg:py-8 text-lg lg:text-2xl font-bold text-center text-secondary bg-primary rounded-md">
        {locationNavUser === 'topten' ? 'Les films les mieux notés' : 'Les films les plus tendances cette semaine'}
      </h1>
      <div className="flex flex-wrap gap-8 justify-center">
        {films.films.map(film => (
          <FilmCard key={film.id} film={film} />
        ))}
      </div>
    </div>

  )
}

export default FilmsList