import React from 'react';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from './componet/Login'
import Register from'./componet/Register';

import Calld from './Pagess/Calld';



import {Navigate} from "react-router";

// import Navbar  from './navbar/index';

import './App.css';
import Dashboard from './Pagess/Dashboard';
// import Nav from './Navbar/Nav';
import Navbar from './Navbar/Navbar';
// import Drower from './Navbar/Drower';
import Table from './Pagess/Table';
// import New from './Pagess/New';
// import Routers from './Pagess/Router';

// import Drop from './Pagess/Drop'



function App() {

var user = localStorage.getItem('user');

  function RequireAuth({children}) {
    return user ? children : <Navigate to="/Login" replace/>;
  }
  
 

  return (


   

<>



{/* <Router> */}
  <Routes>
  {/* <Route exact path='/Calld' element={<RequireAuths><Login/></RequireAuths>} ></Route> */}
  <Route  exact path='/'  element={ < Login />}> </Route>
      <Route  exact path='/Login'  element={ < Login />}> </Route>
    <Route exact path='/Register' element={ < Register/>} ></Route>
    </Routes>
  <div className='container'>
  <Routes>
  <Route exact path='/Table' element={<RequireAuth><Table/></RequireAuth>} ></Route>
   <Route exact path='/Calld' element={<RequireAuth><Calld/></RequireAuth>} ></Route>
    <Route exact path='/Dashboard' element={<RequireAuth><Dashboard/></RequireAuth>} ></Route>
    {/* <Route exact path='/Dashboard' element={<RequireAuth><Drop/></RequireAuth>} ></Route> */}
      </Routes>
    </div>
   
    
    {/* </Router> */}
   
    </>

  );
}

export default App;
