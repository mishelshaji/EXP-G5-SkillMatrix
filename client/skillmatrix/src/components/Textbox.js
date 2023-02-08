import React from "react";
import '../components/Textbox.css';

function TextBox(props) {
    return (
        <input type="text" placeholder={props.prompt} />
    )
}
export default TextBox;