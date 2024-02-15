import { Fragment } from "react";
import './SidebarList.css';
import { 
    FcHome,
    FcBriefcase,
    FcContacts,
    FcServices, 
    FcCollaboration,
    FcSalesPerformance,
    FcPortraitMode,
    FcGraduationCap } from "react-icons/fc";
import {MdCastForEducation} from "react-icons/md";
import { Link } from "react-scroll";
import profilepic from"../../Image/Screenshot (29).png";

const SidebarList =({expandSidebar}) => {
return(
    <Fragment>
    {expandSidebar ? (
    <div className="navbar-items">
          <div className="sidebar-profile-pic">
            <img src={profilepic} alt="profile" />
          </div>
          <ul>
            <li className="nav-item">
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcHome size={25} /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcPortraitMode size={25}  /> About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="project"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcBriefcase size={25} /> Work Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="stack"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcServices size={25} /> Tech Stack
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="project"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcCollaboration size={25} /> Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcContacts size={25} /> Contact
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className="navbar-items-only-icons">
          <ul>
            <li className="nav-item">
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcHome size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcPortraitMode size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="project"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcBriefcase size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="stack"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcServices  size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <MdCastForEducation size={25} />
            </li>
            <li className="nav-item">
              <Link
                to="project"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcCollaboration size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link>
                <FcSalesPerformance size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcContacts size={25} />
              </Link>
            </li>
          </ul>
          </div>
      )}
    </Fragment>
);
};

export default SidebarList;