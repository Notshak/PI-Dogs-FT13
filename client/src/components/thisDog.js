import React, { useEffect, useState } from "react";
import axios from "axios";
import Temp from "../components/temp"

function ThisDog (){
    const url = document.URL.slice(26)
    const [dog, setDog] = useState([])
    const urlParam = new URLSearchParams(window.location.search)
    const myUrl = urlParam.get('name')

    useEffect(()=> {
        axios.get(`http://localhost:3001/dogs/${url}`)
        .then((perro) => setDog(perro.data))
      }, [])
      return <div className='thisDogDiv'>
                      <span>{urlParam.get('name')}</span>
          <a>{dog && dog.name &&<Temp dog={dog}/>}</a>
      </div>
}

export default ThisDog