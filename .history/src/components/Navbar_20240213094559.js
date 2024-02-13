import { useState } from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import { Link } from "react-scroll";
import { FcHome,FcNig } from "react-icons/fc";


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
        <div className="nav">
        <ul>
        <li className="nav-item">
        <Link>
        <FcHome size={25}/>
        Home
        </Link>
        </li>
        <li className="nav-item">
        <Link>
        <FcHome size={25}/>
        About
        </Link>
        </li>
        </ul>
        </div>
        </p>
        </div>
        </div>
    );

};

export default Navbar;