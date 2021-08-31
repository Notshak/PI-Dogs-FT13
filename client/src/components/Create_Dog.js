import React, { useEffect, useState } from "react";
import { getTemperaments } from '../actions/actions';
import { connect } from 'react-redux';
import axios from "axios";
import Style from '../css/Create.css'

function Create_Dog (props){
    const [dog, setDog] = useState({
        name:"",
        weight:"",
        height:"",
        life_span:"",
        temperament:[],
    });
    const [errors, setErrors] = useState({
        name:"",
        weight:"",
        height:"",
        life_span:"",
        temperament:[],
      });
    const handleDogChange = (e) => {setDog({
        ...dog,
        [e.target.name]: e.target.value,
      });
      setErrors(validate({
        ...dog,
        [e.target.name]: e.target.value
      }));
    };
    const handleDogTempChange = (e) => {setDog({
        ...dog,
        [e.target.name]: nop(dog,e.target.value)
      })
    };
    const handleSubmit = e => {
        e.preventDefault()
        axios.post(`http://localhost:3001/dogs`, dog)
    }


    useEffect(()=> {
        props.getTemperaments();
        // props.getAllDogs(input.name, input.page, input.order, input.param, input.filter); //name,page,order,param,filter
      }, [])


      return <form onSubmit={handleSubmit} className="form">
          <input className={errors.name && 'danger'} className="formName border" name="name" number="text" placeholder="  name..." value={dog.name} onChange={handleDogChange}/>
          {errors.name && (<p className='dangerName danger'>{errors.name}</p>)}
          <input name="weight" type="number" placeholder="  weight..." value={dog.weight} onChange={handleDogChange} className="formweight border" required/>
          {errors.weight && <p className='dangerWe danger'>{errors.weight}</p>}
          <input name="height" type="number" placeholder="  height..." value={dog.height} onChange={handleDogChange} className="formheight border" required/>
          {errors.height && <p className='dangerHe danger'>{errors.height}</p>}
          <input name="life_span" type="number" placeholder="  life span..." value={dog.life_span} onChange={handleDogChange} className="formlife_span border" required/>
          {errors.life_span && <p className='dangerLi danger'>{errors.life_span}</p>}
          <div className="mapTemp">
          {props.temperament && props.temperament.map( e => (
            <div key={`key_${e}`} >
              <input value={e} id={`temperament_${e}`}  name="temperament" type="checkbox" onChange={handleDogTempChange}/>
              <label className="checkbox" htmlFor={e}>{e}</label>
              </div>
          ))}
          </div>
          <div className="sendMe border">
          <input type="submit" value="enviar" className="submitButton border" />
          </div>
      </form>
}
function validate(el) {
    let errors = {};
    let array = Object.keys(el)

    array.forEach(e => 
    {if (!el[e]) {
      errors[e] = `${e} is required`;
    } 
    // else if (!/\S+@\S+\.\S+/.test(el[e])) {
    //   errors[e] = `${e} must not have symbols`;}
    }
      )
    return errors;
  };
function nop(dog,value){
    if(dog.temperament.includes(value)){ return dog.temperament.filter(e => e !== value) }
    else{return [...dog.temperament,...[value]]}
}


  function mapStateToProps(state){
    return{
        // dogs: state.dogs,
        temperament: state.temperament,
    }}
function mapDispatchToProps(dispatch){
    return{//name = "",page = "",order = "",param = "",filter = ""
        // getAllDogs : (name, page, order, param, filter) => dispatch(getAllDogs(name, page, order, param, filter)),
        getTemperaments : () => dispatch(getTemperaments()),
    }}

  export default connect (mapStateToProps, mapDispatchToProps)(Create_Dog)