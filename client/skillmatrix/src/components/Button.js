import React from "react";
import './Button.css';

function Button(props) {
    return (
     <button id={props.id} >{props.value}</button>
    )}
    
export default Button;