import React, { useEffect } from "react";
import { useParams } from "react-router-dom"
import { CourseDetail } from "../components/CourseDetail";
import { Footer } from "../components/Footer";

export default function Course() {
    let { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <CourseDetail id={id} />
            <Footer />
        </>
    );
}

