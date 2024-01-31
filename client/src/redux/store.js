import {configureStore} from "@reduxjs/toolkit"
import {rootReducer} from './reducer'
// import { styled } from "@mui/styles";


const store = configureStore({
    reducer: rootReducer,
});

const {dispatch} = store;

export {store, dispatch};