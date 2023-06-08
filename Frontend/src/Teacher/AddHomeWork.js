import React from "react";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Button from '@mui/material/Button';
import homeworkimage from '../Pictures/Homework.png'


import classes from "./teachercard.module.css"
import { ToastContainer,toast } from "react-toastify";

function AddHomeWork() {
  const theme = useTheme();

   const subject = ["MATHEMATICS", "PHYSICS", "CHEMISTRY", "HISTORY", "CIVICS"];

  const [assignment,sethomework] = useState()
  const [homeworkdate,setdate] = useState()
  const [standard_id, setStandardId] = useState('')
  const [token,setToken] = useState(null)
  

  useEffect(()=>{

    const temp = JSON.parse(localStorage.getItem("data"))
    setToken(temp.token)

  },[])

  const resetform = () =>
  {
      sethomework('')
      setdate('')
      setStandardId('')
  }
  

  function addHomeWork() {
    console.log(assignment);
    console.log(homeworkdate);

  
  const homework = {assignment,homeworkdate,standard_id}
  

  

    fetch("http://localhost:8080/teacher/saveHomework/ " + standard_id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },

      body: JSON.stringify(homework),
    })

      .then(() => {
        console.log("Assigned successfully!");
        toast.success("Assignment assigned successfully!")
      })

      resetform()

 
}


  return (
    <div>
      <ToastContainer/>

      <div className={classes.addhomeworkCard}>
        <Card className={classes.addhomeworkCardbContainer}>
          <Box>
            <CardContent sx={{ width: "400px" }}>
              <div className={classes.addHomeWork}>
                <div classname={classes.addHomeWorkheader}>
                  <h1>Add Homework</h1>
                </div>
                <div className={classes.addHomeWorkContainer}>
                  <input
                    className={classes.homeworkfields}
                    // type="text"
                    placeholder="Enter Homework"
                    value={assignment || ''}
                    onChange={(e)=>sethomework(e.target.value)}
                  />

                  <input 
                  type="date"
                    name="homewor_kdate"
                    className={classes.homeworkfields}
                    value={homeworkdate || ''}
                    placeholder="Submit By"
                    onChange={(e)=>setdate(e.target.value)}
                  />
                  
                  <input 
                    // type="text"
                    name="standard"
                    className={classes.homeworkfields}
                    value={standard_id || ''}
                    placeholder="Standard"
                    onChange={(e)=>setStandardId(e.target.value)}
                  />

                  <Button variant="contained" className={classes.submitbtn} onClick={addHomeWork}>Add</Button>
                </div>
              </div>
            </CardContent>
          </Box>

          <CardMedia
            component="img"
            sx={{ width: 400 }}
            image={homeworkimage}
            alt="Live from space album cover"
          />
        </Card>
      </div>
    </div>
  );
}

export default AddHomeWork;
