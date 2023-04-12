import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/missions';
export const getMissions = createAsyncThunk('missions/getMissions', async () => {
  const missionsdata = await axios.get(url);

  const { data } = missionsdata;
  return data;
});

const initialState = {
  missions: [],
  loading: false,
  error: false,
  fulfilled: false,
};
const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    changestate: (state, action) => {
      const id = action.payload;
      const newstate = state.missions.map((mission) => {
        if (mission.mission_id === id) {
          return { ...mission, member: !mission.member };
        }
        return { ...mission };
      });
      return { ...state, missions: newstate };
    },
    populateprofile: (state) => {
      const newstate = [...state.filter((mission) => mission.member)];
      return { ...state, missions: newstate };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getMissions.pending, (state) => ({ ...state, loading: true }))
      .addCase(getMissions.fulfilled, (state, action) => {
        const gottenmissions = action.payload;
        for (let index = 0; index < gottenmissions.length; index += 1) {
          gottenmissions[index].member = false;
          if (index % 2 === 0) {
            gottenmissions[index].background = '#eeeeee';
          }
          gottenmissions[index].background = '#fff';
        }
        return { ...state, loading: false, missions: gottenmissions };
      })
      .addCase(getMissions.rejected, (state) => ({ ...state, error: true, loading: false }));
  },
});
export const { changestate, populateprofile } = missionSlice.actions;
export default missionSlice.reducer;
