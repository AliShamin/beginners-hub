import React from "react";
import { BlogSearchBar } from "../components/BlogSearchBar";
import { PostsCard } from "../components/PostsCard";
import {Footer} from "../components/Footer";
import "../core/styles/Blogs.css";

export default function Blogs() {
    return (
        <>
            <div className="h10 d-flex-align-center">
                <BlogSearchBar />
            </div>
            <div className="d-flex-justify-center min-h-75">
                <PostsCard />
            </div>
            <Footer/>
        </>
    );
}

