import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arrStudent:[
    ],
  


}

const infoReducer = createSlice({
  name:' infoReducer',
  initialState,
  reducers: {
        addStudent:(state,action)=>{
            state.arrStudent.push(action.payload);
        },
        delStudent:(state,action)=>{
            let indexDel = state.arrStudent.findIndex(stud=>stud.idStudent===action.payload)
            if(indexDel !==-1){
                state.arrStudent.splice(indexDel,1);
            }
        },
      
  }
});

export const {addStudent, delStudent,editStudent} = infoReducer.actions

export default infoReducer.reducer