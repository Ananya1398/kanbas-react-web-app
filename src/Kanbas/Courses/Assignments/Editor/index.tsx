import React, { useEffect} from "react";
import { Link, useParams, useNavigate  } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, setAssignment, updateAssignment } from "../reducer";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import { KanbasState } from "../../../store";
import "./index.css";

function AssignmentEditor() {
  const { courseId, assignmentId } = useParams();
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const assignmentList = useSelector((state: KanbasState) =>
    state.assignmentsReducer.assignments);
 
  const assignment = useSelector((state: KanbasState) =>
    state.assignmentsReducer.assignment);
  const check_existing_assignment = assignmentList.find((assignment) => assignment._id === assignmentId)
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [points, setPoints] = useState("");
  // const [due, setDue] = useState("");
  // const [from, setFrom] = useState("");
  // const [untill, setUntill] = useState("");

  useEffect(() => {
    if(check_existing_assignment  !== undefined) {
        dispatch(setAssignment(check_existing_assignment ))
    }
    else {
        dispatch(setAssignment([]))
    }
  },[])
  const handleSave = () => {
    if(check_existing_assignment  !== undefined) {
      dispatch(updateAssignment(assignment ))
  }
  else {
    dispatch(
      addAssignment({
        ...assignment,
        course: courseId,
        _id: assignmentId
      })
    )
  };
    //window.location.href = `/Kanbas/Courses/${courseId}/Assignments`;
    navigate(`/Kanbas/Courses/${courseId}/Assignments`)
  };

  return (
    <div>
      <div>
        <button type="button" className="btn btn-light float-end">
          <FaEllipsisV />
        </button>
        <button
          type="button"
          className="btn btn-transparent text-success float-end"
        >
          <FaCheckCircle />Published
        </button>
      </div>

      <h3 className="decor">Assignment Name</h3>
      <input
        value={assignment?.title}
        onChange={(e) => dispatch(setAssignment({ ...assignment, title: e.target.value }))}
        className="form-control mb-2"
      />

      <textarea
        value={assignment?.description}
        onChange={(e) => dispatch(setAssignment({ ...assignment, description: e.target.value }))}
        className="form-control mb-2"
      />

      <div className="container">
        <div className="row">
          <div className="col-md-3 align">
            <label>Points </label>
          </div>
          <div className="col-md-9">
            <input value={assignment?.points}
            onChange={(e) => dispatch(setAssignment({ ...assignment, points: e.target.value }))}
              type="text"
              className="form-control"
              id="text-fields-last-name"
             
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-3 align">
            <label>Assignment Group </label>
          </div>
          <div className="col-md-9">
            <select id="select-one-genre" className="form-control">
              <option value="COMEDY">Yes</option>
              <option value="DRAMA">No</option>
              <option selected value="SCIFI">
                Assignments
              </option>
            </select>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-3 align">
            <label>Display Grade As</label>
          </div>
          <div className="col-md-9">
            <select id="select-one-genre" className="form-control">
              <option value="COMEDY">Yes</option>
              <option value="DRAMA">No</option>
              <option selected value="SCIFI">
                Percentage
              </option>
            </select>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-3 align">
            <input
              type="checkbox"
              value="DRAMA"
              name="check-genre"
              id="chkbox-drama"
            />
          </div>
          <div className="col-md-9 black">
            <label>
              Do not count this assignment towards the final grade
            </label>{" "}
            <br />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-3 align">
            <label>Assign</label> <br />
          </div>
          <div className="col-md-9">
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                  <b>Assign to </b>
                  <select id="select-one-genre" className="form-control">
                    <option value="COMEDY">Yes</option>
                    <option value="DRAMA">No</option>
                    <option selected value="SCIFI">
                      Everyone
                    </option>
                  </select>
                  <p>
                    Due
                    <br />
                    <input 
                    value={assignment?.due}
                    onChange={(e) => dispatch(setAssignment({ ...assignment, due: e.target.value }))}
                      type="date"
                      id="text-fields-dob"
                      className="form-control"
                    />
                    <br />
                  </p>

                  <div className="row">
                    <div className="col-md-6">
                      <label>Available From</label>
                    </div>
                    <div className="col-md-6">Untill</div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <input
                      value={assignment?.from}
                      onChange={(e) => dispatch(setAssignment({ ...assignment, from: e.target.value }))}
                        type="date"
                        id="text-fields-dob"
                   
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                      value={assignment?.untill}
                      onChange={(e) => dispatch(setAssignment({ ...assignment, untill: e.target.value }))}
                        type="date"
                        id="text-fields-dob"
                   
                        className="form-control"
                      />
                    </div>
                  </div>
                  <br />
                  <button
                    type="button"
                    value="cancel"
                    className="btn btn-secondary w-100"
                  >
                    +Add
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
<br></br>
   <div style={{ display: 'flex', marginBottom: '20px' }} className="float-end">
      <button onClick={handleSave} className="btn btn-success ms-2 float-end">
        Save
      </button>
      <Link
        to={`/Kanbas/Courses/${courseId}/Assignments`}
        className="btn btn-danger float-end"
      >
        Cancel
      </Link>
      <br></br>
      </div>
    </div>
   
  );
}

export default AssignmentEditor;
