import React from "react";
import courseDetails from "../assets/CourseDetails.json";
import "./CourseDetail.css";

function CourseDetail(props) {
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
                                        src={courseDetails[props.id].course_img_src}
                                    />
                                </figure>
                                <div className='cards__item__info'>
                                    <h5 className='cards__item__text'>{courseDetails[props.id].courseTitle}</h5>
                                </div>
                            </div>
                        </li>
                    </div>
                    <div className="course-description">
                        <p>{courseDetails[props.id].courseTitle}</p>
                        <div className="course-description-box">
                            <p>{courseDetails[props.id].courseDescription}</p>
                            <aside>
                                <ul>
                                    {courseDetails[props.id].courseOutlines.map((i) => <li key={i}>{i}</li>)}
                                </ul>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CourseDetail;