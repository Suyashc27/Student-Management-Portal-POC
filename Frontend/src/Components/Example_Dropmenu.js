import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import classes from './Home.module.css'
export default function Example_Dropmenu(props)  {
 const [roles,setRoles] = useState('')

const onRoleChangeHandler=(e)=>{
  setRoles(e.target.value)
 props.onRoleChange(e.target.value)
}
 
    return (
      
      <div>
        <div className={classes.dropdown}>
          <label >Roles </label>
          <select 
              id="roles" value={roles} 
              style={{marginLeft:"102px", width:"250px"}} 
              className={classes.dropdowncontent}
              onChange={onRoleChangeHandler}>
          <option value="">Choose your role</option>      
          <option value="Admin">Admin</option>
          <option value="Teacher">Teacher</option>
          <option value="Student">Student</option>
          

          </select>
          
        </div>
      </div>
    )
  }
