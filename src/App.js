import React, {useState} from 'react';
import Header from './components/common/Header';
import Card from "./components/common/Card";
import './App.css';

function App() {
  const [links, setLinks] = useState([
    {name: "Home", url: "/"},
    {name: "About", url: "/about"},
    {name: "Help", url: "/help"}
  ])

  return (
    <div className="App">
      <Header links={links}/>
      <div className="App-Content">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  );
}

export default App;
