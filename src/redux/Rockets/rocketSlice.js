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
    changestate: (state, { payload }) => {
      const newstate = [...state.rockets];
      newstate.map((rocket) => {
        if (rocket.id === payload) {
          rocket.reserved = !rocket.reserved;
        }
        return rocket;
      });
    },
    populateprofile: (state) => {
      const newstate = [...state.filter((rocket) => rocket.reserved)];
      return { ...state, rockets: newstate };
    },
  },
  extraReducers(builder) {
    builder.addCase(getRockets.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(getRockets.fulfilled, (state, action) => {
      const gottenrockets = action.payload.map((rocket) => ({
        id: rocket.id,
        name: rocket.name,
        description: rocket.description,
        flickrImg: rocket.flickr_images,
      }));
      return {
        ...state,
        loading: false,

        rockets: gottenrockets,
      };
    });
    builder.addCase(getRockets.rejected, (state) => ({
      ...state,
      loading: false,
      error: true,
    }));
  },
});

export const { changestate } = rocketSlice.actions;
export default rocketSlice.reducer;
