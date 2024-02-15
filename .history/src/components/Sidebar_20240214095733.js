import { useState } from "react";

const Sidebar = ({ theme,changeTheme }) => {
    const [expandSidebar, setExpandSidebar] = useState(true);

    const handleExpandClick = () => {
        setExpandSidebar(!expandSidebar);
    };
    return(
        <div className="sidebar-section">
        <div className={expa}></div></div>
    )
};

export default Sidebar;