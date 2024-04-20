import Nav from "../nav";
import Account from "./Account";
import Signin from "../Users/Signin";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import { useState, useEffect } from "react";
import axios from "axios";
import store from "./store";
import { Provider } from "react-redux";
import { signin } from "../Users/client";

function Kanbas() {
  const API_BASE = process.env.REACT_APP_API_BASE;
  
  const [courses, setCourses] = useState<any[]>([]);
  const [course, setCourse] = useState({
    _id: "1234",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "technology.jpeg"
  });
  
  const COURSES_API = `${API_BASE}/api/courses`;
  const findAllCourses = async () => {
    const response = await axios.get(COURSES_API);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  const addNewCourse = async () => {
    const response = await axios.post(COURSES_API, course);
    setCourses([...courses, response.data]);
  };

  const deleteCourse = async (courseId: string) => {
    const response = await axios.delete(`${COURSES_API}/${courseId}`);
    setCourses(courses.filter(
      (c) => c._id !== courseId));
  };

  const updateCourse = async () => {
    const response = await axios.put(
      `${COURSES_API}/${course._id}`,
      course
    );

    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <Provider store={store}>
      <div className="d-flex">
        <KanbasNavigation />
        <div></div>
        <div style={{ flexGrow: 1 }}>
          <Routes>
          <Route path="/Account/*" element={<Account />} />
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<Signin />} />
            <Route
              path="Dashboard"
              element={
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                />
              }
            />
            <Route
              path="Courses/:courseId/*"
              element={<Courses /> }
            />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}

export default Kanbas;
