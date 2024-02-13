import { useState } from "react";
import GiHamburgerMenu from 


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
        </div>
    );

};

export default Navbar;