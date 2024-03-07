import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import.meta.env.VITE_ACCESS_TOKEN_AUTH

const ACCESS_TOKEN_AUTH = import.meta.env.VITE_ACCESS_TOKEN_AUTH;

export const fetchFilms = createAsyncThunk(
    'films/fetchFilms',
    async () => {
        const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/movie/top_rated',
            params: {language: 'fr-FR', page: '1'},
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${ACCESS_TOKEN_AUTH}`
            }
        }
        const response = await axios.request(options);
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
                state.films = action.payload
            })
    }

    });
    

export const { filmSelected } = sliceFilms.actions

export default sliceFilms.reducer