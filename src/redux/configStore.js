import {configureStore} from '@reduxjs/toolkit'
import studentReducer from './reducers/studentReducer';
import infoReducer from './reducers/infoReducer'

export const store  = configureStore({
    reducer :{
        studentReducer: studentReducer,
        infoReducer :infoReducer,
    }
});
