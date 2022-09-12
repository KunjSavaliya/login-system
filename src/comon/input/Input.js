




import React from 'react';
import './input.css'
import {  TextField }  from  '@mui/material';
import Btn from '../button/Button';
import Card from '../card/Card';


function Input (props) {
    const{label,placeholder,type,onchange,name,style} = props
  return (
<div className='input'>
      <TextField  label={label}  placeholder={placeholder} name={name} onChange={onchange} type={type} style={style}fullWidth required>
          {props.children}
      </TextField>  
    
      </div>
  )
}

export default Input ;







