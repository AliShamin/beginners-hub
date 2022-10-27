import React from "react";
import { useParams } from "react-router-dom"

function Blog(){
    let { id } = useParams(); 

    return (
    <>
    Heres my Blog page with id {id}
    </>
);
}

export default Blog;