import React, { useEffect, useState } from 'react'
import {Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';
import classes from './Home.module.css'
import studentImage from '../Pictures/loginpage.png'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { loginUser, getStudentById,getStudent, getTeacher } from '../AdminSide/Admin/AdminService';
export default function FormUser() {
const navigate = useNavigate()

const [login, setLogin] = useState(false)
const [user, setUser] = useState(undefined)
let data = localStorage.getItem("data")

const [token,setToken] = useState(null)



const [checkusername, setCheckusername] = useState(true)
const [checkpassword, setCheckpassword] = useState(true)
const [checkAllValidate, setcheckAllValidate] = useState(true)

getStudent().then(res => {

  const temp=JSON.parse(data)
  setToken(temp.token)
  // console.log(temp)
  if(JSON.parse(localStorage.getItem("data")))
  {
        console.log(res)
        if (res.length > 0)
        {
          if (temp.role === "ROLE_TEACHER") {
            navigate('/teacher/teacherPage')
            console.log("Teacher") 
    
          }
          if(temp.role==="ROLE_ADMIN")
               navigate("/admin")
         
          else if (temp.role === "ROLE_STUDENT") {
              navigate('/student/studentPage') 
              console.log("Student")
            }
         
            
        }     
       
   }
}).catch(e => {
    console.log("Stay here!")
  })


const [logindetail, setLoginDetail] = useState({
  username: '',
  password: ''

})
const handleChange = (event, field) => {

  let actualValue = event
  setLoginDetail({
    ...logindetail,
    [field]: actualValue
  })

}
//check if there is any data in the localstorage

const isLoggedIn = () => {

  if (data == null) return false
  else return true

}

//store the user data in the localstorage
const doLogin = (data) => {
  localStorage.setItem("data", JSON.stringify(data))

}



const getUserDetail = () => {
  if (isLoggedIn()) {
    return JSON.parse(localStorage.getItem("data")).user

  }
  else
    return false
}

useEffect(() => {


  setLogin(isLoggedIn())
  setUser(getUserDetail())

  
}, [login])

const handleClick = (e) => {
  e.preventDefault()
  console.log(logindetail)
  if (logindetail.username.trim() == '' && logindetail.password.trim() == '') {
    toast.error('User Name or Password is required',
      { position: toast.POSITION.BOTTOM_LEFT })

    return;

  }

  loginUser(logindetail).then((data) => {
    console.log("user logged in")
    console.log(data)
    window.location.reload()
    //save the data
    doLogin(data)

  }).catch(error => {
    // toast.error("Invalid User!")

    navigate('/')
    console.log(error)

  })

}


const usernameValidate = (e) => {
  handleChange(e.target.value, 'username')

  if (e.target.value.length === 0) {
    console.log("ok")
    setCheckusername(false)
    setcheckAllValidate(true)

  }
  else {
    setCheckusername(true)
    setcheckAllValidate(false || !checkpassword)

  }
}

const passwordValidate = (e) => {
  handleChange(e.target.value, 'password')
  if (e.target.value.length === 0) {
    setCheckpassword(false)
    setcheckAllValidate(true)
  }
  else {
    setCheckpassword(true)
    setcheckAllValidate(false || !checkusername)
  }

}



return (
  <div >

    <div className={classes.body}>
      <div className={classes.formbody}></div>
      <Form className={classes.form}>
        <header >

          <div style={{ fontSize: "35px", marginBottom: "20px", marginTop: "60px" }}>LogIn Here
          </div>
        </header>

        <FormGroup row>
          <Label for="userid" sm={4} style={{ marginTop: "40px" }}>User Name</Label>
          <Col sm={7}>
            
            <Input required type="text" name="username" id="username" style={{ marginTop: "40px" }}
              value={logindetail.username}
              //get the user name
              onChange={usernameValidate} />
              <div className={checkusername ? "d-none" : 'text-danger'} style={{fontSize:"15px"}}>This field is required!</div>



          </Col>

        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={4} style={{ marginTop: "40px" }}>Password</Label>

          <Col sm={7}>
            
            <Input required type="password" name="password" id="examplePassword"
              value={logindetail.password} style={{ marginTop: "40px" }}
              //get the user password
              onChange={passwordValidate}

            >
            
            </Input>
            <div className={checkpassword ? "d-none" : 'text-danger'} style={{fontSize:"15px"}}>This field is required!</div>


          </Col>
        </FormGroup>
        <ToastContainer />
        <Button style={{ background: "rgba(52, 95, 62, 0.8)", marginBottom: "-150px" }} onClick={handleClick}>Submit</Button>
      </Form>
      <div className={classes.image}>
        <img src={studentImage} className="rounded float-end" alt='' style={{ width: "600px", height: "500px" }}></img>
      </div>
      {/* } */}
    </div>


  </div>
)





}






