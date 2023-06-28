import React from "react";
import imageAdd from "../images/add.avif"
import './styles/Card.css'

function AgregarCard(props){
    return(
        <div className="AddCard-down">
            <img src= {imageAdd} />
        </div>
    )
}

export default AgregarCard;