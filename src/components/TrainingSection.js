import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import trainingDetails from "../assets/TrainingDetails.json";
import "../core/styles/TrainingOffering.css";

function TrainingSection() {
    const navigate = useNavigate();
    const [unhidedCourse, setUnhidedCourse] = useState({});
    const [showNav, setShowNav] = useState(true);
    let routeTo = (pathName, courseIndex, subCoursesIndex) => {
        navigate(pathName, { state: { courseIndex, subCoursesIndex } })
    }
    let unhideSubCourse = (i) => {
        if (unhidedCourse[i] != null && unhidedCourse[i] == true) {
            unhidedCourse[i] = false;
        } else {
            unhidedCourse[i] = true;
        }
        setUnhidedCourse({ ...unhidedCourse });
    }

    let hideNavBar = () => {
        setShowNav(false);
    }

    let unHideNavBar = () => {
        setShowNav(true);
    }

    return (
        <>
            <section className="training-offerings-container">
                <div>
                    <section className="training-offerings-nav-container">
                        <div className="training-nav-hide-button">
                            {showNav && <i className="fa fa-solid fa-angle-left" onClick={hideNavBar}></i>}
                            {!showNav && <i className="fa fa-solid fa-angle-right" onClick={unHideNavBar}></i>}
                        </div>
                        {showNav && <div className="training-offerings-nav-box">
                            {trainingDetails.map((u, i) => (
                                <>
                                    <div onClick={() => { unhideSubCourse(i) }}>
                                        {!unhidedCourse[i] && <i class="fa fa-solid fa-angle-right"></i>}
                                        {unhidedCourse[i] && <i class="fa fa-solid fa-angle-down"></i>}
                                        {u.title}
                                    </div>
                                    {u.subCourses.map((v, j) =>
                                        <>{unhidedCourse[i] &&
                                            <div className="d-flex flex-row">
                                                <i className={v.offeringIcon}></i>
                                                <div className="training-session-topics" onClick={() => { routeTo("/training/" + v.offerTitle, i, j) }}>
                                                    {v.offerTitle}
                                                </div>
                                            </div>
                                        }
                                        </>
                                    )}
                                </>
                            ))}
                        </div>}

                    </section>
                    <section className="training-offering-content-container">
                        <Outlet />
                        <div className="offering-description-box">
                            <h2>Training Offerings</h2>
                            <p>The training sessions has been designed considering the beginners friendly approach to understand the computer systems.</p>
                            <img src={"/images/img-10.jpg"} />
                            <p>It includes the different modules starting from the fundamentals to the application development.</p>
                        </div>
                    </section>
                </div>
            </section>
        </>
    );
}

export default TrainingSection;