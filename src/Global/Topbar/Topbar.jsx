import React from "react";
import "./Topbar.css"

const Topbar = () => {
  return (
    <div className="topbar">
      <span>Dashboard</span>
      <button className="topbar__button">Logout</button>
    </div>
  );
};

export default Topbar;
