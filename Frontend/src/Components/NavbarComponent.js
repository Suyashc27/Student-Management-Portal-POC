import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';
import { useNavigate } from 'react-router-dom'
import { doLogOut } from './FormUser'

export default function NavbarComponent(props) {

  const navigate = useNavigate()
  const navigate1 = useNavigate()
  const logout = () => {
    localStorage.removeItem("data");
    navigate('/')

  }
  const dashboard = () =>
  {
    if(props.name.role_type==="STUDENT")
      navigate('/student/studentPage')
    else if(props.name.role_type==="TEACHER")
      navigate('/teacher/teacherPage')
  }



  return (
    <div>
      <Navbar style={{ background: "#1976d2", color: "white",width:"96rem" }} expand="md">
        <div style={{
          fontSize: "20px",
          fontWeight: "bold",
           height: "50px",
          display: "flex",
          alignItems: "center",
          // textAlign: "center"
        }}><Button style={{border:"none", background:"none", boxShadow:"none"}} onClick={dashboard}>Welcome {props.name}</Button></div>

        <Nav className='ms-auto' >
          <button onClick={logout}
            style={{
              color: "white",
              background: "red",
              border: "none",
              borderRadius: "10px",
               height: "40px",
              width: "100px",
              marginRight: "25px",
              fontWeight: "bold"
            }}> LogOut</button>


        </Nav>

      </Navbar>
    </div>
  )
}



