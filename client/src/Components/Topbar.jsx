import React, { Component } from 'react';
import '../Components/topbar.css'
import GetStarted from './GetStarted'
import SignIn from './SignIn'
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";



export default function Topbar({user}) {
  console.log(user);
  const logout = () => {
    window.open("http://localhost:4000/auth/logout", "_self");
  }; 
  return ( <div className='topbar'>
  <div className='logo'>
  <Link className='link' to='./'>LOGO</Link>  
  </div>
  <div className='links'>
  <Link className='link' to='./blog'>SCIENCE</Link>   
  {!user && <GetStarted/> }
  {!user && <SignIn/>}
  {user &&  <Button variant="none" disableFocusRipple disableRipple
              sx={{borderRadius:'20px', color:"white", padding:'inherit'}}
              onClick={logout}
      >LOGOUT</Button>}
  {user &&  <img
              src={user.photos[0].value}
              alt=""
              className="avatar"
            />}    
   
  </div>
</div>);
}
