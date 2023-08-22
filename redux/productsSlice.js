import { createSlice } from '@reduxjs/toolkit'

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        cart: [],
        homeLoader: false
    },
    reducers: {
        addToCart: (state, action) => {
            if (!state.cart.includes(action.payload)) {
                state.cart.push(action.payload)
            }
        },
        removeFromCart: (state, action) => {
            let index = state.cart.findIndex((item) => item === action.payload);
            console.log("state : ", state.cart)
            console.log("index : ", index)
            state.cart.splice(index, 1)
        },
        setHomeLoader: (state, action) => {
            state.homeLoader = action.payload
        },
        homeFetchSucceeded: (state, action) => {
            state.products = action.payload
            state.homeLoader = false
        },
        homeFetchFailed: (state, action) => {
            state.homeLoader = false
        }
    }
})

export const { addToCart, removeFromCart, homeFetchSucceeded, homeFetchFailed, setHomeLoader } = productsSlice.actions

export default productsSlice.reducer