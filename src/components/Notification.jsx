import React from "react";
import "../styles/notification.css"

export default function (props){
    return (
        <div style={props.style} className="notificationComponent">
            <p>{props.text}</p>
        </div>
    )
}