import React from "react";

export default function Card(props) {
    return (<div className="card">
        <div className="card-header">
            <span>Getting Started</span>
            <div class="dropdown">
                <span><i class="fas fa-ellipsis-v"></i></span>
                <div class="dropdown-content">
                    <a className="action-link" href="#">Action</a>
                    <a className="action-link" href="#">Action</a>
                    <a className="action-link" href="#">Action</a>
                </div>
            </div>
        </div>
    </div>)
}