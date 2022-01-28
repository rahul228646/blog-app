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

class PostCard extends Component {
    render() {
        return (
                    <Grid item sm={12} md={6} padding={5}>
                        <Card >
                            <CardActionArea component={Link} to="/singlepost">
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image='https://miro.medium.com/max/1400/1*Zxu0yIEh2R0kYqDAznv9SQ.jpeg'
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Grid container>
                                        <Grid item xs={12}><Typography gutterBottom variant="h5" component="div">
                                            Interesting Title
                                        </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography gutterBottom variant="subtitle1" component="div">
                                                author
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
        );
    }
}

export default PostCard;