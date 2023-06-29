import React from "react";
import imageAdd from "../images/add.avif"
import './styles/Card.css'
import './styles/add.css'
import {Link} from 'react-router-dom'

function AgregarCard(props){
    return(
        <Link to="/exercises/new">
            <img src={imageAdd} className="AddCard"/>
        </Link>
    )
}

export default AgregarCard;