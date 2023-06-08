import React, { useState, useEffect } from "react";
import classes from "./Form.module.css";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import axios from "axios";
import TopNavBar from '../NavBars/TopNavBar'
import NestedSideBar from '../NavBars/NestedSideBar'
import { Outlet, useLocation } from "react-router-dom";
import { getTeacherById, updateTeacher } from "../Admin/AdminService";
import { Label } from "reactstrap";
// import * as React from 'react';

import FormControl from "@mui/material/FormControl";
import { ToastContainer, toast } from "react-toastify";




function TeacherForm(props) {


  const [qualification, setQualification] = useState("");

  const [standard_id, setClassId] = useState("");

  const [contact, setContact] = useState("");
  const [dob, setDOB] = useState("");
  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [token, setToken] = useState(null)

  const [uid, setuid] = useState("");
  const location = useLocation();


  useEffect(() => {

    const temp = JSON.parse(localStorage.getItem("data"))
    setToken(temp.token)

    if (props.type === 'update') {

      let update_id = location.state.id;
      setuid(update_id)
      console.log(uid)

      getTeacherById(uid)
        .then(res => {
          console.log(res.user.username)
          setData(res)

        })

    }

    function setData(data) {
      setPassword(data.user.password)
      setQualification(data.qualification)
      setClassId(data.standard.standard_id)
      setContact(data.user.contact)
      setDOB(data.user.dob)
      setEmail(data.user.email)
      setFirstName(data.user.first_name)
      setLastName(data.user.last_name)
      setUserName(data.user.username)
      setGender(data.user.gender)
    }




  }, [uid])




  const postData = (e) => {


    e.preventDefault();
    const user = {
      dob,
      email,
      first_name,
      last_name,
      username,
      password,
      gender,
      contact,
    };
    const standard = {
      standard_id
    }

    const teacher = { user, qualification, standard };
    console.log(teacher);

    if (props.type === 'update') {
      console.log("hi")

      // updateTeacher(teacher, uid)
      fetch("http://localhost:8080/admin/updateteacher/" + uid, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(teacher)
      })
        .then(() => {
          console.log("Teacher updated");
        })
        // toast.success("Updated Successfully!")
    }
    else {
      console.log("hi")

      fetch("http://localhost:8080/admin/addteacher", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(teacher),
       
      }).then(() => {
        console.log("New Teacher added");
      });
      // toast.success("Submitted Successfully!")
    }

    console.log("Submiited Successfully!")
    setPassword('')
    setQualification('')
    setClassId('')
    setContact('')
    setPassword('')
    setDOB('')
    setEmail('')
    setFirstName('')
    setLastName('')

    setUserName('')
    setGender('')
  };

  return (
    <div>

      <Outlet />

      {/* <ToastContainer/> */}

      {/* className="materialForm" */}
      <div className={classes.Form}>
        <h1 className={classes.heading}> {props.name}</h1>
        <form >
          <div className={classes.row}>
            <div >
              <Label>First Name : </Label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="First Name *"
                required
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
                style={{ marginBottom: "10px", width: "60%", padding: "10px", float: "right" }}
              />
            </div><br></br>
            <div >
              <Label>Last Name : </Label>
              <input
                type="text"
                id="lname"
                name="lastname"
                required
                placeholder="Lastname *"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
                style={{ marginBottom: "10px", width: "60%", padding: "10px", float: "right" }}
              />
            </div><br></br>

            <div>
              <Label>Qualification : </Label>
              <input
                type="text"
                placeholder="Qualification *"
                required
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}
                style={{ marginBottom: "10px", width: "60%", padding: "10px", float: "right" }}
              />


            </div><br></br>
            <div>
              <Label>Standard Id : </Label>
              <input
                type="text"
                id="standardid"
                name="standardid"
                placeholder="Standard Id *"
                required
                label={props.id}
                value={standard_id}
                onChange={(e) => setClassId(e.target.value)}
                style={{ marginBottom: "10px", width: "60%", padding: "10px", float: "right" }}
              />
            </div><br></br>
            <div>
              <Label>Contact : </Label>
              <input
                type="number"
                id="contact"
                name="contact"
                placeholder="Contact *"
                required
                label="Number"
                defaultValue={+91}
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                style={{ marginBottom: "10px", width: "60%", padding: "10px", float: "right" }}
              />
            </div><br></br>
            <div>
              <Label>Date Of Birth : </Label>
              <input
                type="text"
                id="dob"
                name="dob"
                placeholder="Date Of Birth *"
                required
                value={dob}
                onChange={(e) => setDOB(e.target.value)}
                style={{ marginBottom: "10px", width: "60%", padding: "10px", float: "right" }}
              />
            </div><br></br>
            <div>
              <Label>Gender: </Label>
              <input
                type="text"
                id="gender"
                name="gender"
                placeholder="Gender *"
                required
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                style={{ marginBottom: "10px", width: "60%", padding: "10px", float: "right" }}
              />
            </div><br></br>

            <div>
              <Label>Email : </Label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email *"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ marginBottom: "10px", width: "60%", padding: "10px", float: "right" }}
              />
            </div><br></br>
            <div>
              <Label>User Name : </Label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="User Name *"
                required
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                style={{ marginBottom: "10px", width: "60%", padding: "10px", float: "right" }}
              />
            </div><br></br>
            <div>
              <Label>Password : </Label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password *"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ marginBottom: "10px", width: "60%", padding: "10px", float: "right" }}
              />
            </div><br></br>

            <Button
              variant="contained"
              color="success"
              onClick={postData}
              className={classes.submitButton}
            >
              Submit
            </Button>

          </div>

          <br />



          <FormControl></FormControl>


        </form>
      </div>
    </div>
  );
}

export default TeacherForm;
