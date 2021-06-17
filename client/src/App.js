import { Route } from "react-router-dom"
import './css/App.css';
import LandingPage from './components/LandingPage';
import React from "react";
import Home from "./components/Home";
import ThisDog from "./components/thisDog";
import Create_Dog from "./components/Create_Dog";
import { Link } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <h1>Henry Dogs</h1>
      <Link to="/create_dog" >create breed</Link>
      <Route path='/' exact component={LandingPage}/>
      <Route path='/home' exact component={Home}/>
      <Route path="/Dog/" component={ThisDog}/>
      <Route path="/create_dog" component={Create_Dog} />
    </div>
  );
}

export default App;
