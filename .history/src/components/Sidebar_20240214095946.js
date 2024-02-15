import { useState } from "react";

const Sidebar = ({ theme,changeTheme }) => {
    const [expandSidebar, setExpandSidebar] = useState(true);

    const handleExpandClick = () => {
        setExpandSidebar(!expandSidebar);
    };
    return(
        <div className="sidebar-section">
        <div className={expandSidebar ? "sidebar-expand" : "sidebar"}>
        <div className="icon-sidar"></div></div></div>
    )
};

export default Sidebar;