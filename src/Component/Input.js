import React, { useState } from 'react'
import '../css/Input.css'
function Input(props) {
  let [row,setRow]=useState({
    image:"",
    name:"",
    product:"",
    number:""
  })

    const ImageLink=(ev)=>{
        setRow({...row,image:ev.target.value});
        console.log(row)
    }
    const ProductName=(ev)=>{
        setRow({...row,name:ev.target.value});
        console.log(row)
    }
    const ProductType=(ev)=>{
        setRow({...row,product:ev.target.value});
        console.log(row)
    }
    const ProductId=(ev)=>{
        setRow({...row,number:ev.target.value});
        console.log(row)
    }
  return (
    <>
    <div className='form'>
        <h2>Enter Product Details</h2>
      <input type='text' onChange={ProductName} placeholder='Product Name'/>
      <input type='text' onChange={ProductType} placeholder='Product type'/>
      <input type='text' onChange={ProductId} placeholder='Product id'/>
      <input type='text' onChange={ImageLink} placeholder='Image Link'/>
      <div className='btn-box'>
      <button className='btn1' onClick={()=>props.action(row)}>Submit</button> 
      <button className='btn2' onClick={()=>props.action2(row)}>Update</button>
      </div>
    </div>
    </>
  )
}

export default Input
