import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div>
      <div className="Sidebar">
        <Link to={'/'}>
        <img
          className="sidebar-logo"
          src="https://dorabhai.com/dist/images/logo.svg"
          alt=""
          />
          </Link>
        <hr />
        <div className="sidebar-options">
          <div className="opt">Dashboard</div>
          <hr />
          <div className="opt">Library</div>
          <hr/>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
