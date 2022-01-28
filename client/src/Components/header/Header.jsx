import React, {Component} from 'react';
import Box from '@mui/material/Box';
import img from './header2.jpg'
import './header.css'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

class Header extends Component {
    render() {
        return (

                <Grid container
                      sx={{
                          width: '100%',
                          height: '100vh',
                          backgroundColor: '#000000',
                      }}
                >
                    <Grid item md={6} sm={6} xs={12}>
                        <img
                            src={img}
                            className='headerImage'
                        />
                    </Grid>
                    <Grid item md={6} sm={6} xs={12} className='headerTitle' sx={{color:'white', display: 'flex'}}>

                            Medium is a place to write, read, and connect

                    </Grid>
                </Grid>



        );
    }
}

export default Header;