import React from 'react'
import '../css/Output.css'
function Output(props) {
  return (
    <div className='inner-div' key={props.data.number}>
         <img src={props.data.image} height="200px" alt='bike'></img>
         <h1>{props.data.name}</h1>
         <h4>Product: {props.data.product}</h4>
         <h4>Vechile No.{props.data.number}</h4>
         <button className='btn' onClick={()=>props.action(props.data.number)}>Remove</button>
    </div>
  )
}

export default Output
