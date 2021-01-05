import React from 'react';
import './App.css';
import Home from './Componant/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route  
} from "react-router-dom";
import Contact from './Componant/Contact/Contact';
import About from './Componant/About/About';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
            
    
  );
}

export default App;
