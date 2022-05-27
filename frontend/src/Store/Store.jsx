import { configureStore } from '@reduxjs/toolkit'
import reducers from './reducers/Reducers'

const store = configureStore({
    reducer : reducers
})

export default store;