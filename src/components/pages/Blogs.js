import React from "react";
import BlogSearchBar from "../BlogSearchBar";
import PostsCard from "../PostsCard";
import "../../core/styles/Blogs.css";

function Blogs() {
    return (
        <>
            <div className="blog-search-container">
                <BlogSearchBar />
            </div>
            <div className="blog-items-container">
                <PostsCard/>
            </div>
        </>
    );
}

export default Blogs;
