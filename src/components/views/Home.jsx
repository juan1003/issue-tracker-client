import React, {useState, useEffect} from 'react'
import Card from "../common/Card";

import {fetchIssues} from "../../api/issues"

export default function Home() {
    const [issues, setIssues] = useState([])
  
    useEffect(() => {  
      fetchIssues()
      .then( issues => {
        setIssues(issues)
      }).catch(error => console.error(error.message, error.stack))
    }, [])

    if(issues.length > 0) {
      return (
        issues.map((issue, index) => {
          return (<Card 
                    key={index}
                    name={issue.full_name} 
                    username={issue.username} 
                    title={issue.title} 
                    description={issue.description} 
                    comments={issue.comments}
                  />)
        })
      )
    } else {
      return (
        <p style={styles.watermark}>No issues has been posted.</p>
      )
    }
}

const styles = {
  watermark: {
    textAlign: 'center',
    fontSize: '2.4em',
    color: 'rgba(27,119,183,0.65)',
    border: '2px solid rgba(27,119,183,0.65)',
    borderRadius: '5px',
    padding: '15px'
  }
}
