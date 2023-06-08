import React, { useEffect, useState, useRef } from "react";
// import teacherstyle from './Teacher/teachercard.module.css'

import classes from './MyProfile.module.css'
import { Avatar } from "@mui/material";
import { getStudentById } from "../AdminSide/Admin/AdminService";
import { Outlet } from "react-router-dom";

function MyProfile_Student() {

  const [data, setData] = useState([]);
  const [first_name, setFirstName] = useState("My fetched name");

  // let data;
  // const data = useRef([null]);

  const [token,setToken] = useState(null)
  useEffect(() => {
    const temp = JSON.parse(localStorage.getItem("data"))
    setToken(temp.token)
    console.log(temp.student.student_id)
    getStudentById(10)
      .then((response) => {
        console.log(response);
        setData(response);
      })
  }, []);



  return (
    <div >


     <div className={classes.body}>
        <div className={classes.cardBody} >
          <Avatar style={{
            marginLeft: "10px",
            height: "100px",
            width: "100px",

          }}
            src=""></Avatar>
             
          <div className={classes.cardContainer}>
          <h2
              style={{
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                fontSize: "50px",
                marginLeft: "30px"

              }}
            >
              My Profile
              
            </h2>

            <p className={classes.studentdata}>
              First Name: {data.user && data.user.first_name} <br></br>
              Last Name: {data.user && data.user.last_name}<br></br>
              Standard: {data.user && data.standard.standard_id}<br></br>
              Roll No: {data.user && data.roll_no}<br></br>
              User Name: {data.user && data.user.username}<br></br>
              Email Id: {data.user && data.user.email}<br></br>
            </p>

          </div>
        </div> 

      </div> 



    </div>

  );
}

export default MyProfile_Student;
