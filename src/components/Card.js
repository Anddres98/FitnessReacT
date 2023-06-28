import React from 'react'
import exerviceImg from '../images/musculo.png'
import './styles/Card.css'
import circleImge from '../images/circles.png'

class Card extends React.Component{
    // se cre aun constructor para hacer un estado
    constructor(props){
        super(props)
        this.state = {
            image: ''
        }
    }
    // El otro componente es el componentWillMount()
    //este componente solo
    //Modifica el estado, nor ealza llamados a apis
    //no realiza suscripcion a eventos

    //Este componente es usado para
    //el mejor momento para llamar apis
    // realizar suspcripciones a eventos
    //modificar estado
    componentDidMount(){
        setTimeout(() =>{
            this.setState({
                image: '' 
            })
        },5000)
    }

    //Para la 
    //Puede ocurrir multiples veces, sucede cuando un dato de un componente se queire actualizar
    // se usa componentWillReceiveProps(nextProps)
    // realiza cambios en los estados basados en las nuevas propiedads
    //shouldComponentUpdate(nextProps, nextState)
    //validar si queremos renderizar o no el componente osea se valida antes si se quiere renderizar
    //componentWillUpdate(nextProps, nextState)
    //realiza cualquier tipo de preparacion antes de actualizacion, este sucede cuando el ateniro emtodo
    // el shouldcomponentUpdate manda un true realiza la ejecucion
    
    //componentDidUpdate(precProps, prevState) sirve para el dom y cualquier pia

    //componentWillUnmount()
    //dejar de escuchar eventos
    //desuscribirse de un websocket
    //cancelar peticiones http

    //componentDidCatch()
    // se enfoca en el control derrores al montar un componente
    // react 16 se implemento


    // el render debe ser una funcion pura
    // no debe modificar el estaod
     //Esto se crea para hacer la card el contenido que elemntos lleva y como se visualiza
    render(){
        const { title, description, img, leftColor, rightColor} = this.props
        return (
            <div className="card mx-auto Fitness-Card"
            style={{
                backgroundImage: `url(${circleImge}), linear-gradient(to right, ${this.props.leftColor}, ${this.props.rightColor})`
            }}
            >
                <div className='card-body'>
                    <div className='row center'>
                        <div className='col-6'>
                            <img src={this.state.image} className='float-right' />
                        </div>
                        <div className='col-6 Fitness-Card-Info'>
                            <h1> {title} </h1>
                            <p> {description} </p>
                        </div>
                    </div> 
                </div>
            </div>

        )
    }

}

export default Card;