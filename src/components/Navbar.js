import React from "react";
import "./navbar.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Library</h1>
      <div className="nav-icons">
        <div className="icon">
          <NotificationsIcon fontSize="large" />
        </div>
        <div className="icon">
          <PersonIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
