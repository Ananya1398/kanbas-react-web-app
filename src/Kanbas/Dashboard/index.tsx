import React, { useState } from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";
import * as db from "../Database";
function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void; })
   {
    return (
    <div className="p-4">
      <h1>Dashboard</h1>              <hr />
      <h5>Course</h5>
      <input value={course.name} className="form-control" 
      onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <input value={course.number} className="form-control" 
             onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
      <input value={course.startDate} className="form-control" type="date" 
      onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
      <input value={course.endDate} className="form-control" type="date" 
        onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
        <br></br>
      <button style={{ padding: '3px 7px', borderRadius: '5px' }} className="btn btn-success" onClick={addNewCourse} >
        Add
      </button> &nbsp;
      <button style={{ padding: '3px 7px', borderRadius: '5px' }} className="btn btn-primary" onClick={updateCourse} >
        Update
      </button>
      <br></br>
      <h2 style={{ marginTop: '15px' }}>Published Courses (8)</h2>
      <div className="row" style={{ marginTop: '-20px' }}>
        <div className="row row-cols-1 row-cols-md-5 g-4" style={{ marginTop: '-10px' }}>
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img src={`/images/${course.image}`} className="card-img-top"
                     style={{ height: 150 }}/>
                <div className="card-body">
                
                    <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    {course.name} 
                    <br></br>
                    <br></br>
                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                    Go </Link>  &nbsp;
                    <button className="btn btn-success" onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}>
              Edit
            </button> &nbsp;

                    <button className="btn btn-danger" onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}>
                      Delete
              </button>
              </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;