import React from "react";
import courseDetails from "../assets/CourseDetails.json";
import "../core/styles/CourseDetail.css";

const bHUbSession101Url ="https://forms.gle/njuNybEJXFTNmwfe8";

function CourseDetail(props) {
    let courseHash = (props.id % 10 ) -1;
    return (
        <>
            <section className="course-detail-container">
                <div className="course-detail-box">
                    <div className="course-logo">
                        <li className='cards__item'>
                            <div className='cards__item__link' >
                                <figure className='cards__item__pic-wrap' data-category='Level1'>
                                    <img
                                        className='cards__item__img'
                                        alt='Travel Image'
                                        src={courseDetails[courseHash].course_img_src}
                                    />
                                </figure>
                                <div className='cards__item__info'>
                                    <h5 className='cards__item__text'>{courseDetails[courseHash].courseTitle}</h5>
                                </div>
                            </div>
                        </li>
                    </div>
                    <div className="course-description">
                        <p>{courseDetails[courseHash].courseTitle}</p>
                        <div className="course-description-box">
                            <p>{courseDetails[courseHash].courseDescription}</p>
                            <aside>
                                <ul>
                                    {courseDetails[courseHash].courseOutlines.map((i) => <li key={i}>{i}</li>)}
                                </ul>
                            </aside>
                        </div>
                        <button><a href={bHUbSession101Url} target="/">Enroll</a></button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CourseDetail;