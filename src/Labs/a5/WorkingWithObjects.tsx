import React, { useEffect, useState } from "react";
import axios from "axios";
function WorkingWithObjects() {
  const API_BASE = process.env.REACT_APP_API_BASE;
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
      });
      const ASSIGNMENT_URL = `${API_BASE}/a5/assignment`
      const fetchAssignment = async () => {
        const response = await axios.get(`${ASSIGNMENT_URL}`);
        setAssignment(response.data);
      };
      const updateTitle = async () => {
        const response = await axios
          .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
        setAssignment(response.data);
      };
      useEffect(() => {
        fetchAssignment();
      }, []);
    
      const [module, setModule] = useState({
        id: 1, title: "Sample Module",
        description: "Work with modules",
        course: "Sample course"
    });
    const MODULE_URL = `${API_BASE}/a5/module`
  return (
    <div>
      <h3>Working With Objects</h3>
      <h3>Modifying Properties</h3>
      <input onChange={(e) => setAssignment({
            ...assignment, title: e.target.value })}
        value={assignment.title} type="text" />
      <button onClick={updateTitle} >
        Update Title to: {assignment.title}
      </button>
      <button onClick={fetchAssignment} >
        Fetch Assignment
      </button>
      <h4>Retrieving Objects</h4>
      <a className="btn btn-primary" href={`${API_BASE}/a5/assignment`}>
        Get Assignment
      </a>&nbsp;
      <a className="btn btn-primary" href={`${API_BASE}/a5/module`}>
        Get Module
      </a>
      <h4>Retrieving Properties</h4>
      <a className="btn btn-primary"href={`${API_BASE}/a5/assignment/title`}>
        Get Title
      </a>&nbsp;
      <a className="btn btn-primary"href={`${API_BASE}/a5/module/title`}>
        Get Module Title
      </a>
 
      <h4>Modifying Properties</h4>
      <a className="btn btn-primary" href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
        Update Title
      </a> &nbsp;
      <input type="text" 
        onChange={(e) => setAssignment({ ...assignment,
            title: e.target.value })}
        value={assignment.title}/>
<br></br><br></br>
<a className="btn btn-primary" href={`${MODULE_URL}/title/${module.title}`}>
        Update Module Title
      </a> &nbsp;
      <input type="text" 
        onChange={(e) => setModule({ ...module,
            title: e.target.value })}
        value={module.title}/>
        <br></br><br></br>

<a className="btn btn-primary" href={`${ASSIGNMENT_URL}/score/${assignment.score}`}>
        Update Assignment Score
      </a> &nbsp;
      <input type="number" 
        onChange={(e) => setAssignment({ ...assignment,
            score: e.target.valueAsNumber })}
        value={assignment.score}/>
<br></br><br></br>
<a className="btn btn-primary" href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}>
        Update Assignment Completed Property
      </a> &nbsp;
        <input type="checkbox" checked={assignment.completed}
       onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked})}/>
<br></br><br></br>

    </div>
  );
}
export default WorkingWithObjects;

