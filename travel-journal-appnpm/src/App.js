import React from "react"
import './style.css'
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from './data'



function App()
{

    const deets = data.map(pig =>{
        return(
            <Card 
            key = {pig.title}
            {...pig}
            />
        )
    })
    return (
        <div>
           <Navbar /> 
           <div>{deets}</div>
        </div>
        
    )
}

export default App