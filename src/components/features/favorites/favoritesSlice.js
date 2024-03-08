import { createSlice } from '@reduxjs/toolkit'

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: []
  },
  reducers: {
    addFavorite: (state, action) => {
      if (state.favorites.find(favorite => favorite.id === action.payload.id)) {
        return
      }
        state.favorites.push(action.payload)
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(favorite => favorite.id !== action.payload.id)
    }
  }
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions

export default favoritesSlice.reducer