import React, { useEffect, useState } from 'react'
import { getStudentforTeacher } from '../AdminSide/Admin/AdminService';
import NavbarComponent from '../Components/NavbarComponent'
import classes from "./teachercard.module.css"


function ShowStudent() {

  const [rows, setRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  const [roll_no, setRollno] = useState("");
  const [standard_id, setClassId] = useState("");
  const [contact, setContact] = useState("");
  const [dob, setDOB] = useState("");
  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [gender, setGender] = useState("");


  useEffect(() => {
    // const temp = localStorage.getItem("data")
    // setToken(temp.token)
    // console.log(temp)
    // console.log(temp.user.username)

    getStudentforTeacher(2)
      .then((response) => {
        setRows(response)
        // console.log(response)

        // console.log(rows.user.username)
      }, []);



  }, [])
  console.log(rows)



  const user = {
    dob,
    email,
    first_name,
    last_name,
    username,
    gender,
    contact

  }


  const standard = {
    standard_id
  }

  const student = { user, roll_no, standard }
  const tempRows = []

  


  return (
    <div>

      <div className={classes.showstudentbody}>
        <div className={classes.showstudentheader}>
          <h1>Students</h1>
          <input
            className={classes.searchBar}
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          ></input>
        </div>
        <div className={classes.showstudentcontainer}>
          <table>
            <thead className={classes.teacherrow}>

              <th>Student Id  {rows.user && rows.student_id}</th>
              <th>FIRST NAME {rows.user && rows.user.first_name}</th>
              <th>LAST NAME  {rows.user && rows.user.last_name}</th>
              <th>USERNAME   {rows.user && rows.user.username}</th>
              <th>ROLL NO    {rows.user && rows.user.roll_no}</th>
              <th>DOB        {rows.user && rows.user.dob}</th>
              <th>GENDER     {rows.user && rows.user.gender}</th>
              <th>CONTACT    {rows.user && rows.user.contact}</th>
              <th>EMAIL      {rows.user && rows.user.email}</th>
            </thead>
            <tbody>


              {rows
              .filter((val) => {
                if (searchTerm === "") return val;
                else if (
                  val.user.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  val.user.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  val.user.username.toLowerCase().includes(searchTerm.toLowerCase())
                )
                  return val;
              })
              .map((item) => (
                <tr className={classes.teacherrow}>
                  {console.log(item.user.first_name)}
                  <td style={{width:"10px"}}> {item.student_id}</td>
                  <td>{item.user.first_name}</td>
                  <td>{item.user.last_name}</td>
                  <td>{item.user.username}</td>
                  <td>{item.roll_no}</td>
                  <td>{item.user.dob}</td>
                  <td>{item.user.gender}</td>
                  <td>{item.user.contact}</td>
                  <td>{item.user.email}</td>
                  

                </tr>
                

              ))}

            </tbody>

          </table>

        </div>
      </div>

    </div>
  )
}

export default ShowStudent
