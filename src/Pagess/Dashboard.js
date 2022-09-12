import React, { useEffect } from "react";
  import "./Board.css";
import { Pie } from "react-chartjs-2";
import { Grid, Paper, Box, FormRow, Item } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Navbar from "../Navbar/Navbar"

ChartJS.register(ArcElement, Tooltip, Legend);

function Dashboard() {
  const style = { height: "120px", borderRadius: "10px" };
  const styles = {height:"100%", borderRadius: "10px" };

  const navigate = useNavigate();
  const data = {
  //  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        
      ],
      borderWidth: 1,
    },
  ],

  }
 
 


  return (
    <>
      <Navbar/>
      <Grid  sx={{backgroundColor:"#E9E9E9" ,height:"89vh", marginLeft: "-16px", width:"210vh",  marginTop: "73px" ,padding:"39px"}} >
        <Grid container direction="row" gap="50px"   >
          <Grid className="respo"container direction="Column" lg={3}  md={3} gap="10px">
          <Grid style={style}>
              <Paper elevation={5} sx={{ height: "100% ",borderRadius:"10px"}}>
              <Box
                direction="column"
                item
                md={4}
                sx={{
                  display: "flex",
                  // backgroundColor:"red",
                  justifyContent: "space-around",
                  alignItems: "center",
                  height: "100%",
                  fontWeight: "bold",
                }}
              >
                <Grid>Call center 1</Grid>
                <Grid>
                  <Box sx={{ fontSize: "2rem" }}>334</Box>
                  <Box>Calls</Box>
                </Grid>
              </Box>
              </Paper> 
            </Grid>
            <Grid style={style}>
              <Paper elevation={5} sx={{ height: "100% ",borderRadius:"10px"}}>
              <Box
                direction="column"
                item
                md={4}
                sx={{
                  display: "flex",
                  // backgroundColor:"red",
                  justifyContent: "space-around",
                  alignItems: "center",
                  height: "100%",
                  fontWeight: "bold",
                
                }}
              >
                <Grid>Call center 2</Grid>
                <Grid>
                  <Box sx={{ fontSize: "2rem" }}>116</Box>
                  <Box>Calls</Box>
                </Grid>
              </Box>
              </Paper> 
            </Grid>
          </Grid>

          <Grid direction="row"   lg={8} md={16}  className="main"  flex-wrap="column " sx={{ width: "100% ",hight:"100%"}}>
            <Grid style={styles}   >
              <Paper itemelevation={5} sx={{ height: "100% ",borderRadius:"10px"}}>
              <Box
                direction="column"
                item
                xs={6}
                md={4} 
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  backgroundColor:"#FFFFFF",
                  flexWrap:"wrap",
                  height: "100%",
                  borderRadius: "10px"
                }}
              >
                
                <Grid   
                  direction="column"
                  item
                xs={6}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    height:"100%",
                
                    flexDirection: "column",
                 
                  }}
                >
                <Box > Call Distribution Percentage</Box>
                  <Grid>
                   <Box sx={{ fontSize: "17px", fontFamily: "Work Sans", marginTop: "auto", fontWeight: "1000" }}> <div style={{backgroundColor:"red",height:"12px",width:"12px",display:"inline-block",borderRadius:"2px"}}/>  Call Center1</Box>
                 
                  <Box sx={{ fontSize: "17px", fontFamily: "Work Sans", marginTop: "auto", fontWeight: "1000" }}> <div style={{backgroundColor:"blue",height:"12px",width:"12px",display:"inline-block",borderRadius:"2px"}}/>  Call Center2</Box>
                  </Grid>
               
                </Grid>
               
                 
                <Grid direction="column"  item
                xs={4} md={3}>
                <Pie  direction="column"  container
                data={data}
                 />
                </Grid>
              </Box>
              </Paper> 
            </Grid>
          </Grid>
        </Grid>
      </Grid>
   
    </>
  );
}

export default Dashboard;


