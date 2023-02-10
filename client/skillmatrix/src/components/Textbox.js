import React from "react";
import '../components/Textbox.css'

function TextBox(props) {
    return (
        <input type={props.type} placeholder={props.value} />
    )
}
export default TextBox;