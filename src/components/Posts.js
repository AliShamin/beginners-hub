import React from "react";
import postDetails from "../assets/PostDetails.json";
import { Link } from 'react-router-dom';
import "../core/styles/Post.css";
function Posts() {
    let posts = [];
    postDetails.map(e => {
        posts.push(Post(e))
    })
    return (
        <>
            <div className="post-container-wrapper">
                {posts}
            </div>
        </>)
}

function Post(postDetail) {
    let path = `/blog/${postDetail.postId}`;
    return (
        <>
            <></>
            <Link to={path} style={{textDecoration: 'none'}} >
                <div className="post-container">
                    <div className="post-container-box">
                        <div className="post-container-box-header">
                            <h2>{postDetail.title}</h2>
                        </div>
                        <div className="post-container-box-footer">
                            <div className="d-flex flex-column"><span>Author :</span>&nbsp;<h4>{postDetail.author}</h4></div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default Posts;