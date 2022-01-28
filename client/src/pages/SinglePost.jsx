import React, {Component} from 'react';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "./singlepost.css"

class SinglePost extends Component {
    render() {
        return (
            <div className="Post">
                <div className="PostTitle">
                    Interesting Title
                </div>
                <div className="PostInfo">
                    <Typography>Author : rahul</Typography>
                    <Typography>Topic : science</Typography>
                </div>
    
                    <img
                        src="https://miro.medium.com/max/1400/1*ynfjFPAxGDDw6EQjdnBLOA.png"
                        className="PostImage"
                    />

                <div className="PostContent">
                    When replacing a multi-lined selection of text, the generated dummy text maintains the amount
                    of lines. When replacing a selection of text within a single line, the amount of words is roughly
                    being maintained. When the replaced text selection consists fully of lower-cased or capital letters or begin
                    s with a capital letter, that previous casing is maintained. Furthermore, the presence or absence of
                    a trailing punctuation mark of a replaced text selection is being maintained.
                    <br/>
                    <br/>
                    When replacing a multi-lined selection of text, the generated dummy text maintains the amount
                    of lines. When replacing a selection of text within a single line, the amount of words is roughly
                    being maintained. When the replaced text selection consists fully of lower-cased or capital letters or begin
                    s with a capital letter, that previous casing is maintained. Furthermore, the presence or absence of
                    a trailing punctuation mark of a replaced text selection is being maintained.
                </div>
            </div>
        );
    }
}

export default SinglePost;