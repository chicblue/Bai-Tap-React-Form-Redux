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
        studentUpdate :(state,action)=>{
            let stud = state.arrStudent.find(stud=>stud.idStudent==action.payload.idStudent);
            if(stud){
                for(let key in stud){
                    stud[key] =action.payload[key]
                }
            }
        }
  }
});

export const {addStudent, delStudent,studentUpdate} = infoReducer.actions

export default infoReducer.reducer