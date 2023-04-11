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
        
    },
    extraReducers(builder) {
        builder
        .addCase(getMissions.pending,(state)=> {
            return {...state,loading: true}
        })
        .addCase(getMissions.fulfilled,(state,action)=> {
const gottenmissions = action.payload
gottenmissions.map((mission,index) => {
    gottenmissions.completed = false
    if(index % 2 === 0){
        mission.background = '#eeeeee'
    }
    else {
        mission.background = '#fff'
    }
})
gottenmissions.member = false
console.log(gottenmissions)
return {...state,loading: false,missions: action.payload}
        })
        .addCase(getMissions.rejected,(state)=> {
            return {...state, error: true,loading:false}
        })
    }
})
export default missionSlice.reducer