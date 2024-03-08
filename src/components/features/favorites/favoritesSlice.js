import { createSlice } from '@reduxjs/toolkit'

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
    reloadFavorites: false,
  },
  reducers: {
    addFavorite: (state, action) => {
      if (state.favorites.find(favorite => favorite.id === action.payload.id)) {
        return
      }
        state.favorites.push(action.payload)
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(favorite => favorite.id !== action.payload)
      state.reloadFavorites = !state.reloadFavorites
    },
    clearFavorites: (state) => {
      state.favorites = []
    }
  }
});

export const { addFavorite, removeFavorite, clearFavorites } = favoritesSlice.actions

export default favoritesSlice.reducer