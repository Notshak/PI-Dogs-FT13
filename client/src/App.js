import './App.css';
import { Route } from "react-router-dom"
import Home from "./components/Home"
import LandingPage from './components/LandingPage';
import CreateDog from './components/CreateDog';

function App() {
  return (
    <div className="App">
      <h1>Henry Dogs</h1>
      <Route path='/' exact component={LandingPage}/>
      <Route path='/home'  component={Home}/>
      <Route path='/home/createdog'  component={CreateDog}/>
    </div>
  );
}

export default App;
