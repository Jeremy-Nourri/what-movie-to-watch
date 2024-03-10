import { configureStore } from "@reduxjs/toolkit";
import filmsSlice from "./src/components/features/films/filmsSlice";
import favoritesSlice from "./src/components/features/favorites/favoritesSlice";
import authSlice from "./src/components/features/auth/authSlice";

const store = configureStore({
    reducer: {
        films: filmsSlice,
        favorites: favoritesSlice,
        auth: authSlice
    }
})

export default store;