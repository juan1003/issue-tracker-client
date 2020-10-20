import React from "react";

import CardComment from "./CardComment"

export default function Card(props) {
    return (<div className="card">
        <div className="card-header">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span>{props.name}</span>
                <span style={{ fontSize: '22px', color: 'rgba(255,255,255,0.56)', marginTop: '5px' }}>@{props.username}</span>
            </div>
            <div className="dropdown">
                <span><i className="fas fa-ellipsis-v"></i></span>
                <div className="dropdown-content">
                    <a className="action-link" href="/edit">Edit</a>
                    <a className="action-link" href="/delete">Delete</a>
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
            props.comments ? (props.comments.map((comment, index) => {
                return (<CardComment key={index} name={comment.full_name} username={comment.username} message={comment.message} />)
            })) : <></>
        }
    </div>)
}