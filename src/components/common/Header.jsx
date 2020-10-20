import React from "react"

export default function Header(props) {
    return (<header className="App-header">
        <span>Issue Tracker</span>
        <nav>
            {
                props.links.map((link, index) => (<a key={index} className="Nav-link" href={link.url}>{link.name}</a>))
            }
        </nav>
    </header>)
}