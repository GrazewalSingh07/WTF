import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as AppReducer} from "./App/reducer";
 import {reducer as detailReducer} from "./GYMDetail/reducer"
const rootReducer=combineReducers({
AppReducer,
detailReducer
})
 export const store= legacy_createStore(rootReducer, applyMiddleware(thunk))