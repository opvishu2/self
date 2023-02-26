import { configureStore } from '@reduxjs/toolkit'
import AllReducerCombined from './combined_reducers'

export default configureStore({
    reducer: {
        AllReducerCombined
    },
})