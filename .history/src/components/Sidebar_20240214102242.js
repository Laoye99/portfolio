import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "./Sidebar.css";

const Sidebar = ({ theme,changeTheme }) => {
    const [expandSidebar, setExpandSidebar] = useState(true);

    const handleExpandClick = () => {
        setExpandSidebar(!expandSidebar);
    };
    return(
        <div className="container-fluid sidebar-section">
        <div className={expandSidebar ? "sidebar-expand sidebar" : "sidebar"}>
        <div className="icon-sidebar">
        <p onClick={handleExpandClick}>
        {expandSidebar ? (
            <BsChevronLeft size={30} color="#a75fd2"/>
            ) : (
        <BsChevronRight size={30} color="#a75fd2"/>
            )}
        </p>
        </div>
        </div></div>
    )
};

export default Sidebar;