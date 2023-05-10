import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import SiteStatus from "./SiteStatus/SiteStatus";
import Topbar from "./Global/Topbar/Topbar";

function App() {
  return (
    <>
      <Router>
        <Topbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sitestatus" element={<SiteStatus />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
