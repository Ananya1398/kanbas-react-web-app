import "./index.css";
import { FaFileImport, FaCrosshairs } from "react-icons/fa";
import { MdArrowCircleRight } from "react-icons/md";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { GoBell } from "react-icons/go";
import {  } from "react-icons/fa";
function Status(){
    return (
        <div className="flex-grow-0 me-2 d-none d-lg-block">
        <p className ="d-flex" style= {{flexGrow: '1'}}><button type="button" className="btn btn-light"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
              width="24" height="24">
              <circle cx="12" cy="12" r="10" fill="none" stroke="black" stroke-width="1" />
              <line x1="7" y1="7" x2="17" y2="17" stroke="black" stroke-width="2" />
            </svg>Unpublish</button>
          <button type="button" className="btn btn-success"><i className="fa fa-check-circle"></i>Published</button>
        </p>
        <ul className="button-list">
          <li><a href="#" className="button"><FaFileImport/> Import Existing Content</a></li>
          <li><a href="#" className="button"><MdArrowCircleRight/> Import From Commons</a></li>
          <li><a href="#" className="button"><FaCrosshairs/> Choose Home Page</a></li>
          <li><a href="#" className="button"><BiSolidBarChartAlt2/> View Course Stream</a></li>
          <li><a href="#" className="button"><HiOutlineSpeakerphone/> New Announcement</a></li>
          <li><a href="#" className="button"><BiSolidBarChartAlt2/> New Analytics</a></li>
          <li><a href="#" className="button"><GoBell/> View Course Notifications</a></li>
      </ul>
       
        <div className="todo"> To Do </div>
     
        <hr className="hr"/>
        <p ><a className="deco" href="">View Calendar</a></p>
        <p>
        <ul className="deco2">
          <li className="todo deco">Import From Commons</li>
          <li className="todo deco">Choose Home Page</li>
          <li className="todo deco">View Course Stream</li>
        </ul>
        </p>
      </div>
    )
}
export default Status