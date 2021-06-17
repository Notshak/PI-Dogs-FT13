import React from "react"

const Card = ({dog}) => {
    return <div classname="card">
        <img
            src={dog.image}
            alt="d'oh"
        />
        <p>
            {dog.breed.name}
        </p>
    </div>
}
export default Card