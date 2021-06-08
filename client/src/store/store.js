import thunk from "redux-thunk"
import { createStore , applyMiddleware } from "redux"

import {SET_DOG, SET_DOG_DETAIL} from "../actions/actionsNames"

const initialState = {
    dogs: undefined,
    dogsDetail: undefined,
}

function reducer(state = initialState, action){
 switch(action.type){
     case SET_DOG: {
         return {
             ...state,
             dogs: action.payload
         }
     }
     case SET_DOG_DETAIL: {
         return {
             ...state,
             dogsDetail: action.payload
         }
     }
     default: {
         return state
     }
 }
}

const store = createStore(reducer, applyMiddleware(thunk))
export default store;