import React from 'react'
import {BrowserRouter, Routes ,Route, Swithc } from 'react-router-dom'
import Exercises from '../pages/Exercises'
import ExercisesNew from '../pages/ExerciseNew'
import NotFound from '../pages/NotFoun'

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/exercises' Component={Exercises} />
                <Route exact path='/exercises/new' Component={ExercisesNew}/> 
                <Route Component={NotFound}
            </Routes>
            
        </BrowserRouter>
    ) 

}


export default App;