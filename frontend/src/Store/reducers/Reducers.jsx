import { combineReducers } from "redux";
import dateReducer from "./DateReducer";
import dayReducer from "./DayReducer";
import hoursReducer from "./hoursReducer";
import minutesReducer from "./minutesReducer";
import monthReducer from "./monthReducer";
import yearReducer from "./yearReducer";


const reducers = combineReducers({
    date : dateReducer,
    day : dayReducer,
    month : monthReducer,
    year : yearReducer,
    hours : hoursReducer,
    minutes : minutesReducer
})

export default reducers;