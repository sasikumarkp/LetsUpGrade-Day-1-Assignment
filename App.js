import React from "react";
import "./style.css";
import Button from "./button.js"


const Apple=()=>{
    return(
        <div>
            <h1>FULL STACK WEB DEVELOPMENT</h1>
            <h2>Front-End Web Development Tools</h2>
            <div className="btn1">
            <Button buttonText="HTML"/>
            <Button buttonText="CSS"/>
            <Button buttonText="JavaScript"/>
            </div>
        </div>
    )
}

export default Apple;