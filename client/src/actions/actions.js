import axios from "axios"
import {SET_DOG, SET_DOG_DETAIL, SET_TEMPERAMENT} from "./actionsNames"

export function getAllDogs(name = "",page = "",order = "",param = "",filter = "",db =""){
 return (dispatch) => {
    return axios.get(`http://localhost:3001/dogs?name=${name}&page=${page}&order=${order}&param=${param}&filter=${filter}&db=${db}`)
    // .then(response => response.json())
    .then(response  =>{
        // console.log(response.data)
         dispatch({ type: SET_DOG, payload: response.data })
        })
    }
}
export function getTemperaments(){
    return (dispatch) => {
        return axios.get(`http://localhost:3001/temperament`)
        .then(response => {
            dispatch({ type: SET_TEMPERAMENT,payload: response.data})
        })
    }
}
export function getDogByName(name){
 return (dispatch) => {
    axios.get(`http://localhost:3001/dogs?name=${name}`).then(response =>{
        dispatch({ type: SET_DOG, payload: response })
    })
    }
}
export function getDogID(id){
 return (dispatch) => {
    axios.get(`http://localhost:3001/dogs/${id}`).then(response  =>{
         dispatch({ type: SET_DOG_DETAIL, payload: response })
        })
    }
}
export function clearDog(id){
 return { type: SET_DOG_DETAIL, payload: undefined }
    }
