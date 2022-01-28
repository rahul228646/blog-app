import React, {Component} from 'react';
import Header from '../Components/header/Header'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import PostCard from '../Components/PostCard'


class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Container>
                <Grid container sx={{padding:"0 8% 0 8%"}}>
                    <Grid item xs={12}><Typography variant='h4' paddingTop={5} paddingLeft={5}> All Posts</Typography></Grid>
                    <PostCard/>
                    <PostCard/>
                </Grid>
                </Container>
            </div>
        );
    }
}

export default Home;