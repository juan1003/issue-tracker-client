import React from "react"
import {Link} from "react-router-dom"

export default function Header(props) {
    return (<header className="App-header">
        <span><Link to="/">Issue Tracker</Link></span>
        <nav>
            {
                props.links.map((link, index) => (<Link key={index} className="Nav-link" to={link.url}>{link.name}</Link>))
            }
        </nav>
    </header>)
}