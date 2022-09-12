import React from "react";
import {
  Grid,
  Paper,
  Box,
 
  TextField,
} from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
// import TableCell from '@mui/material/TableCell';
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Input from "../comon/input/Input";
import Navbar from "../Navbar/Navbar"

function Tables() {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  function createData(ID, calories, fat, carbs, protein, proteins,Number,too) {
    return { ID, calories, fat, carbs, protein, proteins ,Number,too};
  }

  const rows = [
    createData("Brand", "xxx-0000","Lab-000","9999999999", "25%", "75%", "100", "28 Apr ,2022"),
    createData("Brand", "xxx-0000", "Lab-000","9999999999","25%", "75%", "100", "28 Apr ,2022"),
    createData("Brand", "xxx-0000", "Lab-000","9999999999","25%", "75%", "100", "28 Apr ,2022"),
    createData("Brand", "xxx-0000", "Lab-000", "9999999999","25%", "75%", "100", "28 Apr ,2022"),
    createData("Brand", "xxx-0000",  "Lab-000","9999999999","25%", "75%", "100", "28 Apr ,2022"),
    createData("Brand", "xxx-0000", "Lab-000", "9999999999","25%", "75%", "100", "28 Apr ,2022"),
    createData("Brand", "xxx-0000",  "Lab-000","9999999999","25%", "75%", "100", "28 Apr ,2022"),
    createData("Brand", "xxx-0000", "Lab-000","9999999999", "25%", "75%", "100", "28 Apr ,2022"),
  ];
 
  const styles = { height: "70px" };
  return (
    <>
    <Navbar/>
    {/* <Grid
      style={{ backgroundColor: "#E9E9E9", height: "133vh" }}
      padding="20px"
    > */}
    \
    
     <Grid  sx={{backgroundColor:"#E9E9E9" ,height:"89vh", marginLeft: "-21px", width:"333vh",  marginTop: "73px" ,padding:"7px"}} >
    <Grid container direction="Column" md={14}>
      <Grid sx={{ fontSize: "2rem" }}>
        Call Allocation Reportss
        
        <ArrowDropUpIcon />
         < ArrowDropDownOutlinedIcon />
      </Grid> 


      
      <Grid style={styles}>
    
        <Paper elevation={5} sx={{ height: "100% " }}>
        
          <TableContainer component={Paper}>
            <Grid sx={{display:"flex",justifyContent:"space-between"}}>
          <Grid padding="10px" sx={{display:"flex" ,borderRadius:"10px"}}  gap="10px"container direction="row"  >
                      <Grid item xs={2}   >
                        <TextField label="Date"   /> 
                      </Grid>
                      <Grid item xs={2}>
                        <TextField label="Month"/>
                      </Grid>
                      <Grid item xs={2}> 
                        <TextField  label="Year"/>
                      </Grid>
                    </Grid>
                    <Grid padding="10px" sx={{display:"flex",justifyContent:"center"}}  gap="50px">
                      <Grid item xs={2}  >
                      <Box  >Download</Box>
                      </Grid>
                      <Grid item xs={2}>
                      <Grid>Email</Grid>
                      </Grid>
                      <Grid item xs={2}> 
                      <Grid>Shedule</Grid>
                      </Grid>
                    </Grid>
                    </Grid>
                    
            <Table sx={{ minWidth: 500 }} aria-label="customized table">

              <TableHead>
             
                <TableRow>
                  {/* <StyledTableCell>Dessert (100g serving)</StyledTableCell> */}
            
                  <StyledTableCell align="left">Brand</StyledTableCell>
                  <StyledTableCell align="right">Property</StyledTableCell>
                  <StyledTableCell align="right">Context</StyledTableCell>
                  <StyledTableCell align="right">Number</StyledTableCell>
                  <StyledTableCell align="right">    Call center 1</StyledTableCell>
                  <StyledTableCell align="right">    Call center 2</StyledTableCell>
                  <StyledTableCell align="right">Period</StyledTableCell>
                  <StyledTableCell align="right">LastUpdate</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow>
                    <StyledTableCell align="left">{row.ID}</StyledTableCell>
                    <StyledTableCell align="right">
                      {row.calories}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.fat}</StyledTableCell>
                    <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                    <StyledTableCell align="right">
                      {row.protein}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.proteins}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.Number}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.too}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
      </Grid>
    </Grid>
    </>
  );
  
}

export default Tables;
