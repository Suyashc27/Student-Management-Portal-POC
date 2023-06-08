import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';

import { Link, Navigate } from 'react-router-dom'

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import classes from './CardComponent.module.css'
import studentgif from '../Pictures/teacherprofile.gif'



// import './CardComponent.css'
export default function CardComponent() {


    return (
        <div>


            <ToastContainer />
            <div className={classes.cardContainer}>
            <div >
                <Col>
                    <Col >
                        <Card body className={classes.cardComponent}>
                            <CardTitle style={{ fontWeight: "bold",fontSize:"20px" }}>My Subjects</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Link to='/student/mySubjects'>
                                <Button style={{background: "#1976d2"}}>Show</Button>
                            </Link>



                        </Card>

                    </Col>

                    <Col>
                        <Card body className={classes.cardComponent}>
                            <CardTitle style={{ fontWeight: "bold",fontSize:"20px" }}>My Profile</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Link to={"/student/teacherProfile"}>
                                <Button style={{background: "#1976d2"}}> Show</Button></Link>


                        </Card>
                    </Col>

                    <Col>
                        <Card body className={classes.cardComponent}>
                            <CardTitle style={{ fontWeight: "bold",fontSize:"20px" }}>My Homework</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Link to={"/student/myhomework"}>
                                <Button style={{background: "#1976d2"}}> Show</Button></Link>


                        </Card>
                    </Col>
                    
                </Col>
                </div>

                <div>
                    <img src={studentgif} style={{marginLeft:"20px"}}></img>
                </div>
            </div>





        </div>
    )
}


