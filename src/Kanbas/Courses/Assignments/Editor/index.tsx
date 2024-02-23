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

<div className="container">
                <div className="row">
                  <div className="col-md-3 align">
                    <label>Points </label>
                  </div>
                  <div className="col-md-9"> 
                    <input type="text"  className="form-control" id="text-fields-last-name" value="100"/>
        
                  </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-3 align" > 
                      <label >Assignment Group </label>
                    </div>
                    <div className="col-md-9"> 
                        <select id="select-one-genre" className="form-control" >
                            <option value="COMEDY">Yes</option>
                            <option value="DRAMA">No</option>
                            <option selected value="SCIFI">Assignments</option>
                          </select>
                    </div>
                  </div>
                  <br/>
                  <div className="row">
                    <div className="col-md-3 align"> 
                      <label>Display Grade As</label>
                    </div>
                    <div className="col-md-9">
                        <select id="select-one-genre" className="form-control">
                            <option value="COMEDY">Yes</option>
                            <option value="DRAMA">No</option>
                            <option selected value="SCIFI">Percentage</option>
                          </select>
                    </div>
                  </div>
                  <br/>
                  <div className="row">
                    <div className="col-md-3 align"> 
                        <input type="checkbox" value="DRAMA"
                        name="check-genre" id="chkbox-drama"/>
                        
                    </div>
                    <div className="col-md-9 black">
                        <label>Do not count this assignment towards the final grade</label>    <br/>
                    </div>
                  </div>
                  <br/>
                  <div className="row">
                    <div className="col-md-3 align"> 
                        <label>Assign</label>    <br/>
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
                                                    Everyone</option>
                                             </select>
                                             <p>Due<br/>
                                                <input type="date"
                                                id="text-fields-dob"
                                                value="2021-01-01" className="form-control"/><br/>
                                                
                                            </p>
                                        
                                            <p>Available From<br/>
                                                <input type="date"
                                                id="text-fields-dob"
                                                value="2021-01-01" className="form-control"/><br/>
                                               
                                            
                                        
                                            Until<br/>
                                                <input type="date"
                                                id="text-fields-dob"
                                                value="2021-01-01" className="form-control"/><br/>
                                               
                                            </p>
                                            <div className="row">
                                                <div className="col-md-6">
                                                  <label>Available From</label>
                                                </div>
                                                <div className="col-md-6"> 
                                                    Untill
                                                </div>
                                              </div>
                                              
                                              <div className="row">
                                                <div className="col-md-6"> 
                                                    <input type="date"
                                                    id="text-fields-dob"
                                                    value="2021-01-01" className="form-control"/>
                                                </div>
                                                <div className="col-md-6">
                                                    <input type="date"
                                                id="text-fields-dob"
                                                value="2021-01-01" className="form-control"/>
                                                </div>
                                              </div>
                                              <br/>
                                              <button type="button" value="cancel" className="btn btn-secondary w-100">+Add</button>
                               </p>             
                         </div>
                    </div>
                  </div>
                  <div></div>
                <br/><hr className="black"/>
                  <div className ="row">
                    <div className = "col-md-6 black" >
                        <input type="checkbox" value="DRAMA"
                        name="check-genre" id="chkbox-drama"/> <label>Notify users that this content has changed</label>  
                        </div>
                    <div className = "col-md-6">
                      
                        </div>
                </div>
                <br/><hr className="black"/>
      </div>
    </div>

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