import React from 'react'
import Card from '../components/Card'
import ExerciseForm from '../components/ExerciseForm'

class ExercicesNew extends React.Component{
    /*
    esto se uso para hacer une vento con el click de un boton
    handleClick = () =>{
        console.log('clicked')
    }
    
    //react event 
    render(){
        return (
            <button onClick={this.handleClick}>
                Send
            </button>
        )
    }
    */
    state = {}

    handleSubmit= e =>{
        e.preventDefault()
        console.log(this.state)
    }

    handleChange = e =>{
        console.log(`${e.target.name}: ${e.target.value}`)

        /*let partialState = {}
        partialState[e.target.name] = e.target.value
        this.setState(partialState)*/
        // esto sustituye al de arriba

        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render(){
    return(

        <div className="container">
        <form 
            onSubmit={this.handleSubmit}
        >
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="title" 
                    name="title"

                    onChange={this.handleChange}
                    value={this.state.title}
             
                />
            </div>
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="description" 
                    name="descriptions"

                    onChange={this.handleChange}
                    value={this.state.description}
             
                />
            </div>
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="img" 
                    name="img"

                    onChange={this.handleChange}
                    value={this.state.img}
                   
                />
            </div>
            <div className="form-row">
                <div className="col">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="leftColor" 
                        name="leftColor"

                        onChange={this.handleChange}
                        vale={this.state.leftColor}
                      
                    />
                </div>
                <div className="col">
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="rightColor" 
                        name="rightColor"

                        onChange={this.handleChange}
                        value={this.state.rightColor}
                      
                    />    
                </div>
            </div>
            
                <button 
                    type="submit" 
                    className="btn btn-primary float-right"
                >
                    Submit
                </button>
            </form>
        </div>
    
        )
    }
}

export default ExercicesNew;