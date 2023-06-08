import React from 'react'
import NavbarComponent from './NavbarComponent'
import SideBarIcons from './SideBarIcons'
import './StudentPage.css'
// import data from './Manual_data/Sidebar_data'
import CardComponent from './CardComponent'
import Dashboard from './Dashboard';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'

function StudentPage() {

  return (
    <div>      

          <div className='container'>
            <CardComponent />
          </div>
        </div>

      
     
    // </div>
  )
}


export default StudentPage
