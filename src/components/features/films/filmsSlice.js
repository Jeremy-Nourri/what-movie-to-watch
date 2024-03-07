import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import.meta.env.VITE_API_KEY

const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchFilms = createAsyncThunk(
    'films/fetchFilms',
    async () => {
        const response = await axios.request(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=fr-FR&page=1`)

        return response.data.results
    }
)


const sliceFilms = createSlice({
    name: 'films',
    initialState: {
        films: [],
        filmSelected: null,
    },
    reducers: {
        filmSelected: (state, action) => {
            state.filmSelected = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilms.fulfilled, (state, action) => {
                state.films = action.payload.map(film => {
                    return {
                        ...film,
                        release_date: new Date(film.release_date).toLocaleDateString()
                    }
                })
            })
    
    }

    });
    

export const { filmSelected } = sliceFilms.actions

export default sliceFilms.reducer