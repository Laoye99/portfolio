import { useState } from "react";


const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    return(
        <div >
        </div>
    );

};

export default Navbar;