import { useState } from "react";
import {GiHamburgerMenu} from "react-icons/gi";


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
        <div>
        </div>
        </p>
        </div>
        </div>
    );

};

export default Navbar;