import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GoogleIcon from '@mui/icons-material/Google';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import "./login.css"

const google = () => {
  window.open("http://localhost:4000/auth/google", "_self");
};

export default class Signin extends Component {
  render() {
 
    return (
    <div className='login-page'>
    <Paper elevation={0} sx={{height:"100vh" , padding : "2rem"}}>
      <div className='title'>Welcome Back</div>
      <div className='login-area'>
        <Button variant="outlined" startIcon={<GoogleIcon/>} disableRipple fullWidth  onClick={google} sx={{
          height:"3rem",
          borderRadius:"2rem"
        }}>
          Login
        </Button> 
      </div>
      <div className='register-area'>No Account?  <span className='redirect'> Sign Up</span></div>
      </Paper>
    </div>
    )
  }
}
