import React from "react";
import Navbar from "../Pages/Shared/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Navbar />
      
      {/* Main Content Area */}
      <div className="flex-1 relative">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
