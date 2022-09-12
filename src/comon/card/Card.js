
import React from 'react';
import './Card.css'
import {  Grid, Paper }  from  '@mui/material';
import { style } from '@mui/system';


function Card(props) {
 const{title,style}= props;
    // const paperStyle={padding:20,height:'60vh',width:280,margin:"20px auto"} 
  return (
    <Grid  className='grid' >
  
        {/* <Paper elevation= {10} style={paperStyle}>  */}
        <Paper elevation= {10} style={style} > 
        {/* <Grid align="center"><h1 >{title}</h1></Grid> */}

      {props.children}


        </Paper>
    </Grid>
  )
}

export default Card;
