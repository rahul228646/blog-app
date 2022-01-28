import React, {Component} from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import PostCard from '../Components/PostCard'
import TopicHeader from "../Components/header/TopicHeader";
class BlogTopic extends Component {
    render() {
        return (
            <div>
                <TopicHeader/>
                <Container>
                    <Grid container sx={{padding:"0 8% 0 8%"}}>
                        <Grid item xs={12}><Typography variant='h4' paddingTop={5} paddingLeft={5}> Related Posts</Typography></Grid>
                        <PostCard/>
                        <PostCard/>
                        <PostCard/>
                        <PostCard/>
                    </Grid>
                </Container>
            </div>
        );
    }
}

export default BlogTopic;