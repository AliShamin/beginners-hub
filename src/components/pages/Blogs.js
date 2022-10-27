import React from "react";
import BlogSearchBar from "../BlogSearchBar";
import Posts from "../Posts";
import "../../core/styles/Blogs.css";
function Blogs() {
    return (
        <>
            <div className="blog-search-container">
                <BlogSearchBar />
            </div>
            <div>
                <Posts/>
            </div>
        </>
    );
}

export default Blogs;
