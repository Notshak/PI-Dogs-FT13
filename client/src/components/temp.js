import React from 'react'
import style from "../css/thisDog.css"

function Temp({dog}){
    return <div className="thisDog Spans">
            <div className="Name Spans">{dog.name}</div>
            <div className="Life Spans">  {dog.life_span} </div>
            <div className="Temperament">  {dog.temperament} </div>
            <div className="img Spans"> 
            {dog.image? dog.image.url && (<img className="DogImg Spans" src={dog.image.url} alt="not found"/>) :
            (<img className="DogImg Spans" src={'https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg'} alt="not found"/>)}
            </div>
            <div className="Height Spans" >
            {dog.height.metric ? dog.height.metric: dog.height}
            </div>
            <div className="Weight Spans">
            {dog.weight.metric ? dog.weight.metric: dog.weight}
            </div>
                <span className="SpanName Spans">Name:</span>
                <span className="SpanLife Spans">Life Span:</span>
                <span className="SpanTemperament Spans">Temperament:</span>
                <span className="SpanHeight Spans">Height:</span>
                <span className="SpanWeight Spans">Weight:</span>
            </div>
}

export default Temp