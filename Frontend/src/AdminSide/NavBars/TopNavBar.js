import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Navigate, useNavigate } from 'react-router-dom';

window.h = React.createElement;



// import '../../App.css'

function TopNavBar() {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem("data");
    navigate('/')
    // window.location.reload()
  }

  const AdminDashboard = () => {
    navigate('./admin')
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>


          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome Admin
          </Typography>
          {/* rgb(69, 69, 145) */}

          <Button variant="contained" className='logout' style={{ background: "red" }} onClick={() => logout()}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
    
  )
}
export default TopNavBar