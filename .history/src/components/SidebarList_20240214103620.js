import { Fragment } from "react";

const SidebarList =({expandSidebar}) => {
return(
    <Fragment>
    <div className="navbar-items">
          <div className="sidebar-profile-pic">
            <img src={profilepic} alt="profileme" />
          </div>
          <div className="navbar-items">
          <div className="sidebar-profile-pic">
            <img src={profilepic} alt="profileme" />
          </div>
          </div>
    </Fragment>
)
};

export default SidebarList;