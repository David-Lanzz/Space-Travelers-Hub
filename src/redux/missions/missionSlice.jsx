import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const url = 'https://api.spacexdata.com/v3/missions'
export const getMissions = createAsyncThunk('missions/getMissions',async()=> {
    const missionsdata = await axios.get(url)
   
   const {data} = missionsdata
    return data
})

const initialState = {
   missions: [],
   loading: false,
   error: false,
   fulfilled: false
}
const missionSlice = createSlice({
    name: 'missions',
    initialState,
    reducers: {
        changestate: (state,{payload})=> {
const newstate = [...state.missions]
newstate.map(mission => {
    if(mission.mission_id === payload){
        mission.member = !mission.member
    }
})
        },
        populateprofile: (state)=> {
            const newstate = [...state.filter((mission)=> mission.member)]
            return {...state,missions: newstate}
        }
    },
    extraReducers(builder) {
        builder
        .addCase(getMissions.pending,(state)=> {
            return {...state,loading: true}
        })
        .addCase(getMissions.fulfilled,(state,action)=> {
const gottenmissions = action.payload
gottenmissions.map((mission,index) => {
   mission.member = false
    if(index % 2 === 0){
        mission.background = '#eeeeee'
    }
    else {
        mission.background = '#fff'
    }
})
return {...state,loading: false,missions: gottenmissions}
        })
        .addCase(getMissions.rejected,(state)=> {
            return {...state, error: true,loading:false}
        })
    }
})
export const {changestate,populateprofile} = missionSlice.actions
export default missionSlice.reducer