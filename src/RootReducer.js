import { combineReducers } from "redux";

const RootReducer = combineReducers ({
    names: namesReducer, 
});

export default RootReducer