import React, { useEffect, useState } from "react"
import getAllDogs from "../actions/test"
// import {getAllDogs} from "../actions/actions"

const initialDogState = [
    {
        id: 1,
        name: "Boxer",
    },
    {
        id: 2,
        name: "Husky"
    },  
];

const SelectDogs = () => {

    const [DogState, SetDogState] = useState(initialDogState);

    useEffect(() => {
        updateDogState()
    }, [])

    const updateDogState = () => {
        getAllDogs()
        .then((el) => {
            SetDogState(el)
        })
    }

    return <select onChange={() => alert("change")}>
        {DogState.map((currentDog) => (
            <option value={currentDog.id} key={currentDog.id} >{currentDog.name}</option>
            ))
        }
    </select>
}

export default SelectDogs