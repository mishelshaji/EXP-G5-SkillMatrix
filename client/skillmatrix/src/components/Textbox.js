import React from "react";
import '../components/Textbox.css';

function TextBox(props) {
    return (
        <input type={props.type} placeholder={props.prompt} name = {props.name} {...props.connect[0]}/>
    )
}

export default TextBox;