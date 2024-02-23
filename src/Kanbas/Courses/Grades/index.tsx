import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaFilter, FaDownload, FaUpload, FaCog } from "react-icons/fa";
import "./index.css";
function Grades() {
  const { courseId } = useParams();
  const as = assignments.filter((assignment) => assignment.course === courseId);
  const es = enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div>
        
                <button type="button" className="btn btn-light float-end"><FaCog/></button>
                <button type="button" className="btn btn-light float-end"><FaUpload/>&nbsp;Export</button>
                <button type="button" className="btn btn-light float-end"><FaDownload />&nbsp;Import</button>
           
                <div>
                  <br/>
                <hr className="overall"/>
                </div>
        <div className="container">
            <div className="row">
              <div className="col-md-6">
                <label className="overall"><b>Student Names</b> </label>
              </div>
              <div className="col-md-6">
                <label className="overall"><b>Assignment Names</b> </label>
              </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="input-group">
                        <span className="input-group-text">&#x1F50D;</span>
                        <input id="text-fields-students" placeholder="Search Students" className="form-control"/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="input-group">
                        <span className="input-group-text">&#x1F50D;</span> 
                        <input id="text-fields-students" placeholder="Search Assignments" className="form-control"/>
                    </div>
                </div>
            </div>
            <br/>
            <button type="button" className="btn btn-light"><FaFilter />&nbsp;ApplyFilters</button>
<br/>
            </div>
            <br/>
      <div className="table-responsive">
        <table className="table  table-bordered table-striped">
          <thead className="overall">
            <th className="overall">Student Name</th>
            {as.map((assignment) => (<th>{assignment.title}</th>))}
          </thead>
          <tbody>
            {es.map((enrollment) => {
              const user = users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                   <td className="red">{user?.firstName} {user?.lastName}</td>
                   {assignments.map((assignment) => {
                     const grade = grades.find(
                       (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                       return grade ? <td key={assignment._id} className="wd-grade-col">{grade.grade}</td> : null;
                  })}
                       
                </tr>);
            })}
          </tbody></table>
      </div></div>);
}
export default Grades;
