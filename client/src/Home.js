import {useDispatch, useSelector} from "react-redux"
import { useEffect } from 'react';
import {Link} from "react-router-dom"

import {getAllDogs} from "./actions/actions"

function Home(){
    
  const dispatch = useDispatch()
  const perros = useSelector(state => state.perros)
  useEffect(() => {
      dispatch(getAllDogs())
    },[dispatch])
    
    return(
        <div>
            <ul>
                {console.log(perros)}
                {
                    Array.isArray(perros) ? perros.map(currentDog=>(
                        <li key={currentDog.id}>
                            <Link to={`/dogs/${currentDog.id}`}>{currentDog.name}</Link>
                        </li>
                    )): <h1>Cargando...</h1>
                }
            </ul>
        </div>
    )
}

export default Home