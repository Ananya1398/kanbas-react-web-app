import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle, FaPencilAlt} from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "./index.css";
function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <>
     <div className ="row d-flex" style= {{flexGrow: '1'}}>
                <div className="col-md-6">
                <div className="input-group">
                        <input id="text-fields-students" placeholder="Search for Assignment" className="form-control"/>
                    </div>
                  
                </div>
                <div className="col-md-6" > 
                <select id="select-one-genre" className="custom-select float-end form-control">
                    <option value="COMEDY">Yes</option>
                    <option value="DRAMA">No</option>
                    <option selected value="SCIFI">Edit Assignment Dates</option>
                  </select>
                  <button type="button" className="btn btn-danger float-end">+ Assignment</button>&nbsp;&nbsp;&nbsp;&nbsp;
                  <button type="button" className="btn btn-light float-end">+ Group</button>&nbsp;&nbsp;&nbsp;&nbsp;
                  
                  
                </div>
              </div>
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
            <span className = "custom-badge">40% of Total</span>&nbsp;
           
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item  ">
                <FaEllipsisV className="me-2" />
                <BsPencilSquare className="me-2 green"/>
                <Link className="addition"
                   to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
              </li>))}
          </ul>
        </li>
      </ul>
    </>
);}
export default Assignments;