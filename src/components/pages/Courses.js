import React,{useEffect} from "react";
import courseDetails from "../../assets/CourseDetails.json";
import CardItem from "../CardItem";
import "../../core/styles/Courses.css";
import Footer from "../Footer";


function Courses() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    
    const getCards = () => {
        let cardItems = [];
        courseDetails.forEach(element => {
            cardItems.push(<CardItem
                src={element.course_img_src}
                text={element.courseTitle}
                label={element.level}
                path={element.path}
                courseId={element.courseId}
            />)
        });
        return cardItems;
    }

    return (
        <>
        <div className="courses-container">
            <section className="course-container-box">
            {getCards()}
            </section>
        </div>
        <Footer/>
        </>)
}


export default Courses;