import React, {useState}  from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle, FaPencilAlt} from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../store";
import "./index.css";
import {Modal} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import {

  deleteAssignment,

} from "./reducer";
function Assignments() {
  const dispatch = useDispatch();
  
  const { courseId } = useParams();
  // const assignmentList = assignments.filter(
  //   (assignment) => assignment.course === courseId);
   
    const assignmentList = useSelector((state: KanbasState) =>
    state.assignmentsReducer.assignments.filter(
         (assignment) => assignment.course === courseId));
    const new_assignment_id='A10'+(assignmentList.length+1)
 
  const assignment = useSelector((state: KanbasState) =>
    state.assignmentsReducer.assignment);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [assignmentToDelete, setAssignmentToDelete] = useState("");
   
    const handleDelete = (assignmentId:string) => {
     setAssignmentToDelete(assignmentId);
     setShowConfirmation(true);
   };
   const handleConfirmDelete = () => {
     dispatch(deleteAssignment(assignmentToDelete));
     setShowConfirmation(false);
   };
   const handleCloseConfirmation = () => {
     setShowConfirmation(false);
   };
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
                  <div>
  <Link
    to={`/Kanbas/Courses/${courseId}/Assignments/${new_assignment_id}`}
    className="btn btn-danger float-end"
  >
    + Assignment
  </Link>&nbsp;&nbsp;&nbsp;&nbsp;
  <Link
    to={`/Kanbas/Courses/${courseId}/Groups/new`}
    className="btn btn-light float-end"
  >
    + Group
  </Link>&nbsp;&nbsp;&nbsp;&nbsp;
</div>

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
                <Modal show={showConfirmation} onHide={handleCloseConfirmation}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this assignment?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseConfirmation}>No</Button>
          <Button variant="danger" onClick={handleConfirmDelete}>Yes</Button>
        </Modal.Footer>
      </Modal>
      <Button style={{ padding: '3px 7px', borderRadius: '5px' }} variant="danger" onClick={() => handleDelete(assignment._id)}>Delete</Button>&nbsp;<FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
              </li>))}
          </ul>
        </li>
      </ul>
    </>
);}
export default Assignments;