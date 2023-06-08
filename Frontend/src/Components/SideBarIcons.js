import React from 'react'
import './StudentPage.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import items from '../Manual_data/Sidebar_data'
import { NavLink } from 'react-router-dom'
export default function SideBarIcons(props) {
    const [open, setOpen] = useState(false)
    return (
        <div className='sidebar-item'>
            
            <div className='sidebar-title'>
                <div className='sidebar-item'>
                    {/* {items.map((item, index) =>
                    (
                        <NavLink to={props.item.path} key={index}></NavLink>
                    )

                    )}
                    <i className={props.item.icon} ></i>
                    {props.item.title} */}

                    <Link style= { {textDecoration: 'none', color:'black'}} to='/dashboard'>
                        <span className='dashboard'>
                            <div className='sidebar-item:hover'>
                            {items.data[0].icon}
                            {items.data[0].title}
                            </div>
                            
                            
                        </span><br></br>
                    </Link>
                    <NavLink style= { {textDecoration: 'none', color:'black'}} to='/attendance'>
                        <span className='attendance'>
                            <div className='sidebar-item:hover'>
                              {items.data[1].icon}
                              {items.data[1].title}
                              </div>
                        </span><br></br>
                    </NavLink>
                    <Link style= { {textDecoration: 'none', color:'black'}} to='/notification'>
                        <span className='notification'>
                        <div className='sidebar-item:hover'>
                            {items.data[2].icon}
                            {items.data[2].title}
                        </div>
                        </span><br></br>
                    </Link>
                    <Link style= { {textDecoration: 'none', color:'black'}} to='/results'>
                        <span className='results'>
                        <div className='sidebar-item:hover'>
                            {items.data[3].icon}
                            {items.data[3].title}
                        </div>
                        </span><br></br>
                    </Link>
                    <Link style= { {textDecoration: 'none', color:'black'}} to='/ebooks'>
                        <span className='ebooks'>
                        <div className='sidebar-item:hover'>
                            {items.data[4].icon}
                            {items.data[4].title}
                        </div>
                        </span><br></br>
                    </Link>
                    <Link style= { {textDecoration: 'none', color:'black'}} to='/timetable'>
                        <span className='timetable'>
                        <div className='sidebar-item:hover'>
                            {items.data[5].icon}
                            {items.data[5].title}
                        </div>
                        </span><br></br>
                    </Link>
                    <Link style= { {textDecoration: 'none', color:'black'}} to='/feestatus'>
                        <span className='feestatus'>
                        <div className='sidebar-item:hover'>
                            {items.data[6].icon}
                            {items.data[6].title}
                        </div>
                        </span><br></br>
                    </Link>
                    <Link style= { {textDecoration: 'none', color:'black'}} to='/feedback'>
                        <span className='feedback'>
                            {items.data[7].icon}
                            {items.data[7].title}

                        </span>
                    </Link>


                </div>

            </div>
        </div>
    )
}


