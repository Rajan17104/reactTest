import { combineReducers } from "redux";
import { courseReducer } from "./course.reducer";



export const rootreducer = combineReducers({
    course: courseReducer
})