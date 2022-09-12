import React, { useState, useEffect } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import Comon from "../comon/card/Card";
import Input from "../comon/input/Input";
import { Typography } from "@mui/material";

import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { Link } from "react-router-dom";
import Btn from "../comon/button/Button";
import { margin } from "@mui/system";
import axios from "axios";

function Login(props) {
  const navigate = useNavigate();
  // useEffect(() => {
  //  if(localStorage.getItem('user'))
  //  {

  // navigate('/Dashboard/');
  //  }
  // }, [])

  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const handelpass = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  const [input, setinput] = useState({
    email: "",
    password: "",
  });
  const [valid, setValid] = useState({
    name: "",
    password: " ",
  });

  function pagehandler(e) {
    setinput({ ...input, [e.target.name]: e.target.value });
    setValid(true);
  }

  function submit() {
    let store = JSON.parse(localStorage.getItem("user"));

    if (input.email && input.password) {
      var index = store.findIndex((element) => element.email === input.email);
      if (
        store[index]?.email === input.email &&
        store[index]?.password === input.password
      ) {
        navigate("/Dashboard");

        setinput({ email: " ", password: "" });
      }
      if (index === -1) {
        setValid((...valid) => ({ ...valid, email: true }));
      }
      if (index !== -1 && store[index]?.password !== input.password) {
        setValid((...valid) => ({ ...valid, password: true }));
      }
    } else {
      if (input.email === "") {
        setValid((...valid) => ({ ...valid, email: true }));
      }

      if (input.password === "") {
        setValid((...valid) => ({ ...valid, password: true }));
      }
    }
  }

  return (
    <div className="logins">
      <Comon
        style={{ padding: "10px 20px", width: "280px", borderradius: "28px" }}
      >
        <h1 style={{ textAlign: "center" }}>Login Form </h1>
        {valid.email == true && (
          <span className="errorMessage ">Enter the Valid Email</span>
        )}

        <Input
          type="text"
          label="Email"
          placeholder="Enter Email"
          name="email"
          onchange={pagehandler}
        />
        {valid.password == true && (
          <span className="errorMessage ">Enter the Valid Password</span>
        )}
        <Input
          type={type}
          label="Password"
          placeholder="Enter Password"
          name="password"
          onchange={pagehandler}
        />
        <div className="eyes">
          <span onClick={handelpass}>
            <Icon icon={icon} size={20} />
          </span>
        </div>
        <Btn btnTitle="Sign In " onsubmit={submit} style={{ left: "80px" }} />
        <br></br>
        <Typography>
          Are You Register? <Link to="/register">Register</Link>
        </Typography>
      </Comon>
    </div>
  );
}

export default Login;
