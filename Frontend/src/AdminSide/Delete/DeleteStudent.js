import React, { useEffect } from 'react'
import TopNavBar from '../NavBars/TopNavBar'
import NestedSideBar from '../NavBars/NestedSideBar'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'


export default function Deleteteacher() {


  const [student_id, SetId] = useState('')
  const [token, setToken] = useState(null)

  useEffect(() => {
    const temp = JSON.parse(localStorage.getItem("data"))
    setToken(temp.token)
    console.log(temp)
  })

 
  function DeleteUser(student_id) {
    console.log(student_id)
    // alert(student_id)

    fetch('http://localhost:8080/admin/deletestudent/' + student_id, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },

    }).then((result) => {
      result.json().then((res) => {
        console.log(res)
        console.log(student_id)
      })
    })

  }



  return (
    <div>

      <Outlet />
      <div className='Delete' style={{ margin: "100px 500px" }}>
        <h1 className='deleteHeading'>Delete Records </h1>
        <form>

          <label for="delete">Delete ID: </label>          
          <input
            type="text"
            id="delete"
            value={student_id}
            onChange={(e) => SetId(e.target.value)} /><br /><br />
          {console.log(student_id)}
          {console.log("hi")}
          <button onClick={DeleteUser(student_id)}>DELETE</button>
         

        </form>
      </div>
    </div>
  )
}

