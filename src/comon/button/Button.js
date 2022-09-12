import React from 'react';
import { Button}  from  '@mui/material';


function Btn(props) {
  const {btnTitle,onsubmit ,style} = props;
  return (
   
    <Button  type="submit" color="primary" variant="contained" style={style}  onClick={onsubmit} >{btnTitle || "Submit"}</Button>
   
  )
}

export default Btn;
// fullWidth