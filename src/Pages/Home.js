import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <div className="h-header">
          <p>BANNER/ANNOUNCEMENTS/IMPORTANT NOTIFICATION</p>
        </div>
        <div className="h-main">
          <div className="h-main-blocks">
            <Link to={"/library"}>
              <p className="h-block-desc">LIBRARY</p>
            </Link>
          </div>
          <div className="h-main-blocks">
            <Link to={"/"}>
              <p>SEMESTER-COURSES</p>
            </Link>
          </div>
          <div className="h-main-blocks">
            <Link to={"/"}>
              <p>PERFORMANCE</p>
            </Link>
          </div>
          <div className="h-main-blocks">
            <Link to={"/"}>
              <p>LIVE CLASS</p>
            </Link>
          </div>
          <div className="h-main-blocks">
            <Link to={"/"}>
              <p>HELP & SUPPORT</p>
            </Link>
          </div>
          <div className="h-main-blocks">
            <Link to={"/"}>
              <p>TOOLS</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
