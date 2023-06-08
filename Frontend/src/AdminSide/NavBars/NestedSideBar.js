import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddSubjects from '@mui/icons-material/AddToPhotos';
import Divider from '@mui/material/Divider';
// import './Navbar.css'
import {Link} from 'react-router-dom'
import FeedbackIcon from '@mui/icons-material/Feedback';



export default function NestedSideBar() {


  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };


  


  return (

    <div >



    <List
    //   sx={{ width: "250px", height:"100vh",bgcolor: '#E0E0E0'}}
    //   component="nav"
    //   aria-labelledby="nested-list-subheader"
    style={{float:"left",background:"#E0E0E0",height:"100vh"}}
     
    >
         
              
      

        <ListItemButton onClick={handleClick}>
                         <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Student" />
                        
                        {
                        open ? <ExpandLess /> : <ExpandMore />
                        }

        </ListItemButton>
                
        <Collapse in={open} timeout="auto" unmountOnExit>


                    <List  disablePadding >

                    <Link   to='/admin/displayStudents'  style={{textDecoration:"none"}} >
                            <span className="displayStudentRecords">
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemIcon>
                                            <SlideshowIcon />
                                        </ListItemIcon>
                                    <ListItemText primary="Display Students" />
                            </ListItemButton>
                            </span>        
                    </Link>

                   



                  


                    {/* onClick={alert('clicked')} */}

                    <Link   to='/admin/addStudentRecords'  style={{textDecoration:"none"}} >
                            <span className="addStudentRecords">
                                    <ListItemButton sx={{ pl: 4 }} >
                                        <ListItemIcon>
                                            <AddBoxIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Add Students" />
                                    </ListItemButton>
                            </span>        
                    </Link>


                    <Link   to='/admin/deleteStudent'  style={{textDecoration:"none"}}  >
                            <span className="deleteStudentRecords">
                                <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemIcon>
                                            <DeleteIcon />
                                        </ListItemIcon>
                                    <ListItemText primary="Delete Students" />
                                </ListItemButton>
                            </span>        
                    </Link>

                    <Link   to='/admin/updateStudent'  style={{textDecoration:"none"}} >
                            <span className="updateStudentRecords">
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemIcon>
                                            <UpdateIcon />
                                        </ListItemIcon>
                                     <ListItemText primary="Update Students" />
                            </ListItemButton>
                            </span>        
                    </Link>
                    

                   
                        
                    <Link   to='/admin/addSubjects'  style={{textDecoration:"none"}} >
                     <span className="addstudentsubjects">
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <AddSubjects />
                                </ListItemIcon>
                                <ListItemText primary="Add Subjects " />
                            </ListItemButton>
                            </span>        
                    </Link>
                    
                    

         </List>


        </Collapse>

        <Divider/>

        

        <ListItemButton onClick={handleClick}>
                         <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Teacher" />
                        
                        {
                        open ? <ExpandLess /> : <ExpandMore />
                        }

        </ListItemButton>

        <Divider/>
                
        <Collapse in={open} timeout="auto" unmountOnExit>


                    <List component="div" disablePadding>


                    <Link   to='/admin/displayTeachers'  style={{textDecoration:"none"}} >
                            <span className="displayTeacherRecords">
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemIcon>
                                            <SlideshowIcon />
                                        </ListItemIcon>
                                    <ListItemText primary="Display Teacher" />
                            </ListItemButton>
                            </span>        
                    </Link>



                    {/* onClick={alert('clicked')} */}


                    
                    <Link   to='/admin/addTeacherRecords'  style={{textDecoration:"none"}} >
                            <span className="addTeacherRecords">
                                    <ListItemButton sx={{ pl: 4 }} >
                                        <ListItemIcon>
                                            <AddBoxIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Add Teacher" />
                                    </ListItemButton>
                            </span>        
                    </Link>

                   

                    <Link   to='/admin/deleteTeacher'  style={{textDecoration:"none"}} >
                            <span className="deleteTeacherRecords">
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemIcon>
                                                <DeleteIcon />
                                            </ListItemIcon>
                                        <ListItemText primary="Delete Teacher" />
                                </ListItemButton>
                                    
                            </span>        
                    </Link>
                   

                    <Link   to='/admin/updateTeacher'  style={{textDecoration:"none"}} >
                            <span className="updateTeacherRecords">
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemIcon>
                                            <UpdateIcon />
                                        </ListItemIcon>
                                     <ListItemText primary="Update Teachers" />
                            </ListItemButton>
                            </span>        
                    </Link>

                    

                    
                    

                    </List>


        </Collapse>







    </List>





    </div> 

  );
}
