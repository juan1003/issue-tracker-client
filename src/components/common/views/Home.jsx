import React, {useState, useEffect} from 'react'
import Card from "../Card";

import {fetchIssues} from "../../../api/issues"

export default function Home() {
    const [issues, setIssues] = useState([])
  
    useEffect(() => {  
      fetchIssues()
      .then( issues => {
        setIssues(issues)
      }).catch(error => console.error(error.message, error.stack))
    }, [])

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
