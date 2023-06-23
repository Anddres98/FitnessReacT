import React from 'react'
import exerviceImg from '../images/musculo.png'


class Card extends React.Component{
    render(){
        return (
            <div>
                <div>
                    <img src={exerviceImg}/>
                </div>
                <div>
                    <h1>Technique guides</h1>
                    <p> Learns amazing street workout and calisthenics</p>
                </div>

            </div>
        );
    }

}

export default Card;