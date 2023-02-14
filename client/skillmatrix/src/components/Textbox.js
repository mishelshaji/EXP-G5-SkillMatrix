import React from "react";
import '../components/Textbox.css'

function TextBox(props) {
    return (
        <input type={props.type} {...props.connect[0]}/>
    )
}
export default TextBox;