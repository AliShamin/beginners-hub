import React from "react";
import "../core/styles/ViewCourseContent.css";
import courseDetails from "../assets/CourseDetails.json";
import { useParams } from "react-router-dom";
import Footer from "./Footer";

const bHUbSession101Url = "https://forms.gle/njuNybEJXFTNmwfe8";
function ViewCourseContent() {
    let { id } = useParams();
    let courseHash = (id % 10) - 1;

    return (<>
        <div className="course-content-wraper">
            <div className="course-container">
                <iframe src={`/coursePdfs/course101.pdf`}></iframe>
                <div className="register-course-box">
                    <div className="course-description">
                        <h2>{courseDetails[courseHash].courseTitle}</h2>
                        <div className="course-description-box">
                            <p>{courseDetails[courseHash].courseDescription}</p>
                            <aside>
                                <ul>
                                    {courseDetails[courseHash].courseOutlines.map((i) => <li key={i}>{i}</li>)}
                                </ul>
                            </aside>     
                        </div>
                        <div>
                            <a className="enroll-btn" href={bHUbSession101Url} target="/">Enroll</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>);
}

export default ViewCourseContent;