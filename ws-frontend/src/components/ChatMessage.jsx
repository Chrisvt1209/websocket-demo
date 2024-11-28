import React from "react";

export default (props) => {
    const userName = props.userName;
    const message = props.message;

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{userName}</h5>
                <p className="card-text">{message}</p>
            </div>
        </div>
    )
}