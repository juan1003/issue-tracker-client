import React, {useState, useEffect} from 'react';
import Header from './components/common/Header';
import Card from "./components/common/Card";
import './App.css';

function App() {
  const [links, setLinks] = useState([])
  const [issues, setIssues] = useState([])

  useEffect(() => {
    if(localStorage.getItem('token')) {
      setLinks([
        {name: "Home", url: "/"},
        {name: "My Issues", url: "/my-issues"}
      ])
    } else {
      setLinks([
        {name: "Login", url: "/login"},
        {name: "Register", url: "/register"}
      ])
    }

    fetchIssues()
    .then( issues => {
      setIssues(issues)
    }).catch(error => console.error(error.message, error.stack))
  }, [])

  const fetchIssues = async () => {
    const options = {
      method: 'GET'
    }

    return (await fetch('http://localhost:8000/issues', options)).json()
  }

  return (
    <div className="App">
      <Header links={links}/>
      <div className="App-Content">
        {
          issues ? issues.map((issue, index) => {
            return (<Card 
                      key={index}
                      name={issue.full_name} 
                      username={issue.username} 
                      title={issue.title} 
                      description={issue.description} 
                      comments={issue.comments}
                    />)
          }) : <></>
        }
      </div>
    </div>
  );
}

export default App;
