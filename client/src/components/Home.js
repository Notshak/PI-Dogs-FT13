import React, { useEffect, useState } from "react";
import Dogos from "./Dogos";
import { Link } from "react-router-dom";
import { getAllDogs, getTemperaments } from '../actions/actions';
import { connect } from 'react-redux';
import style from "../css/Home.css"

function Home(props){
    const [input, setInput] = useState({
        name:"",
        page:1,
        order:"",
        param:"",
        filter:"",
        db:"",
    });
    const handleInputChange = function (e) {
        setInput({
          ...input,
          [e.target.name]: e.target.value
        })
      }
    const handleInputPageResetChange = function (e) {
        props.getAllDogs(input.name, 1, input.order, input.param, input.filter, input.db)
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
          props.getAllDogs(input.name, input.page, input.order, input.param, input.filter, input.db); //name,page,order,param,filter
        }, [input.page])


    return <div className="Home">
        
            <Link to="/create_dog" className="CreateLink">create breed</Link>
            <input name="name" value={input.name} placeholder="search by name" className="name" onChange={handleInputChange}/>
            <select className="filter" name="filter" className="filter" onChange={handleInputChange}>
                <option key="" value="">filter by Temperament</option>
                {props.temperament && props.temperament[0] && props.temperament.sort().map((temp) => 
                <option key={temp} value={temp} >{temp}</option> )}
            </select>
            <select className="order" name="order"  className="order" onChange={handleInputChange}>
                <option value="">select order</option>
                <option value="asc">asc</option>
                <option value="desc">desc</option>
            </select>
            <select className="by db" name="db" className="db"  onChange={handleInputChange}>
                <option className="valuee" value="">all dogs</option>
                <option value="api">only api</option>
                <option value="db">only created</option>
            </select>
            <select className="param" name="param" className="param" onChange={handleInputChange}>
                <option value="name">name</option>
                <option value="life_span">life_span</option>
            </select>
            <button name="page" onClick={handleInputPageChange} value={parseInt(input.page)} className="page">next page</button>
            <button onClick={handleInputPageResetChange} className="apply" >apply filters</button>
            <div className="OneDog">
            {props.dogs && props.dogs[0] &&  props.dogs.map((dog)=>

                (<Link to={`/Dog/${dog.id}`} key={dog.id} className="Dogo">
                    <Dogos dog={dog}/>
                </Link>)
                )
                }
            </div>
           </div>
}

function mapStateToProps(state){
    return{
        dogs: state.dogs,
        temperament: state.temperament,
    }}
function mapDispatchToProps(dispatch){
    return{//name = "",page = "",order = "",param = "",filter = ""
        getAllDogs : (name, page, order, param, filter, db) => dispatch(getAllDogs(name, page, order, param, filter, db)),
        getTemperaments : () => dispatch(getTemperaments()),
    }}

export default connect (mapStateToProps, mapDispatchToProps)(Home)