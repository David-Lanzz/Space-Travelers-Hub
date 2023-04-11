import { configureStore } from '@reduxjs/toolkit'
import missionReducer from './missions/missionSlice'
import rocketReducer from './Rockets/rocketSlice'
const store = configureStore({
    reducer: {
        missionReducer,
        rocketReducer
    }
})
export default store