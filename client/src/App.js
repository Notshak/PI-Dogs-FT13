import { Route } from "react-router-dom"

import './css/App.css';
import Home from "./Home"
import LandingPage from './components/LandingPage';
import CreateDog from './components/CreateDog';

function App() {
  return (
    <div className="App">
      <h1>Henry Dogs</h1>
      {/* <Route path='/' exact component={LandingPage}/> */}
      <Route path='/' exact component={Home}/>
      <Route path='/home/createdog'  component={CreateDog}/>
    </div>
  );
}

export default App;
