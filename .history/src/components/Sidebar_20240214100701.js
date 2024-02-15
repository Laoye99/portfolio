import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Sidebar = ({ theme,changeTheme }) => {
    const [expandSidebar, setExpandSidebar] = useState(true);

    const handleExpandClick = () => {
        setExpandSidebar(!expandSidebar);
    };
    return(
        <div className="sidebar-section">
        <div className={expandSidebar ? "sidebar-expand" : "sidebar"}>
        <div className="icon-sidebar">
        <p onClick={handleExpandClick}>
        <BsChevronLeft size={}
        </p></div></div></div>
    )
};

export default Sidebar;