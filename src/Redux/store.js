import { configureStore } from '@reduxjs/toolkit'
import FavoriteCounter from './Reducers/favorite.reducer'

export const store = configureStore({
    reducer: { FavoriteCounter },
})
