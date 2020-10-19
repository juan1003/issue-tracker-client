import React, {useState, useEffect} from 'react';
import Header from './components/common/Header';
import Card from "./components/common/Card";
import './App.css';

function App() {
  const [links, setLinks] = useState([
    {name: "Home", url: "/"},
    {name: "My Issues", url: "/my-issues"}
  ])

  const [issues, setIssues] = useState([])

  useEffect(() => {
    fetchIssues()
    .then( issues => {
      setIssues(issues)
    }).catch(error => console.error(error.message, error.stack))
  }, [])

  const fetchIssues = async () => {
    const options = {
      method: 'GET',
      headers: {
        token: localStorage.getItem('token')
      }
    }

    return (await fetch('http://localhost:8000/issues', options)).json()
  }

  return (
    <div className="App">
      <Header links={links}/>
      <div className="App-Content">
        {
          issues ? issues.map(issue => {
            return (<Card 
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
