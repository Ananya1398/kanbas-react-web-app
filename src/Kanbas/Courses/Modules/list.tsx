import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <>
  <div style= {{flexGrow: '1'}} className="d-flex">
  <button type="button" className="btn btn-light custom-btn  form-control">Collapse All</button>
  <button type="button" className="btn btn-light custom-btn">View Progress</button>
  <select id="select-one-genre" className="custom-select form-control">
    <option value="COMEDY">Yes</option>
    <option value="DRAMA">No</option>
    <option selected value="SCIFI">
      &#x2713;<FaCheckCircle className="text-success"/>Publish All</option>
  </select>
  <button type="button" className="btn btn-danger custom-btn align-left">+ Module &nbsp;</button>
  <button type="button" className="custom-btn-ellipsis align-left"> <FaEllipsisV className="ms-2 cust" /></button>
  </div>

<hr className="hrclass"/>
      <ul className="list-group wd-modules">
        {modulesList.map((module, index) => (
          <li key={index}
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson, index) => (
                  <li className="list-group-item" key={index}>
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ModuleList;