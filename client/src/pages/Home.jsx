import React, {Component, useEffect, useState} from 'react';
import Header from '../Components/header/Header'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import PostCard from '../Components/PostCard'
import axios from "axios"
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export default function Home() {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
        const res = await axios.get("/posts");
        console.log(res.data);
        setPosts(res.data);
        };
        fetchPosts();
    }, []);
  return (
  <div>
  <Header/>
                <Container>
                <Grid container sx={{padding:"0 8% 0 8%"}}>
                    <Grid item xs={12}><Typography variant='h4' paddingTop={5} paddingLeft={5}> All Posts</Typography></Grid>
                    {posts.map((p)=>(
                        
                            <PostCard id ={p._id} username={p.username} title={p.title} image={p.image} desc={p.desc}/>
                       
                    ))}
                   
                </Grid>
                </Container>
  </div>);
}
