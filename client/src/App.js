import { Route } from "react-router-dom"
import  './css/App.css';
import LandingPage from './components/LandingPage';
import React from "react";
import Home from "./components/Home";
import ThisDog from "./components/thisDog";
import Create_Dog from "./components/Create_Dog";
import { Link } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Route  path='/:algo'><Link to="/home" className="HomeLink">Henry Dogs</Link></Route>
      <Route path='/' exact component={LandingPage}/>
      <Route path='/home' exact component={Home}/>
      <Route path="/Dog/" component={ThisDog}/>
      <Route path="/create_dog" component={Create_Dog} />
      <img className="Gif" src='https://media.baamboozle.com/uploads/images/82679/1596168626_362376'></img>
    </div>
  );
}

export default App;
