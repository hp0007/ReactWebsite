import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Services from './components/Services'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Porfolio'
import Contact from './components/Contact'
import Error from './components/Error'

function App() {
  return (
    <Switch>
      <Route exact path="/ReactWebsite"  component={Home}/>
      <Route path="/services"  component={Services}/>
      <Route path="/about"  component={About}/>
      <Route path="/skills"  component={Skills}/>
      <Route path="/portfolio"  component={Portfolio}/>      
      <Route path="/contact"  component={Contact}/>
      <Route component={Error}/>
    </Switch>
  );
}

export default App;
