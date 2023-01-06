import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


const getFavoriteByID = createAsyncThunk(
    '/userfavorite',
    async (UserId, thunkAPI) => {
        const response = await axios.post('/')
        return response.data
    }
)
const removeFavoriteByID = createAsyncThunk(
    '/removefavorite',
    async (UserId, ItemId, thunkAPI) => {
        const response = await axios.post('/')
        return response.data
    }
)
const AddFavoriteByID = createAsyncThunk(
    '/addfavorite',
    async (UserId, thunkAPI) => {
        const response = await axios.post('/')
        return response.data
    }
)




const initialState = {
    favorite: [],
}




export const FavoriteCounter = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        AddtoFavorite: (state, action) => {
            state.favorite.push(action.payload)
        },
        RemoveFromFavorite: (state, action) => {
            state.favorite.splice(action.payload, 1)
        },
    }
    // },
    // extraReducers: (builder) => {
    //     builder.addCase()
    // }
})

// Action creators are generated for each case reducer function
export const { AddtoFavorite, RemoveFromFavorite } = FavoriteCounter.actions

export default FavoriteCounter.reducer