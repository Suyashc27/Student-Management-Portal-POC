import React from 'react'

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import classes from "./teachercard.module.css"
import adminProfile from '../Pictures/admin.gif'

export function TeacherComponent() {

  const navigate = useNavigate()



  return (

    <div>

      <ToastContainer />
      <div className={classes.cardContainer} style={{alignItems: "center",
    justifyContent: "center"}}>
        <div style={{width:"30%"}}>
          <Col>
           
            <Col >
              <Card body className={classes.cardBody}>
                <CardTitle
                  style={{ fontWeight: "bold",fontSize:"20px"}}>
                  My Profile
                </CardTitle>
                <CardText>View your profile here</CardText>
                <Link to='/teacher/teacherprofile'>

                  <Button style={{ background: "#1976d2" }}>Show</Button>


                </Link>
              </Card>
            </Col>


            <Col >
              <Card body className={classes.cardBody}>
                <CardTitle
                  style={{ fontWeight: "bold",fontSize:"20px" }}>
                  View Students</CardTitle>
                  <CardText>Access your students</CardText>
                <Link to='/teacher/showStudent'>

                  <Button style={{ background: "#1976d2" }}>Show</Button>
                  {/* Add homework */}

                </Link>
              </Card>
            </Col>

            <Col >
              <Card body className={classes.cardBody}>
                <CardTitle
                  style={{ fontWeight: "bold",fontSize:"20px" }}>
                  Add Homework</CardTitle>
                <CardText>Assign homework to the students</CardText>
                <Link to='/teacher/addhomework'>

                  <Button style={{ background: "#1976d2" }}>Show</Button>


                </Link>
              </Card>
            </Col>
          </Col>
        </div>

        <div>
          <img src={adminProfile} style={{ marginLeft: "200px"}}></img>
        </div>

      </div>

    </div>
  )
}


