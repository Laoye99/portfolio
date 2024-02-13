import { useState } from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import


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