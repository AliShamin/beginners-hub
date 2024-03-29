import React from "react";
import "../core/styles/BlogSearchBar.css";

export const BlogSearchBar = () => {
    return (
        <>
            <div className="container">
                <input className="blog-search-inp" placeholder="Search for Recent Blogs" />
                <button className="blog-search-btn"><i class="fa fa-search" aria-hidden="true"></i></button>
            </div>
        </>
    );
}

