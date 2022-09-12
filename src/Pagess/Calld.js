import * as React from "react";
import { useState} from "react";
// import "./Calld.css";
import {
  Grid,
  Paper,
  Box,
  FormRow,
  Item,
  Slider,
  Checkbox,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// import Paper from '@mui/material/Paper';
// import { makeStyles } from  "@mui/styles";
import Switch from "@mui/material/Switch";
// import Paper from '@material-ui/core/Paper';
import Fade from "@mui/material/Fade";
import FormControlLabel from "@mui/material/FormControlLabel";
import Icon from "@mui/material//Icon";
// import SearchIcon from "@mui/material/icons/Search";
import { useNavigate } from "react-router-dom";
import Btn from "../comon/button/Button";
import Navbar from "../Navbar/Navbar"
function Calld() {
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

  function createData(ID, calories, fat, carbs, protein, proteins) {
    return { ID, calories, fat, carbs, protein, proteins };
  }

  const rows = [
    createData("0001", "8AmTo9Am", "25%", "75%", "100", "Delete"),
    createData("0001", "8AmTo9Am", "25%", "75%", "100", "Delete"),
    createData("0001", "8AmTo9Am", "25%", "75%", "100", "Delete"),
    createData("0001", "8AmTo9Am", "25%", "75%", "100", "Delete"),
    createData("0001", "8AmTo9Am", "25%", "75%", "100", "Delete"),
    createData("0001", "8AmTo9Am", "25%", "75%", "100", "Delete"),
    createData("0001", "8AmTo9Am", "25%", "75%", "100", "Delete"),
    createData("0001", "8AmTo9Am", "25%", "75%", "100", "Delete"),
  ];
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
    // var x = document.getElementById("myDIV");
    // if (x.style.display === "none") {
    //   x.style.display = "block";
    // } else {
    //   x.style.display = "none";
    // }
  };

const [hide,sethide]= useState(true);

 
  const navigate = useNavigate();
  const styles = { height: "300px", borderRadius: "10px" };
  const style = { height: "470px" };
  return (
    <>
    <Navbar/>
    {/* <Grid
      item
      xs={4}
      md={8}
      style={{ backgroundColor: "#E9E9E9", height: "133vh" }}
      padding="20px"
    > */}
      <Grid  sx={{backgroundColor:"#E9E9E9" ,height:"133vh", marginLeft: "-16px", width:"210vh",  marginTop: "73px" ,padding:"7px"}} >
      <Grid container direction="Column" xs={4} md={3} gap="33px" sx={{flexWrap:"wrap"}}>
        <Grid>
          <Grid sx={{ fontWeight: "bold" }}>Call Distribution</Grid>
        </Grid>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            <Grid>Call center 1</Grid>
            <Grid>Number:00000000</Grid>
          </Grid>
          <Grid item xs={8}>
            <Grid>Call center 2</Grid>
            <Grid>Number:00000000</Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        direction="row"
        xs={6}
        md={8}
        className="main"
       
        sx={{ width: "100% " }}
      >
        <Grid>
          <Grid>
            <Grid style={styles}>
              <Grid>
                <Paper
                  elevation={5}
                  sx={{ height: "100% ", borderRadius: "10px" }}
                >
                  <Grid padding="10px ">
                    <Grid>
                      <FormControlLabel
                        label="show"
                        control={
                          <Switch checked={checked} onChange={handleChange} onClick={()=> sethide(!hide)}/>
                        }
                      />
                    </Grid>
                    <Grid   
                            container  spacing={2} columns={13} >
                              { hide?
                              <>
                      <Grid  item  xs={3} >
                        <Box>From</Box>
                        <TextField  />
                      </Grid>
                      <Grid item  xs={3}>
                      <Box>To</Box>
                        <TextField />
                      </Grid>
                      <Grid item  xs={3}>
                      <Box>Period</Box>
                        <TextField label="100" sx={{ width: "100px" }} />
                        </Grid></>:null}
                    </Grid>
                 

                    <Grid container spacing={1} columns={16}>
                      <Grid item xs={4}>
                        <Grid>40</Grid>
                      </Grid>
                      <Grid item xs={4}>
                        <Grid>60</Grid>
                      </Grid>
                    </Grid>

                    <Grid container spacing={1} columns={10}>
                      <Grid item xs={3}>
                        <Slider
                          defaultValue={50}
                          aria-label="Default"
                          valueLabelDisplay="auto"
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={1} columns={16}>
                      <Grid item xs={4}>
                        <Grid>Call center 1</Grid>
                      </Grid>
                      <Grid item xs={4}>
                        <Grid>Call center 2</Grid>
                      </Grid>
                      <Grid item xs={4}>
                        <FormControlLabel
                          control={<Checkbox name="checkedA" />}
                          label="Apply to all selected brand"
                        />
                      </Grid>
                      <Icon className="fa fa-plus-circle" />
                    </Grid>

                    <Btn btnTitle="Save"> </Btn>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>


          
          <Grid>
            <Fade in={checked} >
              <Grid style={style}>
                <Paper elevation={5} sx={{ height: "100% " }}>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 500 }} aria-label="customized table">
                      <TableHead>
                        <TableRow>
                          {/* <StyledTableCell>Dessert (100g serving)</StyledTableCell> */}
                          <StyledTableCell align="left">ID</StyledTableCell>
                          <StyledTableCell align="right">
                            Schedule
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            Call center 1
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            Call center 2
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            Period
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            Action
                          </StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <StyledTableRow>
                            <StyledTableCell align="left">
                              {row.ID}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {row.calories}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {row.fat}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {row.carbs}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {row.protein}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {row.proteins}
                            </StyledTableCell>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
              </Grid>
            </Fade>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    </>
  );
}

export default Calld;
