import React from 'react'

export default function Login(props) {
    return (
        <div className="card">
            <div className="card-header">
                <span style={{ padding: '10px 30px', fontSize: '2em' }}>Login</span>
            </div>
            <div className="card-body">
                <form onSubmit={props.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input className="form-control" type="text" name="username" id="username" placeholder="Enter your username..." value={props.username} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input className="form-control" type="password" name="password" id="password" placeholder="Enter your password..." value={props.password} />
                    </div>
                    <input type="submit" value="Login &raquo;" />
                </form>
            </div>
        </div>
    )
}
