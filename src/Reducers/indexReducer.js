import { combineReducers } from "redux";
import trainerReducer from "./TrainerReducer";

const rootReducer = combineReducers({
    trainer: trainerReducer
})

export default rootReducer;
