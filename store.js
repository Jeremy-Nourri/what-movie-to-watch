import { configureStore } from "@reduxjs/toolkit";
import filmsSlice from "./src/components/features/films/filmsSlice";
import favoritesSlice from "./src/components/features/favorites/favoritesSlice";

const store = configureStore({
    reducer: {
        films: filmsSlice,
        favorites: favoritesSlice,
    }
})

export default store;