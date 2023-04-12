import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://api.spacexdata.com/v4/rockets';
export const getRockets = createAsyncThunk('rockets/getRockets', async () => {
  const rocketData = await axios.get(URL);

  const { data } = rocketData;
  return data;
});

const initialState = {
  rockets: [],
  loading: false,
  error: false,
  fulfilled: false,
};

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder.addCase(getRockets.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(getRockets.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      rockets: action.payload,

    }));
    builder.addCase(getRockets.rejected, (state) => ({
      ...state,
      loading: false,
      error: true,
    }));
  },
});

<<<<<<< HEAD
export default rocketSlice.reducer;
=======
export const {changestate} = rocketSlice.actions
export default rocketSlice.reducer
>>>>>>> 1dfc31ccbd0ab76b532184f6fae3130c22be8def
