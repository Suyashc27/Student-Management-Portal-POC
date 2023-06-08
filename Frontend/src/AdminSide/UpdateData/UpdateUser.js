import React from 'react'
import TopNavBar from '../NavBars/TopNavBar'
import NestedSideBar from '../NavBars/NestedSideBar'
import { useState } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'


export default function UpdateUser(props) {


  const [id, SetId] = useState('')

  const navigate = useNavigate()

  function UpdateUser(id) {
    // alert(id)

    if(props.role === 'student')
    {
      navigate('/admin/updateStudentRecords',{state:{id:id}})
    }
    else
    {
      navigate('/admin/updateTeacherRecords',{state:{id:id}})
    }

   
  }



  return (
    <div>

      <Outlet/>
     
        <div className='Update' style={{margin:"100px 500px"}}>
          <h1 className='updateHeading'>{props.name} </h1>
          <form>

            <label for="update">Enter {props.role} ID:</label>
            <input type="text" id="update" value={id} onChange={(e) => SetId(e.target.value)} /><br /><br />


            <button style={{color : "skyblue"}} onClick={() => UpdateUser(id)}>Update</button>
          </form>
        </div>
      </div>
  )
}

