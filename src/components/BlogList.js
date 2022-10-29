import React from "react";
import blogDetails from "../assets/BlogDetails.json";
import {BlogCardItem} from "./BlogCardItem";

export const BlogList = () => {
    let blogs = [];
    blogDetails.map(e => {
        blogs.push(<BlogCardItem blogDetail={e}/>)
    })
    return (
        <>
            <div className="blog-container-wrapper">
                {blogs}
            </div>
        </>)
}


