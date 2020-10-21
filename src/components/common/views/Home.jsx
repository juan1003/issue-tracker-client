import React, {useState, useEffect} from 'react'
import Card from "../Card";

export default function Home() {
    const [issues, setIssues] = useState([])
  
    useEffect(() => {  
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
        <>
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
        </>
    )
}
