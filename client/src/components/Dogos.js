import React from 'react';

function Dogos({dog}){
    return <>
            <div>{dog.name}</div>
            <div>{dog.temperament}</div>
            <img className="DogImage"  width="300" height="300" src={dog.image.url} alt="not found"/>
            </>
}

export default Dogos