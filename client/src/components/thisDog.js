import React, { useEffect, useState } from "react";
import axios from "axios";
import Temp from "../components/temp"

function ThisDog (){
    const url = document.URL.slice(26)
    const [dog, setDog] = useState([])

    useEffect(()=> {
        axios.get(`http://localhost:3001/dogs/${url}`)
        .then((perro) => setDog(perro.data))
      }, [])
      return <div className='thisDogDiv'>
          <a>{dog && dog.name &&<Temp dog={dog}/>}</a>
      </div>
}

export default ThisDog