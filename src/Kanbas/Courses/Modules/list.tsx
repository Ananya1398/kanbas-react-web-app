import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();
  const [selectedModule, setSelectedModule] = useState(moduleList[0]);

  return (
    <>
      <div style={{ flexGrow: '1' }} className="d-flex">
        <button type="button" className="btn btn-light custom-btn  form-control">Collapse All</button>
        <button type="button" className="btn btn-light custom-btn">View Progress</button>
        <select id="select-one-genre" className="custom-select form-control">
          <option value="COMEDY">Yes</option>
          <option value="DRAMA">No</option>
          <option selected value="SCIFI">
            &#x2713;<FaCheckCircle className="text-success" />Publish All</option>
        </select>
        <button type="button" className="btn btn-danger custom-btn align-left"
          onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
          Add Module&nbsp;
        </button>
        <button type="button" className="custom-btn-ellipsis align-right"> <FaEllipsisV className="ms-2 cust" /></button>
      </div>

      <hr className="hrclass" />
      <ul className="list-group wd-modules">
        <div>
        <input
  className="form-control custom-input"
  value={module.name}
  onChange={(e) =>
    dispatch(setModule({ ...module, name: e.target.value }))
  }
/><br></br>
<textarea
  className="form-control custom-textarea"
  value={module.description}
  onChange={(e) =>
    dispatch(setModule({ ...module, description: e.target.value }))
  } 
/>
<br></br>
          <button style={{ padding: '3px 7px', borderRadius: '5px' }} className="btn btn-primary"
            onClick={() => dispatch(updateModule(module))}>
            Update
          </button>&nbsp;
        </div><br></br>
      

        {moduleList
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item" onClick={() => setSelectedModule(module)}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h5>{module.name}</h5>
                <div>
                  <span className="float-end">
                    <FaCheckCircle className="text-success" />
                    <FaPlusCircle className="ms-2" />
                    <FaEllipsisV className="ms-2" />
                  </span>
                  <button style={{ padding: '3px 7px', borderRadius: '5px' }} className="btn btn-primary" onClick={() => dispatch(setModule(module))}>Edit</button>&nbsp;
                  <button style={{ padding: '3px 7px', borderRadius: '5px' }}  className="btn btn-danger" onClick={() => dispatch(deleteModule(module._id))}>Delete</button>&nbsp;
                </div>
              </div>
              <div>{module.description}</div>
              {selectedModule._id === module._id && (
                <ul className="list-group">
                  {module.lessons?.map((lesson: any, index: number) => (
                    <li className="list-group-item">
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
