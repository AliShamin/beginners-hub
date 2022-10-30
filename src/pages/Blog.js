import React from "react";
import { BlogPost } from "../components/BlogPost.js"
import { Footer } from "../components/Footer";
import "../core/styles/Blogs.css";

export default function Blog() {
  return (<>
    <div className="blog-post-container min-h-75">
      <BlogPost />
    </div>
    <Footer />
  </>
  )
}

