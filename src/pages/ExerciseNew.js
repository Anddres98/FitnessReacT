import React from 'react'

class ExercicesNew extends React.Component{
    
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
}

export default ExercicesNew;