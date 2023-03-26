import React, { useState } from 'react'
import './forminput.css'

const FormInput = (props) => {

    const [focused, setFocused] = useState(false)
    const {label,errorMessage, onChange, id , ...inputProps} = props

  const handleFocus = ()=>{
     setFocused(true)
  }

  return (
    <div className='input'>
        <label >{label}</label>
        <input {...inputProps} onChange = {onChange} onBlur={handleFocus} focused = {focused.toString()} 
        onFocus= {()=>{inputProps.name ==="confirmPassword" && setFocused(true)}}
        />
        <span> {errorMessage} </span>
    </div>
  )
}

export default FormInput