import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import "./register.css";
import Comon from "../comon/card/Card";
import SweetAlert from "react-bootstrap-sweetalert";
import Input from "../comon/input/Input";
import Btn from "../comon/button/Button";
import Axios from "axios";
import { Link } from "react-router-dom";
import axios from "axios";

function Register(props) {
  const navigate = useNavigate();
  const [user, setuser] = useState({
    name: "",
    email: "",
    password: "",
    cpass: "",
  });

  // useEffect(() => {
  //   if(localStorage.getItem('user'))
  //   {

  //  navigate('/Use/');
  //   }
  //  }, [])

  const [hide, sethide] = useState(false);

  const [emailvalid, setemailvalid] = useState({
    email: " ",
  });
  const [passwordvalid, setPasswordValid] = useState({ password: "" });
  const [cpassvalid, setCPassValid] = useState({ cpass: "" });

  const [valid, setValid] = useState({
    name: "",
  });

  function pagehandler(e) {
    setuser({ ...user, [e.target.name]: e.target.value });

    setValid(true);
    setemailvalid(true);
    setPasswordValid(true);
    setCPassValid(true);
  }

  const register = () => {
    if (user.name.trim() === "") {
      setValid(false);
      return;
    } else {
      setValid(true);
    }

    var filter =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (user.email.trim() === "") {
      setemailvalid(false);
      return;
    } else if (!filter.test(user.email)) {
      sethide("Email is not valid...  Follow This bvm@gmail.com");
      return;
    } else {
      setemailvalid(true);
    }

    const pattern = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
    const patterns = /[A-Z]/;

    const patternss = /[0-9]/;

    if (user.password.trim() === "") {
      setPasswordValid(false);
      return;
    } else if (!pattern.test(user.password)) {
      setPasswordValid(false);
      return;
    } else if (!patterns.test(user.password)) {
      setPasswordValid(false);
      return;
    } else if (!patternss.test(user.password)) {
      setPasswordValid(false);
      return;
    } else {
      setPasswordValid(true);
    }

    if (user.cpass.trim() === "") {
      setCPassValid(false);
      return;
    } else if (user.password !== user.cpass) {
      sethide("Password and Confirm Password does not match");
      return;
      // console.log("password",user.password !== user.cpass);
    }
  };

  function submit() {
    if (user.name.trim() === "") {
      setValid(false);
      return;
    } else {
      setValid(true);
    }

    var filter =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (user.email.trim() === "") {
      setemailvalid(false);
      return;
    } else if (!filter.test(user.email)) {
      sethide("Email is not valid...  Follow This bvm@gmail.com");
      return;
    } else {
      setemailvalid(true);
    }

    const pattern = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
    const patterns = /[A-Z]/;

    const patternss = /[0-9]/;

    if (user.password.trim() === "") {
      setPasswordValid(false);
      return;
    } else if (!pattern.test(user.password)) {
      setPasswordValid(false);
      return;
    } else if (!patterns.test(user.password)) {
      setPasswordValid(false);
      return;
    } else if (!patternss.test(user.password)) {
      setPasswordValid(false);
      return;
    } else {
      setPasswordValid(true);
    }

    if (user.cpass.trim() === "") {
      setCPassValid(false);
      return;
    } else if (user.password !== user.cpass) {
      sethide("Password and Confirm Password does not match");
      return;
      // console.log("password",user.password !== user.cpass);
    }

    navigate("/login/");

    const input = localStorage.getItem("user");
    const items = (() => {
      return input === null ? [] : JSON.parse(input);
    })();
    if ("") {
    } else {
      items.push(user);

      localStorage.setItem("user", JSON.stringify(items));
    }

    console.log("Submit--->", user);

    setuser({
      name: "",
      email: "",
      password: "",
      cpassword: "",
    });
  }

  return (
    <div className="registers">
      <Comon
        title="Register Form"
        style={{ padding: "15px 20px", width: "280px", borderradius: "28px" }}
      >
        <h1 style={{ textAlign: "center" }}>Register Form </h1>
        {!valid && <p className="error">Enter Your Name</p>}
        <Input
          type="text"
          label="Name"
          placeholder="Enter Name"
          name="name"
          value={user.name}
          onchange={pagehandler}
        />
        {!emailvalid && <p className="error">Enter Your Email</p>}
        <Input
          type="text"
          label="Email"
          placeholder="Enter Email"
          name="email"
          value={user.email}
          onchange={pagehandler}
        />
        {!passwordvalid && <p className="error">Enter Your Strong password</p>}
        <Input
          type="password"
          label="Password"
          placeholder="Enter Password"
          name="password"
          value={user.password}
          onchange={pagehandler}
        />
        {!cpassvalid && <p className="error">Enter Your password</p>}
        <Input
          type="password"
          label="Conform Password"
          placeholder="Enter Password"
          name="cpass"
          value={user.cpass}
          onchange={pagehandler}
        />
        <Btn btnTitle="Register" style={{ left: "80px" }} onsubmit={submit} />{" "}
        <br />
        <Typography>
          Are You Login? <Link to="/login">Login</Link>
        </Typography>
      </Comon>
      {hide && (
        <>
          <SweetAlert
            warning
            title={hide}
            onConfirm={() => sethide(false)}
            onCancel={() => undefined}
            icon="error"
          ></SweetAlert>
        </>
      )}
    </div>
  );
}

export default Register;
