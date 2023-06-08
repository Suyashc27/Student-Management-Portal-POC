import React, { useEffect, useState } from 'react'
import { getHomeworkforStudent } from '../../AdminSide/Admin/AdminService'
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";


// import classes from "../Student/Subject/MySubjects.module.css";
import classes from "../../Teacher/teachercard.module.css"

function MyHomework() {
  
    const [data,setData] = useState([])
    const [token,setToken] = useState(null)

    useEffect(()=>{
        const temp = JSON.parse(localStorage.getItem("data"))
        setToken(temp.token)
        console.log(temp)
        console.log(temp.student.standard.standard_id)

        getHomeworkforStudent(temp.student.standard.standard_id)
        .then((response)=>{
            setData(response)
            console.log(response)
        })
    },[])
  return (
    <div>

<div className={classes.addhomeworkCard}>
                <Card className={classes.addhomeworkCardbContainer}>
                    <Box>
                        <CardContent sx={{ width: "400px" }}>
                            <div className={classes.addHomeWork}>
                                <div classname={classes.addHomeWorkheader}>
                                    <h1 style={{marginBottom : "30px"}}>Homework</h1>
                                </div>
                                <div className={classes.addHomeWorkContainer}>
                                    <table style={{ width: "100%", height: "100%" }}>
                                        <thead>
                                            <th>Homework</th>
                                            <th>Submit By</th>
                                        </thead>
                                        <tbody>
                                            {data.map((item) => (
                                                <tr>
                                                    <td>{item.assignment}</td>
                                                    <td>{item.homeworkdate}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </CardContent>
                    </Box>

                    <CardMedia
                        component="img"
                        sx={{ width: 400 }}
                        image="https://img.freepik.com/premium-vector/schoolboy-cute-beautiful-girl-surrounded-by-subjects-related-study-stationery-multicolored-vector-illustration-pencils-calculator-ruler-more-fun-flat_456865-53.jpg?w=740"
                        alt="Live from space album cover"
                    />
                </Card>
            </div>
      
    </div>
  )
}

export default MyHomework
