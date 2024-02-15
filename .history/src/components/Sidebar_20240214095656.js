import { useState } from "react";

const Sidebar = ({ theme,changeTheme }) => {
    const [expandSidebar, setExpandSidebar] = useState(true);

    const handleExpandClick = () => {
        setExpandSidebar(!expandSidebar);
    };
    return(
        <div className="sidebar-section"></div>
    )
};

export default Sidebar;