import axios from "axios"
import {SET_DOG, SET_DOG_DETAIL} from "./actionsNames"

export function getAllDogs(){
 return (dispatch) => {
    axios.get(`http://localhost:3001/dogs`).then(response  =>{
        // console.log(response.data)
         dispatch({ type: SET_DOG, payload: response.data })
        })
    }
}
export function getDogID(id){
 return (dispatch) => {
    axios.get(`http://localhost:3001/dogs/${id}`).then(response  =>{
         dispatch({ type: SET_DOG_DETAIL, payload: response.data })
        })
    }
}
export function clearDog(id){
 return { type: SET_DOG_DETAIL, payload: undefined }
    }