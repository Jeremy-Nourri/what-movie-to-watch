import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import.meta.env.VITE_API_KEY

const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchFilms = createAsyncThunk(
    'films/fetchFilms',
    async () => {
        try {
            const response = await axios.request(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=fr-FR`)
            return response.data.results
        } catch (error) {
            console.log(error)
        }
    }
)

export const fetchFilmsTrending = createAsyncThunk(
    'films/fetchFilmsTrending',
    async () => {
        try {
            const response = await axios.request(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&language=fr-FR`)
            return response.data.results
        } catch (error) {
            console.log(error)
        }
    }
)


const sliceFilms = createSlice({
    name: 'films',
    initialState: {
        films: [],
        locationNavUser: null,
    },
    reducers: {
        setLocationNavUser: (state, action) => {
            state.locationNavUser = action.payload
        },
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
            .addCase(fetchFilmsTrending.fulfilled, (state, action) => {
                state.films = action.payload.map(film => {
                    return {
                        ...film,
                        release_date: new Date(film.release_date).toLocaleDateString()
                    }
                })
            })
    
    }

    });
    

export const { setLocationNavUser } = sliceFilms.actions

export default sliceFilms.reducer