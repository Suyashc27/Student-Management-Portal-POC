import { Button } from "@mui/material";



import { bgcolor } from "@mui/system";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeStudent from "../Pictures/studygif.gif";
import classes from "./landing.module.css";

function HomePage() {
    
   
    return (
        <div className={classes.landingbody}>
            <div className={classes.landingimage}>
                <img width="720px" src={HomeStudent} />
            </div>

            <div style={{ width: "50%" }}>

                <div className={classes.landingcontainer}>
                    <h1>
                        Welcome to <br></br>Student Management
                        Portal
                    </h1>
                    
                </div>

                <Link to='./login' style={{textDecoration:"none"}}>
                <Button style={{border:"2px solid black",color:"black"}}>Access Here >>></Button>

                </Link>

            </div>
        </div>
    );

}
export default HomePage;