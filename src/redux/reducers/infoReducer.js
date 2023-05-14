import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arrStudent:[]
}

const infoReducer = createSlice({
  name:' infoReducer',
  initialState,
  reducers: {
        addStudent:(state,action)=>{
            state.arrStudent.push(action.payload);
        }
  }
});

export const {addStudent} = infoReducer.actions

export default infoReducer.reducer