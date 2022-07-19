import courseDetails from "../../assets/CourseDetails.json";

export function getCourseList() {
    return courseDetails.map((e) => (
        {
            'courseId': `Course ${e.courseId}`,
            'courseTitle': e.courseTitle,
            'courseRoute': `/course/${e.courseId}`,
        }))
}

