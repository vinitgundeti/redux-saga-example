import {createSlice} from '@reduxjs/toolkit'

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        cart: [],
        homeLoader: false
    },
    reducers: {
        addToCart: (state, action)=>{

        },
        removeFromCart: (state, action)=>{

        },
        setHomeLoader: (state, action)=>{
            state.homeLoader = action.payload
        },
        homeFetchSucceeded: (state, action)=>{
            state.products = action.payload
            state.homeLoader = false
        },
        homeFetchFailed: (state, action)=>{
            state.homeLoader = false
        }
    }
})

export const { addToCart, removeFromCart, homeFetchSucceeded, homeFetchFailed, setHomeLoader } = productsSlice.actions

export default productsSlice.reducer