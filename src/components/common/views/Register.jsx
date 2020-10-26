import React, {useState} from 'react'

import {register} from "../../../api/user"

export default function Register() {
    
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName]   = useState("")
    const [username, setUsername]   = useState("")
    const [password, setPassword]   = useState("")

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        const response = await register(firstName, lastName, username, password)
        window.alert(JSON.stringify(response.message))
    }

    return (
        <div className="card">
            <div className="card-header">
                <span style={{ padding: '10px 30px', fontSize: '2em' }}>Register</span>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input 
                            className="form-control" 
                            type="text" 
                            name="firstName"
                            id="firstName" 
                            placeholder="Enter your first name..." 
                            value={firstName}
                            onChange={evt => setFirstName(evt.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input 
                            className="form-control" 
                            type="text" 
                            name="lastName" 
                            id="lastName" 
                            placeholder="Enter your last name..." 
                            value={lastName}
                            onChange={evt => setLastName(evt.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input 
                            className="form-control" 
                            type="text" 
                            name="username" 
                            id="username" 
                            placeholder="Enter your username..." 
                            value={username}
                            onChange={evt => setUsername(evt.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            className="form-control" 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder="Enter your password..." 
                            value={password}
                            onChange={evt => setPassword(evt.target.value)}
                        />
                    </div>
                    <input type="submit" value="Submit &raquo;" />
                </form>
            </div>
        </div>
    )
}
