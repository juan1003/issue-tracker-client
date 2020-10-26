import React from 'react'
import { useState } from 'react'

import {login} from '../../../api/user'

export default function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        const response = await login(username, password)
        window.alert(JSON.stringify(response.message))
    }

    return (
        <div className="card">
            <div className="card-header">
                <span style={{ padding: '10px 30px', fontSize: '2em' }}>Login</span>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
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
                    <input type="submit" value="Login &raquo;" />
                </form>
            </div>
        </div>
    )
}
