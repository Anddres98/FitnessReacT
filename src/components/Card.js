import React from 'react'
import exerviceImg from '../images/musculo.png'
import './styles/Card.css'
import circleImge from '../images/circles.png'

class Card extends React.Component{

    render(){
        return (
            <div className="card mx-auto Fitness-Card"
            style={{
                backgroundImage: `url(${circleImge}), linear-gradient(to right, ${this.props.leftColor}, ${this.props.rightColor})`
            }}
            >
                <div className='card-body'>
                    <div className='row center'>
                        <div className='col-6'>
                            <img src={this.props.img} className='float-right' />
                        </div>
                        <div className='col-6 Fitness-Card-Info'>
                            <h1> {this.props.title} </h1>
                            <p> {this.props.description} </p>
                        </div>
                    </div> 
                </div>
            </div>

        )
    }

}

export default Card;