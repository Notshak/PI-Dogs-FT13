import React from 'react';

function Dogos({dog}){
    let tempe = dog.temperament && dog.temperament.map(e => e + ", ")
    tempe ? tempe[tempe.length-1] = tempe[tempe.length-1].slice(0,tempe[tempe.length-1].length-2)+"." : tempe = ["not avalide temperaments"]
    return <>
            <span className="DogosSpan">Temperament:</span>
            <span className="DogosSpan">Name:</span>
            <div className="DogoName">{dog.name}</div>
            <div className="DogoTemp">{tempe && tempe.map(e => <span key={e}>{e}</span>)}</div>
            {/* <div className="DogoTemp">{dog.temperament}</div> */}
            {dog.image && dog.image.url ? (<img className="DogoImg"  width="151" height="151" src={dog.image.url} alt="not found"/>) :
             (<img className="DogoImg"  width="151" height="151" src={'https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg'} alt="not found"/>)}
            </>
}

export default Dogos