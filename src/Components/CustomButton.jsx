import React from "react";

function CustomButton(props) {
    return (
        <button className="signup-btn" onClick={()=>{
            props.onPostClick();
            props.onAddNewPost();
            props.onClose();
        }} type="button" disabled={props.disabled}>{props.text}</button>
    );
}

export default CustomButton;