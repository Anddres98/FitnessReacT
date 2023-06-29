import React from "react";
import ExerciseList from '../components/ExerciseList'
import Welcome from '../components/Welcome'
import AgregarCard from "../components/AgregarCard";


class Exercices extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: [
                {
                    "id": 1,
                    "title": "Technique gudies",
                    "description": "Learn amazing street workout and calisthenis",
                    "img": "",
                    "leftColor": "#A74CF2",
                    "rightColor": "#617BFB"
                },{
                    "id": 2,
                    "title": "Skill Training",
                    "description": "Learn the secrets of bodywieght technique",
                    "img": "",
                    "leftColor": "#17EAD9",
                    "rightColor": "#6078EA"
                },{
                    "id": 3,
                    "title": "Strength Training",
                    "description": "Train anytime, Everywere and become a suppport",
                    "img": "",
                    "leftColor": "#FAD961",
                    "rightColor": "#F76B1C"
                }
            ]
        }
    }

    render(){
        return (
            <div>
                <Welcome
                    username= "Andres"
                />
                <ExerciseList
                    exercises= {this.state.data}
                />     
                <AgregarCard
                    
                />
            </div>
        )
    }

}

export default Exercices; 