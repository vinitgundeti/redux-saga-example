import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './productsSlice'
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

export default configureStore({
    reducer: {
        appData: productsReducer
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(middleware)
})

sagaMiddleware.run(mySaga)