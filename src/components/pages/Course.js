import React from "react";
import { useParams } from "react-router-dom"
import CourseDetail from "../CourseDetail";
import Footer from "../Footer";
function Course() {
    let { id } = useParams();
    return (
        <>
            <CourseDetail id={id} />
            <Footer/>
        </>
    );
}

export default Course;