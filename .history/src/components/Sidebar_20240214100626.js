import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from

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
        </p></div></div></div>
    )
};

export default Sidebar;