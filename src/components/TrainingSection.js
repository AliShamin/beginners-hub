import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import trainingDetails from "../assets/TrainingDetails.json";
import "../core/styles/TrainingOffering.css";

export const TrainingSection =()=> {
    const navigate = useNavigate();
    const [unhidedCourse, setUnhidedCourse] = useState({});
    const [showNav, setShowNav] = useState(true);
    const routeTo = (pathName, courseIndex, subCoursesIndex) => {
        navigate(pathName, { state: { courseIndex, subCoursesIndex } })
    }
    const unhideSubCourse = (i) => {
        if (unhidedCourse[i] != null && unhidedCourse[i] == true) {
            unhidedCourse[i] = false;
        } else {
            unhidedCourse[i] = true;
        }
        setUnhidedCourse({ ...unhidedCourse });
    }

    const hideNavBar = () => {
        setShowNav(false);
    }

    const unHideNavBar = () => {
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
                                        {u.title}
                                        {!unhidedCourse[i] && <i class="fa fa-solid fa-angle-down"></i>}
                                        {unhidedCourse[i] && <i class="fa fa-solid fa-angle-up"></i>}
                                    </div>
                                    {u.subCourses.map((v, j) =>
                                        <>{unhidedCourse[i] &&
                                            <div className="d-flex flex-row">
                                                <div className="training-session-topics d-flex flex-row" onClick={() => { routeTo("/training/" + v.offerTitle, i, j) }}>
                                                   <i className={v.offeringIcon}></i>
                                                    <div>{v.offerTitle}</div>
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

