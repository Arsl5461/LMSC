import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import goalService from "../goals/goalService"
const initialState={
    goals:[],
    isLoading:false,
    isError:false,
    message:''
}

// Create new Goal
export const createGoal=createAsyncThunk('goals',async(goalData,thunkAPI)=>{
    try {
        const token=thunkAPI.getState().auth.user.token
        return await goalService.createGoal(goalData,token)
    } catch (error) {
        const message=(error.message && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Get User Goals
export const getGoals=createAsyncThunk('getGoals',async(_ ,thunkAPI)=>{
    try {
        const token=thunkAPI.getState().auth.user.token
        return await goalService.getGoal(token)
    } catch (error) {
        const message=(error.message && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//Get All goals
export const getAllGoals=createAsyncThunk('getAllGoals',async(_ ,thunkAPI)=>{
    try {
        return await goalService.getAllGoal()
    } catch (error) {
        const message=(error.message && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})



//Delete Goal
export const deleteGoal=createAsyncThunk('deleteGoals',async(id,thunkAPI)=>{
    try {
        const token=thunkAPI.getState().auth.user.token
        return await goalService.deleteGoal(id,token)
    } catch (error) {
        const message=(error.message && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


export const goalSlice=createSlice({
    name:'goals',
    initialState,
    reducer:{
reset:(state)=>initialState,
    },
    extraReducers:(builder)=>{
builder.addCase(createGoal.pending,(state)=>{
    state.isLoading=true
})
.addCase(createGoal.fulfilled,(state,action)=>{
    state.isLoading=false
    state.isError=false
    state.goals.push(action.payload)
})
.addCase(createGoal.rejected,(state,action)=>{
    state.isError=true
    state.isLoading=false
    state.message=action.payload
})
.addCase(getGoals.pending,(state)=>{
    state.isLoading=true
})
.addCase(getGoals.fulfilled,(state,action)=>{
    state.isLoading=false
    state.isError=false
    state.goals=action.payload
})
.addCase(getGoals.rejected,(state,action)=>{
    state.isError=true
    state.isLoading=false
    state.message=action.payload
})
.addCase(deleteGoal.pending,(state)=>{
    state.isLoading=true
})
.addCase(deleteGoal.fulfilled,(state,action)=>{
    state.isLoading=false
    state.isError=false
    state.goals=state.goals.filter((goal)=>goal._id !== action.payload.id)
})
.addCase(deleteGoal.rejected,(state,action)=>{
    state.isError=true
    state.isLoading=false
    state.message=action.payload
})
.addCase(getAllGoals.pending,(state)=>{
    state.isLoading=true
})
.addCase(getAllGoals.fulfilled,(state,action)=>{
    state.isLoading=false
    state.isError=false
    state.goals=action.payload
    state.isSuccess=true
})
.addCase(getAllGoals.rejected,(state,action)=>{
    state.isError=true
    state.isLoading=false
    state.message=action.payload
})
    }

})

export const {reset}=goalSlice.actions
export default goalSlice.reducer