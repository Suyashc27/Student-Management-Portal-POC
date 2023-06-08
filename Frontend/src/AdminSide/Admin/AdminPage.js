import React, { useEffect, useState } from "react";
import TopNavBar from '../NavBars/TopNavBar'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import NestedSideBar from '../NavBars/NestedSideBar'

import Button from "@mui/material/Button";
import { Label } from "reactstrap";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { getRoles } from "@testing-library/react";


function AdminPage() {

 
  const navigate = useNavigate()
  const [token, setToken] = useState(null)
  let data = localStorage.getItem("data")
  const [login, setLogin] = useState(false)
  const [user, setUser] = useState(undefined)

  const isLoggedIn = () => {
    if (data === null) return false
    else return true
  }
  const getUserDetail = () => {
    if (isLoggedIn()) {
      return JSON.parse(localStorage.getItem("data")).user

    }
    else
      return false
  }


  useEffect(() => {

    const temp = JSON.parse(data)
    setToken(temp.token)

    setLogin(isLoggedIn())
    setUser(getUserDetail())

  }, [login])

  const getRoles = () => {
    if (login) {
      const role = user.role_type
      console.log(role)
    }
  }

  
  return (
    <div>

      {
        login && (
          <>
            {
              user.role_type === "ADMIN" && (
                <>
                  {/* {console.log(user.role_type)} */}
                  <TopNavBar />
                  <NestedSideBar />
                 
                  <Outlet />
                </>
              )
            }

          </>
        )
      }

      {
        !login && (
          <>
            {navigate('./')}
          </>
        )
      }


    </div>

  )
}

export default AdminPage
