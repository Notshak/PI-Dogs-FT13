import React from 'react'

function Temp({dog}){
    return <>
            {`name = ` + dog.name}
            <hr/>
            {'temperament = ' + dog.temperament}
            <hr/>
            {'life span = ' + dog.life_span}
            <hr/>
            <img width="300" height="300" src={dog.image.url} alt="not found"/>
            <hr/>
            {`weight = ${dog.weight.metric} kg`}
            <hr/>
            {`height = ${dog.height.metric} cm`}
            <hr/>
            </>
}

export default Temp