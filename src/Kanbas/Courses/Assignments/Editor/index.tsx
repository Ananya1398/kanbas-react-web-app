import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import "./index.css";
import { FaCheckCircle } from "react-icons/fa";
import { FaEllipsisV } from "react-icons/fa";
function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = assignments.find(
    (assignment) => assignment._id === assignmentId);
  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
          <div >
          <button type="button" className="btn btn-light float-end"> <FaEllipsisV/></button>
            <button type="button" className="btn btn-transparent text-success float-end">
                <FaCheckCircle/>Published
              </button>
         
              </div>



      <h3 className="decor">Assignment Name</h3>
      <input value={assignment?.title}
             className="form-control mb-2" />
      <button onClick={handleSave} className="btn btn-success ms-2 float-end">
        Save
      </button>
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-danger float-end">
        Cancel
      </Link>
    </div>
    
  );
}
export default AssignmentEditor;