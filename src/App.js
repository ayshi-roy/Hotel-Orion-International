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
import FullAbout from './Componant/About/FullAbout';

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
          <FullAbout></FullAbout>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
            
    
  );
}

export default App;
