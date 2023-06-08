import React from "react";

import { useEffect, useState } from "react";
import axios from "axios";

// import * as React from 'react';
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import classes from "./MySubjects.module.css";
import { getSubject } from "../../AdminSide/Admin/AdminService";
import studentSubjectImage from '../../Pictures/student_subject.gif'


function MySubjects() {
  const theme = useTheme();
  // const [token, setToken] = useState(null)

  // const subject = ["MATHEMATICS", "PHYSICS", "CHEMISTRY", "HISTORY", "CIVICS"];
  const [subject, setSubject] = useState([])
  const [token,setToken] = useState(null)

  useEffect(() => {
    const temp = JSON.parse(localStorage.getItem("data"))
    setToken(temp.token)
    // console.log(temp.student.standard.standard_id)
    console.log(temp)
    

    getSubject(temp.student.standard.standard_id)
    .then((res)=>{
      setSubject(res)
      // console.log(res)
    
    })
    

  },[]);
  // console.log(subject)


  return (
    <div>




      <div className={classes.subjectCard}>
        
        <Card className={classes.subjectCardContainer}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto", width: "600px" }}>
   
              <div style={{ boxShadow: "10px 10px 10px 0px #aaaaaa"}}>
                <Typography component="div" variant="h5" style={{fontSize:"30px", fontWeight:"bold", margin:"20px"}}>
                  MY SUBJECTS
                </Typography>

                <div className="subjectName">
                 {/* { showSubjects()} */}
                  {subject.map((item) => {
                    return (
                      <div className={classes.subFields}>
                        <TextField
                          id="outlined-basic"
                          variant="outlined"
                          value={item.subject_name}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </CardContent>
            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
          </Box>

          <CardMedia
            component="img"
            sx={{ width: 400 }}
            image={studentSubjectImage}
            alt="Live from space album cover"
          />
        </Card>
      </div>
    </div>
  );
}

export default MySubjects;
