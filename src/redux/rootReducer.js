import { combineReducers } from "redux";

import ListData from "./reducer";
const rootReducer=combineReducers({
    data:ListData,
})
export default rootReducer;