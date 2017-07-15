import {combineReducers} from "redux";
import exampleReducer from "./example-reducer";
import user from "./user-reducer";

const reducers = combineReducers({exampleReducer, user});

export default reducers;
