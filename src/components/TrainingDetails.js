import React from "react";
import { useLocation } from "react-router-dom"
import trainingDetails from "../assets/TrainingDetails.json";

export const TrainingDetails = () => {
    const { state } = useLocation();
    const { courseIndex, subCoursesIndex } = state;
    return (<>
        <div className="offering-description-box">
            <h2>{trainingDetails[courseIndex].subCourses[subCoursesIndex].offerTitle}</h2>
            <p>{trainingDetails[courseIndex].subCourses[subCoursesIndex].offerDescription}</p>
        </div>
    </>);
}

