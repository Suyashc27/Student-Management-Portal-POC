import React, { useEffect, useState } from "react";
import classes from "./Form.module.css";
import Button from "@mui/material/Button";
import { Outlet, useLocation } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { addStudent, getStudentById, updateStudent } from "../Admin/AdminService";
import { Label } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import validator from "validator";


function Form(props) {

  const [roll_no, setRollno] = useState("");
  const [standard_id, setClassId] = useState("");
  const [contact, setContact] = useState("");
  const [dob, setDOB] = useState("");
  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [role_type, setRoleType] = useState("")
  const [token, setToken] = useState(null)
  const [nameErr, setNameErr] = useState('')
  const [emailErr, setEmailErr] = useState('')
  const [passworderr,setPasswordErr] = useState('')

  const [uid, setuid] = useState("");

  const location = useLocation();



  useEffect(() => {

    const temp = JSON.parse(localStorage.getItem("data"))
    setToken(temp.token)

    if (props.type === 'update') {

      let update_id = location.state.id;
      setuid(update_id)
      console.log(uid)
      getStudentById(uid)
        .then(res => {
          setData(res)
        })



      function setData(data) {
        setPassword(data.user.password)
        setRollno(data.roll_no)
        setClassId(data.standard.standard_id)
        setContact(data.user.contact)
        setDOB(data.user.dob)
        setEmail(data.user.email)
        setFirstName(data.user.first_name)
        setLastName(data.user.last_name)
        setUserName(data.user.username)
        setGender(data.user.gender)
      }

    }


  }, [uid])

  const resetForm = () => {
    setPassword('')
    setRollno('')
    setClassId('')
    setContact('')
    setPassword('')
    setDOB('')
    setEmail('')
    setFirstName('')
    setLastName('')
    setUserName('')
    setGender('')
  }

  const postData = (e) => {

    e.preventDefault();
    setRoleType("STUDENT")
    console.log(role_type)

    const user = {
      dob,
      email,
      first_name,
      last_name,
      username,
      password,
      gender,
      contact,
      role_type
    };
    const standard = {
      standard_id
    }

    const student = { user, roll_no, standard };


    //Update the student

    if (props.type === 'update') {
      // console.log("hi")
      // updateStudent(student, uid)
      fetch("http://localhost:8080/admin/updatestudent/ " + uid, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },

        body: JSON.stringify(student),
      })

        .then(() => {
          console.log("Student updated");
        })
      toast.success("Updated Successfully!")
    }
    //Else Add the student
    else {

      // addStudent(student)
      console.log(student)
      fetch("http://localhost:8080/admin/addstudent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },

        body: JSON.stringify(student),
      }).then(() => {
        console.log("New Student added");
        toast.success("Submitted Successfully!")
      });


    }


    console.log("Submiited Successfully!")
    resetForm()
  };
  const handleValidation = (evnt) => {

    let formIsValid = true;

    const InputValue = evnt.target.value.trim();
    const InputFieldName = evnt.target.name;

    //for fname
    if (InputFieldName === 'firstname') {
      if (first_name.length < 1) {
        formIsValid = false;
        setNameErr("name cannot be empty");
      }
      else {
        setNameErr("");
      }

      if (first_name.length > 0) {
        if (!InputValue.match(/^[a-zA-Z]+$/)) {
          formIsValid = false;
          setNameErr("Only letters");
        }
        else {
          setNameErr("");
        }
      }
    }

    //For Email
    if (InputFieldName === 'email') {
      if (email.length < 1) {
        formIsValid = false;
        setEmailErr("Cannot be empty");
      }

      if(validator.isEmail(email))
      {
        setEmailErr("")
      }
      else 
      {
        setEmailErr("Email is not valid")
      }

    }


    //for password 
    if (InputFieldName === 'password') {
      const uppercaseRegExp = /(?=.*?[A-Z])/;
      const lowercaseRegExp = /(?=.*?[a-z])/;
      const digitsRegExp = /(?=.*?[0-9])/;
      // const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
      const minLengthRegExp = /.{6,}/;

      const passwordLength = InputValue.length;
      const uppercasePassword = uppercaseRegExp.test(InputValue);
      const lowercasePassword = lowercaseRegExp.test(InputValue);
      const digitsPassword = digitsRegExp.test(InputValue);
      // const specialCharPassword = specialCharRegExp.test(InputValue);
      const minLengthPassword = minLengthRegExp.test(InputValue);

      let errMsg = "";
      if (passwordLength === 0) {
          errMsg = "Password is empty";
          formIsValid=false;
      } else if (!uppercasePassword) {
          errMsg = "At least one Uppercase";
      } else if (!lowercasePassword) {
          errMsg = "At least one Lowercase";
      } else if (!digitsPassword) {
          errMsg = "At least one digit";
      } 
      else if (!minLengthPassword) {
          errMsg = "At least minumum 6 characters";
          formIsValid=false;
      } else {
          errMsg = "";
      }
      setPasswordErr(errMsg);
  }

  }




  return (
    <div>



      <Outlet />
      <ToastContainer />

      <div className={classes.Form}>
        <h1 className={classes.heading}> {props.name}</h1>
        <form method="POST" onSubmit={postData}>
          <div className="row">

            <div >
              <Label>First Name : </Label>
              {/* <div className={checkfnameRegexValidate ? classes.hidden : classes.textRight + " text-danger"}>Please enter valid name</div> */}

              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="First Name *"
                required
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
                onKeyUp={(e) => handleValidation(e)}
                style={{ marginBottom: "10px", width: "60%", padding: "10px", float: "right" }}
              />
            </div>
            <p className={ "text-danger"}style={{ textAlign: "end" }}>{nameErr}</p>

         
            <div>
              <Label>Last Name : </Label>

              <input
                type="text"
                id="lname"
                name="lastname"
                required
                pattern="^[a-zA-Z]+$"
                placeholder="Lastname *"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
                style={{ marginBottom: "10px", width: "60%", padding: "10px", float: "right" }}
              />
            </div>
            <div>
              <Label>Roll Number : </Label>
              <input
                type="text"
                placeholder="Student Role No *"
                required
                value={roll_no}
                onChange={(e) => setRollno(e.target.value)}
                style={{ marginBottom: "10px", width: "60%", padding: "10px", float: "right" }}
              />


            </div><br></br>
            <div>
              <Label>Standard Id : </Label>
              <input
                type="text"
                id="standardid"
                name="standardid"
                placeholder="Standard Id *"
                required
                label={props.id}
                value={standard_id}
                onChange={(e) => setClassId(e.target.value)}
                style={{ marginBottom: "10px", width: "60%", padding: "10px", float: "right" }}
              />
            </div><br></br>
            <div>
              <Label>Contact : </Label>
              <input
                type="text"
                id="contact"
                name="contact"
                placeholder="Contact *"
                required

                pattern="^[1-9][0-9]{9}$"
                defaultValue={+91}
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                style={{ marginBottom: "10px", width: "60%", padding: "10px", float: "right" }}
              />
            </div><br></br>
            <div >
              <Label>Date Of Birth : </Label>
              <input
                type="text"
                id="dob"
                name="dob"
                placeholder="Date Of Birth *"
                required
                value={dob}
                pattern="\d\d\/\d\d\/(1[6-9]\d\d|[2-9]\d\d\d)$"
                onChange={(e) => setDOB(e.target.value)}
                style={{ marginBottom: "10px", width: "60%", padding: "10px", float: "right" }}
              />
            </div><br></br>
            <div >
              <Label>Gender: </Label>
              <input
                type="text"
                id="gender"
                name="gender"
                placeholder="Gender *"
                required
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                style={{ marginBottom: "10px", width: "60%", padding: "10px", float: "right" }}
              />
            </div><br></br>

            <div>
              <Label>Email : </Label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email *"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyUp={(e) => handleValidation(e)}
                style={{ marginBottom: "10px", width: "60%", padding: "10px", float: "right" }}
              />
            </div>
            <p className="text-danger" style={{ textAlign: "end" }}>{emailErr}</p>
            <br></br>
            <div>
              <Label>User Name : </Label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="User Name *"
                required
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                style={{ marginBottom: "10px", width: "60%", padding: "10px", float: "right" }}
              />
            </div><br></br>
            <div >
              <Label>Password : </Label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password *"
                required
                // pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyUp={(e) => handleValidation(e)}
                style={{ marginBottom: "20px", width: "60%", padding: "10px", float: "right" }}

              />
            </div>
            <p className="text-danger" style={{ textAlign: "end" }}>{passworderr}</p>

            <Button
              type="submit"
              variant="contained"
              color="success"
              style={{width:"100px",display:"flex", alignItems:"center"}}
            // onClick={postData}
            // className={classes.submitButton}
            >
              Submit
            </Button>

          </div>

          <br />



          <FormControl></FormControl>


        </form>
      </div>
    </div>
  );
}

export default Form;
