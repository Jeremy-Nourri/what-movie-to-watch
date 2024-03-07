import { configureStore } from "@reduxjs/toolkit";
import filmsSlice from "./src/components/features/films/filmsSlice";

const store = configureStore({
    reducer: {
        films: filmsSlice,
    }
})

export default store;