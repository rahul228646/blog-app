/* eslint-disable no-unreachable */
// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';



// const user = true;

// const pages = [<SignIn/>, <GetStarted/>];


// const ResponsiveAppBar = () => {
    
//     const [anchorElNav, setAnchorElNav] = React.useState(null);
//     const [anchorElUser, setAnchorElUser] = React.useState(null);

//     const handleOpenNavMenu = (event) => {
//         setAnchorElNav(event.currentTarget);
//     };
//     const handleOpenUserMenu = (event) => {
//         setAnchorElUser(event.currentTarget);
//     };

//     const handleCloseNavMenu = () => {
//         setAnchorElNav(null);
//     };

//     const handleCloseUserMenu = () => {
//         setAnchorElUser(null);
//     };

//     return (
//         <AppBar position='sticky' sx={{background:"#000000"}}>
//             <Container maxWidth="xl">
//                 <Toolbar disableGutters>
//                     <Typography
//                         variant="h6"
//                         noWrap
//                         component="div"
//                         sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
//                         fontFamily='Montserrat'
//                     >
//                         LOGO
//                     </Typography>

//                     <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }  }}>
//                         <IconButton
//                             size="large"
//                             aria-label="account of current user"
//                             aria-controls="menu-appbar"
//                             aria-haspopup="true"
//                             onClick={handleOpenNavMenu}
//                             color="inherit"
//                         >
//                             <MenuIcon />
//                         </IconButton>
//                         <Menu
//                             id="menu-appbar"
//                             anchorEl={anchorElNav}
//                             anchorOrigin={{
//                                 vertical: 'bottom',
//                                 horizontal: 'left',
//                             }}
//                             keepMounted
//                             transformOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'left',
//                             }}
//                             open={Boolean(anchorElNav)}
//                             onClose={handleCloseNavMenu}
//                             sx={{
//                                 display: { xs: 'block', md: 'none' },
//                             }}
//                         >
//                             {pages.map((page) => (
//                                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                                     {page}
//                                 </MenuItem>
//                             ))}
//                         </Menu>
//                     </Box>
//                     <Typography
//                         variant="h6"
//                         noWrap
//                         component="div"
//                         sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
//                     >
//                         LOGO
//                     </Typography>
//                     <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end'}}>
//                         {pages.map((page) => (
//                             <Button
//                                 key={page}
//                                 onClick={handleCloseNavMenu}
//                                 sx={{ my: 2, color: 'white', display: 'block', fontFamily:'Roboto'}}
//                             >
//                                 {page}
//                             </Button>
//                         ))}
//                     </Box>


//                 </Toolbar>
//             </Container>
//         </AppBar>
//     );
// };
// export default ResponsiveAppBar;

import React, { Component } from 'react';
import '../Components/topbar.css'
import GetStarted from './GetStarted'
import SignIn from './SignIn'
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";

export default class Topbar extends Component {
  
  render() {
    let user = false;  

    return (
    <div className='topbar'>
        <div className='logo'>
        <Link className='link' to='./'>LOGO</Link>  
        </div>
        <div className='links'>
        <Link className='link' to='./blog'>SCIENCE</Link>   
        {!user && <GetStarted/> }
        {!user && <SignIn/>}
        {user &&  <Button variant="none" disableFocusRipple disableRipple
                    sx={{borderRadius:'20px', color:"white", padding:'inherit'}}
            >LOGOUT</Button>}
         
        </div>
    </div>
    )
  }
}
