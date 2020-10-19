import React from "react"

export default function CardComment(props) {
    return (<div className="card-comments">
        <div className="card-comment-user">
            <span>{props.name}</span>
            <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.56)', marginTop: '5px' }}>@{props.username}</span>
        </div>
        <p className="card-comment-text">
            {props.message}
        </p>
    </div>)
}