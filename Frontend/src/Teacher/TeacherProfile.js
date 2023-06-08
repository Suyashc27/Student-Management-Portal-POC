import React, { useEffect, useState, useRef } from "react";
import teacherstyle from '../Teacher/teachercard.module.css'
import { getTeacherById, getStudentById } from "../AdminSide/Admin/AdminService";

function TeacherProfile(props) {

  const [data, setData] = useState([]);
  const [token,setToken] =useState(null)
  let localdata = localStorage.getItem("data")
  const [commonfield, setCommonField] = useState('')

  
    useEffect(() => {

      const temp = JSON.parse(localdata)
      setToken(temp.token)
      
      if(props.name == "teacher")
      {
  
      getTeacherById(temp.teacher.teacher_id)
        .then((response) => {
          console.log(response);
          setData(response);
          setCommonField(response.qualification)
        })
      }
      else if(props.name === "student")
      {
        console.log(temp.student.student_id)
        getStudentById(temp.student.student_id)
        .then((response) => {
        console.log(response);
        setData(response);
        setCommonField(response.roll_no)
        
      })
      }


    }, []);
   
 
 

  return (
    <div>
      

      <div className={teacherstyle.myprofilecard}>

        <div className={teacherstyle.classAvatar}>
        </div>

        <div className={teacherstyle.myprofilecontainer}>
          <div className={teacherstyle.myprofileheader}>
            <h1>My Profile</h1>
          </div>
          <div className={teacherstyle.myprofilebody}>
            <div className={teacherstyle.profilefields}>
              <label for="fname">First name</label>
              <input type="text" id="fname" name="fname" readOnly
              value={data.user && data.user.first_name}
              style={{ margin: "10px", padding: "10px", backgroundColor:"#f2f2f2"}}></input>
            </div>

            <div className={teacherstyle.profilefields}>
              <label for="lname">Last name</label>
              <input type="text" id="lname" name="lname" readOnly
              value={data.user && data.user.last_name}
              style={{ margin: "10px", padding: "10px"}}></input>
            </div>

            <div className={teacherstyle.profilefields}>
              <label for="uname">User name</label>
              <input type="text" id="uname" name="uname" readOnly
              value={data.user && data.user.username}
              style={{ margin: "10px", padding: "10px"}}></input>
            </div>

            <div className={teacherstyle.profilefields}>
              <label for="commonf">{props.fieldname}</label>
              <input type="text" id="commonf" name="commonf" readOnly
              value={commonfield}
              style={{ margin: "10px", padding: "10px"}}></input>
            </div>

            <div className={teacherstyle.profilefields}>
              <label for="standard">Standard</label>
              <input type="text" id="standard" name="standard" readOnly
              value={data.user && data.standard.standard_id}
              style={{margin: "10px", padding: "10px"}}></input>
            </div>

            <div className={teacherstyle.profilefields}>
              <label for="dob">Birthday</label>
              <input type="text" id="dob" name="dob" readOnly
              value={data.user && data.user.dob}
              style={{margin: "10px", padding: "10px"}}></input>
            </div>

            {/* <div className={teacherstyle.profilefields}>
              <label for="password">Password</label>
              <input type="text" id="password" name="password" readOnly
            //   value={data.user.password}
              style={{margin: "10px", padding: "10px"}}></input>
            </div> */}

            <div className={teacherstyle.profilefields}>
              <label for="gender">Gender</label>
              <input type="text" id="gender" name="gender" readOnly
              value={data.user && data.user.gender}
              style={{margin: "10px", padding: "10px"}}></input>
            </div>

            <div className={teacherstyle.profilefields}>
              <label for="contact">Contact</label>
              <input type="text" id="contact" name="contact" readOnly
              value={data.user && data.user.contact}
              style={{margin: "10px", padding: "10px"}}></input>
            </div>

            <div className={teacherstyle.profilefields}>
              <label for="email">Email</label>
              <input type="text" id="email" name="email" readOnly
              value={data.user && data.user.email}
              style={{margin: "10px", padding: "10px"}}></input>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherProfile;
