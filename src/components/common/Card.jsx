import React from "react";

import CardComment from "./CardComment"

export default function Card(props) {
    return (<div className="card">
        <div className="card-header">
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <span>{props.name}</span>
                <span style={{fontSize: '22px', color: 'rgba(255,255,255,0.56)', marginTop: '5px'}}>@{props.username}</span>
            </div>
            <div class="dropdown">
                <span><i class="fas fa-ellipsis-v"></i></span>
                <div class="dropdown-content">
                    <a className="action-link" href="#">Edit</a>
                    <a className="action-link" href="#">Delete</a>
                </div>
            </div>
        </div>
        <div className="card-body">
<span className="card-body-title">{props.title}</span>
            <p className="card-body-text">
                {props.description}
            </p>
        </div>
        {
            props.comments ? (props.comments.map(comment => {
                return (<CardComment name={comment.full_name} username={comment.username} message={comment.message}/>)
            })) : <></>
        }
    </div>)
}