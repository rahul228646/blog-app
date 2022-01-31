import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "./singlepost.css"
import axios from "axios";



export default function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [desc, setDesc] = useState("");
    useEffect(()=>{
        const getPost = async()=>{
            const res = await axios.get("/posts/" + path);
            console.log(res.data);
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
            setAuthor(res.data.username);
        };
        getPost();
    },[path]); 
    return (
        <div className="Post">
            <div className="PostTitle">
                {title}
            </div>
            <div className="PostInfo">
                <Typography>Author : {author}</Typography>
                <Typography>Topic : science</Typography>
            </div>
            {post.photo && <img
                    src={post.photo}
                    className="PostImage"
                    alt=""
                />
            }
                

            <div className="PostContent">
                {desc}
            </div>
        </div>
    );
}

