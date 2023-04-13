import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import missionReducer from './missions/missionSlice';
import rocketReducer from './Rockets/rocketSlice';

const store = configureStore({
  reducer: {
    missionReducer,
    rocketReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
