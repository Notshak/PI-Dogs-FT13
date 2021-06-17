import React, { useEffect, useState } from "react";
import Dogos from "./Dogos";
import { Link } from "react-router-dom";
import { getAllDogs, getTemperaments } from '../actions/actions';
import { connect } from 'react-redux';

function Home(props){
    const [input, setInput] = useState({
        name:"",
        page:1,
        order:"",
        param:"",
        filter:"",
    });
    const handleInputChange = function (e) {
        setInput({
          ...input,
          [e.target.name]: e.target.value
        })
      }
    const handleInputPageResetChange = function (e) {
        props.getAllDogs(input.name, 1, input.order, input.param, input.filter)
        setInput({
          ...input,
          page :1
        })
      }
    const handleInputPageChange = function (e) {
        e.preventDefault();
        setInput({
          ...input,
          page : input.page+1
        })
      }
      
      useEffect(()=> {
          props.getTemperaments();
          props.getAllDogs(input.name, input.page, input.order, input.param, input.filter); //name,page,order,param,filter
        }, [input.page])


    return <div className="Home">
            <input name="name" value={input.name} placeholder="search by name" onChange={handleInputChange}/>
            <select className="filter" name="filter" onChange={handleInputChange}>
                <option key="" value="">---</option>
                {props.temperament && props.temperament[0] && props.temperament.map((temp) => 
                <option key={temp} value={temp} >{temp}</option> )}
            </select>
            <select className="order" name="order" onChange={handleInputChange}>
                <option value="asc">asc</option>
                <option value="desc">desc</option>
            </select>
            <select className="by db">
                <option>all</option>
                <option>api</option>
                <option>created</option>
            </select>
            <select className="param" name="param" onChange={handleInputChange}>
                <option value="name">name</option>
                <option value="weight">weight</option>
            </select>
            <button name="page" onClick={handleInputPageChange} value={parseInt(input.page)}>{input.page}</button>
            <button onClick={handleInputPageResetChange} >apply filters</button>
            {props.dogs && props.dogs[0] && props.dogs.map((dog)=>
                (<Link to={`/Dog/${dog.id}`} key={dog.id} className="OneDog">
                    <Dogos dog={dog}/>
                </Link>))}
           </div>
}

function mapStateToProps(state){
    return{
        dogs: state.dogs,
        temperament: state.temperament,
    }}
function mapDispatchToProps(dispatch){
    return{//name = "",page = "",order = "",param = "",filter = ""
        getAllDogs : (name, page, order, param, filter) => dispatch(getAllDogs(name, page, order, param, filter)),
        getTemperaments : () => dispatch(getTemperaments()),
    }}

export default connect (mapStateToProps, mapDispatchToProps)(Home)