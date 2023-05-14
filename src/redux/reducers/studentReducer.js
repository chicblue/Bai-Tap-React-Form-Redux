import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    values:{
        idStudent:'',
        phone:'',
        name:'',
        email:''
    },
    errors:{
        idStudent:' ',
        phone:' ',
        name:' ',
        email:' '
    }

          
}

const studentReducer = createSlice({
  name: 'studentReducer',
  initialState,
  reducers: {
        studentInput:(state,action)=>{
            let {id,value,dataType} = action.payload;
            let newValue = {...state.values}
            newValue[id]=value;
            state.values= newValue;


            let newErorr ={...state.errors}
            let messErorr ='';
            if(value.trim()===''){
                messErorr = 'Vui Lòng Nhập Nội Dung'
            }
            else{
                
                if(dataType){
                    switch(dataType){
                        case 'number':{
                            let regNumber = /^[0-9]+$/;
                            if(!regNumber.test(value)){
                                messErorr = 'Vui Lòng Chỉ Nhập Số'
                            }
                        }break;
                        case 'string':{
                            let regLetter = /^[a-z A-Z]+$/;
                            if(!regLetter.test(value)){
                                messErorr = 'Vui Lòng Chỉ Ký Tự'
                            }
                        }break;
                    }
                }
            }
            newErorr[id] = messErorr;
            state.errors = newErorr;
        }
  }
});

export const {studentInput} = studentReducer.actions

export default studentReducer.reducer