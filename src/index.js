/*const element = document.createElement('h1')

element.innerText = 'Hello react'

const container = document.getElementById('root')

container.appendChild(element)*/

import React from 'react'
import ReactDOM  from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import exerciceImg from './images/musculo.png'
import Exercices from './pages/Exercices'

/*
const user = {
    firtsName: 'Andres',
    lastName: 'Pardo',
    avartar: ''
}

function getName(user){
    return `${user.firtsName} ${user.lastName} `
}

function getGreeting(user){
    if (user){
        return <h1> Hello {getName(user)} </h1>
    }
    return <h1> Hello Stranger </h1>
}

const name = 'Andres'
//Para crear un const con hijo se hace 
const element = (
        <div>
            <h1> {getGreeting(user)} </h1>
            <img />
        </div>
)

*/

const container = document.getElementById('root')

// el metodo render recibe dos parametros __Que__, __DONDE___ que renderear  y a dodne
//Para render un componente se tiene que escribir
// dentro de una </> para funcionar

ReactDOM.render(<Exercices/>, container)
