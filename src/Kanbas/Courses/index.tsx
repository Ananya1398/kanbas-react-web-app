import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import "./index.css";
import Modules from "./Modules";
import Home from "./Home";
import { useState, useEffect } from "react";
import axios from "axios";

function Courses() {
  const { courseId } = useParams();
  const API_BASE = process.env.REACT_APP_API_BASE;
  const COURSES_API = `${API_BASE}/api/courses`;

  const [course, setCourse] = useState<any>({ _id: "" });
  const findCourseById = async (courseId?: string) => {
    const response = await axios.get(
      `${COURSES_API}/${courseId}`
    );
    setCourse(response.data);
  };

  return (
    <div>
       <ol className="breadcrumb custom-breadcrumb">
      <li className="breadcrumb-item"><HiMiniBars3 /> &nbsp;&nbsp;{course?.name} </li>
        <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<li className="breadcrumb-item active" aria-current="page">Home</li>} />
            <Route path="Modules" element={<li className="breadcrumb-item active" aria-current="page">Modules</li>} />
            <Route path="Piazza" element={<li className="breadcrumb-item active" aria-current="page">Piazza</li>} />
            <Route path="Assignments" element={<li className="breadcrumb-item active" aria-current="page">Assignments</li>} />
            <Route path="Zoom Meetings" element={<li className="breadcrumb-item active" aria-current="page">Zoom Meetings</li>} />
            <Route path="Assignments/A101" element={<li className="breadcrumb-item active" aria-current="page">Web Development Assignment</li>} />
            <Route path="Assignments/A102" element={<li className="breadcrumb-item active" aria-current="page">Database Management Analysis</li>} />
            <Route path="Assignments/A103" element={<li className="breadcrumb-item active" aria-current="page">Application Deployment Project</li>} />
            <Route path="Assignments/A201" element={<li className="breadcrumb-item active" aria-current="page">User Interface Design Quiz</li>} />
            <Route path="Assignments/A202" element={<li className="breadcrumb-item active" aria-current="page">Responsive Web Design Analysis</li>} />
            <Route path="Assignments/A203" element={<li className="breadcrumb-item active" aria-current="page">CSS Framework Project</li>} />
            <Route path="Assignments/A301" element={<li className="breadcrumb-item active" aria-current="page">Machine Learning Assignmen</li>} />
            <Route path="Assignments/A302" element={<li className="breadcrumb-item active" aria-current="page">Natural Language Processing Analysi</li>} />
            <Route path="Assignments/A303" element={<li className="breadcrumb-item active" aria-current="page">Neural Network Design Project</li>} />
            <Route path="Assignments/A401" element={<li className="breadcrumb-item active" aria-current="page">Data Analysis Task</li>} />
            <Route path="Assignments/A402" element={<li className="breadcrumb-item active" aria-current="page">Data Visualization Project</li>} />
            <Route path="Assignments/A403" element={<li className="breadcrumb-item active" aria-current="page">Machine Learning Model Development</li>} />
            <Route path="Assignments/A501" element={<li className="breadcrumb-item active" aria-current="page">Cloud Infrastructure Design Task</li>} />
            <Route path="Assignments/A502" element={<li className="breadcrumb-item active" aria-current="page">Cloud Security Analysis</li>} />
            <Route path="Assignments/A503" element={<li className="breadcrumb-item active" aria-current="page">Cloud Deployment Project</li>} />
            <Route path="Assignments/A601" element={<li className="breadcrumb-item active" aria-current="page">Cyber Threat Analysis</li>} />
            <Route path="Assignments/A602" element={<li className="breadcrumb-item active" aria-current="page">Network Security Assessment</li>} />
            <Route path="Assignments/A603" element={<li className="breadcrumb-item active" aria-current="page">Incident Response Plan</li>} />
            <Route path="Assignments/A701" element={<li className="breadcrumb-item active" aria-current="page">Model Training Task</li>} />
            <Route path="Assignments/A702" element={<li className="breadcrumb-item active" aria-current="page">Model Evaluation Project</li>} />
            <Route path="Assignments/A703" element={<li className="breadcrumb-item active" aria-current="page">Model Deployment Assignment</li>} />
            <Route path="Assignments/A801" element={<li className="breadcrumb-item active" aria-current="page">Continuous Integration Task</li>} />
            <Route path="Assignments/A802" element={<li className="breadcrumb-item active" aria-current="page">Continuous Deployment Project</li>} />
            <Route path="Assignments/A803" element={<li className="breadcrumb-item active" aria-current="page">Infrastructure as Code Assignment</li>} />
            <Route path="Grades" element={<li className="breadcrumb-item active" aria-current="page">Grades</li>} />
            <Route path="Quizzes" element={<li className="breadcrumb-item active" aria-current="page">Quizzes</li>} />
            <Route path="People" element={<li className="breadcrumb-item active" aria-current="page">People</li>} />
            <Route path="Panopto Video" element={<li className="breadcrumb-item active" aria-current="page">People</li>} />
            <Route path="Discussions" element={<li className="breadcrumb-item active" aria-current="page">Panopto Video</li>} />
            <Route path="Announcements" element={<li className="breadcrumb-item active" aria-current="page">Announcements</li>} />
            <Route path="Pages" element={<li className="breadcrumb-item active" aria-current="page">Pages</li>} />
            <Route path="Files" element={<li className="breadcrumb-item active" aria-current="page">Files</li>} />
            <Route path="Rubrics" element={<li className="breadcrumb-item active" aria-current="page">Rubrics</li>} />
            <Route path="Outcomes" element={<li className="breadcrumb-item active" aria-current="page">Outcomes</li>} />
            <Route path="Collaboration" element={<li className="breadcrumb-item active" aria-current="page">Collaboration</li>} />
            <Route path="Syllabus" element={<li className="breadcrumb-item active" aria-current="page">Syllabus</li>} />
            <Route path="Settings" element={<li className="breadcrumb-item active" aria-current="page">Settings</li>} />
          </Routes>
      </ol>
      <hr className="hrclass"/>
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{ left: "320px", top: "100px", color:"red"}} >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Zoom Meetings" element={<h1>Zoom Meetings</h1>} />
            <Route path="Assignments/:assignmentId"  element={<AssignmentEditor/>}/>
            <Route path="Grades" element={<Grades />} />
            <Route path="Quizzes" element={<h1>Quizzes</h1>} />
            <Route path="People" element={<h1>People</h1>} />
            <Route path="Panopto Video" element={<h1>Panopto Video</h1>} />
            <Route path="Discussions" element={<h1>Discussions</h1>} />
            <Route path="Announcements" element={<h1>Announcements</h1>} />
            <Route path="Pages" element={<h1>Pages</h1>} />
            <Route path="Files" element={<h1>Files</h1>} />
            <Route path="Rubrics" element={<h1>Rubrics</h1>} />
            <Route path="Outcomes" element={<h1>Outcomes</h1>} />
            <Route path="Collaboration" element={<h1>Collaboration</h1>} />
            <Route path="Syllabus" element={<h1>Syllabus</h1>} />
            <Route path="Settings" element={<h1>Settings</h1>} />
          </Routes>
        </div>
      </div>

    </div>
  )
}
export default Courses;