import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../component/Header/counterSlice';

const rootReducer={
    count: counterReducer,
}
const store = configureStore({
    reducer: rootReducer,
})
export default store;