import React, {useEffect} from "react";
import { BlogPost } from "../components/BlogPost.js"
import { Footer } from "../components/Footer";
import { Comments } from "../components/Comments.js";
import { appendComments } from "../core/utils/helpers.js";
import { useParams } from "react-router-dom";
import "../core/styles/Blogs.css";

export default function Blog() {
  const {id} = useParams();
  const commentBox = React.createRef()

  useEffect(() => {
    appendComments(commentBox)
  }, [commentBox])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (<>
    <div className="blog-post-container min-h-75">
      <BlogPost />
      <section id="comments" className="segment comments">
        <h2>Comments</h2>
        <Comments commentBox={commentBox} />
      </section>
    </div>
    <Footer />
  </>
  )
}

