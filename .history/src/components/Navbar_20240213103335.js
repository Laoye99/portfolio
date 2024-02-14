import { useState } from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import { Link } from "react-scroll";
import { 
    FcHome,
    FcFactory,
    FcTodoList,
    FcContacts } from "react-icons/fc";
import {FaUser} from "react-icons/fa"
import {MdBiotech, } from "react-icons/md"


const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    return(
        <div className="navbar">
        <div className="navbar-header">
        <p>
        <GiHamburgerMenu size={25} onClick={handleClick} />
        </p>
        </div>
        
        <div className="nav">
        <ul>
        <li className="nav-item">
        <Link
        to="home"
        spy={true}
        smooth={true}
        duration={100}
        offset={-100}
        >
        <FcHome size={25}/>
        Home
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
        <FaUser size={25}/>
        About
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
        <FcFactory size={25}/>
        Work Experience
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
        <MdBiotech size={25} color='#000000'/>
        Tech Stack
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
        <FcTodoList size={25} />
        Projects
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
        <FcContacts size={25}/>
        Contact
        </Link>
        </li>
        </ul>
        </div>
        ) : null}
        </div>
    );
};

export default Navbar;