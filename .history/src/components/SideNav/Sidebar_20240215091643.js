import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "./Sidebar.css";
import SidebarList from "./SidebarList";
import H


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
            <BsChevronLeft size={30} color="#00f5c0"/>
            ) : (
        <BsChevronRight size={30} color="#00f5c0"/>
            )}
        </p>
        </div>
        <SidebarList expandSidebar={expandSidebar} />      
        </div>
        <div className="container-fluid">
          <Home changeTheme = {changeTheme} theme = {theme}/>
        </div>
        
        </div>
    );
};

export default Sidebar;