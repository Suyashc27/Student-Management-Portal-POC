import React from 'react'
import NavbarComponent from './NavbarComponent'
import { getSubject } from "../AdminSide/Admin/AdminService";
import { useEffect, useState } from "react";
import axios from 'axios';


function MySubjects() {


    useEffect(() => {
        // getSubject()
        axios.get("http://localhost:8080/student/getSubject",)
        .then(response => {
            console.log(response)
        })
    }, [])


  return (
    <div>
              <NavbarComponent />

           


    </div>
  )
}

export default MySubjects
