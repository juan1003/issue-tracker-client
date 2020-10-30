import React, {useState} from 'react';
import Header from './components/common/Header';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import Home from './components/views/Home'
import Login from './components/views/Login'
import Register from './components/views/Register'

function App() {
  const [links] = useState([
    {name: "Login", url: "/login"},
    {name: "Register", url: "/register"}
  ])

  return (
    <Router>
      <div className="App">
      <Header links={links}/>
      <div className="App-Content">
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/login">
            <Login/> 
          </Route>
          <Route path="/register">
            <Register/> 
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
