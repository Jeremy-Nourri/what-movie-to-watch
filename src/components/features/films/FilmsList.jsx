import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchFilms } from './filmsSlice'

const FilmsList = () => {

  const dispatch = useDispatch();

  const films = useSelector(state => state.films);

  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);
    

  return (
    <div>
      <h1>Films</h1>
      <ul>
        {films.films.map(film => (
          <li key={film.id}>{film.title}</li>
        ))}
      </ul>
    </div>


  )
}

export default FilmsList