import React, {Component} from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import img from "./header/header2.jpg";
import Typography from "@mui/material/Typography";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import './header/header.css'
import {Link} from "react-router-dom";




export default function PostCard(props) {
    

  return( <Grid item sm={12} md={6} padding={5}>
    <Card >
        <CardActionArea component={Link} to={`/posts/${props.id}`}>
            {props.image && 
            <CardMedia
                component="img"
                height="140"
                image= {props.image}
                alt="green iguana"
            /> }
            <CardContent>
                <Grid container>
                    <Grid item xs={12}><Typography gutterBottom variant="h5" component="div">
                    {props.title.charAt(0).toUpperCase() + props.title.slice(1)}
                    </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography gutterBottom variant="subtitle1" component="div">
                        Author : {props.username}
                        </Typography>
                    </Grid>
                </Grid>
                <Typography variant="body2" color="text.secondary">
                 {props.desc}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
</Grid>);
}
