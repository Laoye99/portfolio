import { useState } from "react";
import GiH


const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    return(
        <div className="navbar">
        <div className="navbar-header">
        <p>
        </p>
        </div>
        </div>
    );

};

export default Navbar;