import SidebarEmployer from "../pages/employer/employerDashboard/SidebarEmployer";
import React from "react";
import { Outlet } from "react-router-dom";

const EmployerLayout = () => {
  return (
    <div className="grid min-h-screen grid-cols-[240px,1fr] overflow-clip rounded-md bg-slate-100">
      <div className="mr-2">
        <SidebarEmployer />
      </div>
      <div className="max-h-[calc(100vh-1rem) mt-[0.5rem]] overflow-y-scroll rounded-md bg-white">
        <Outlet /> 
      </div>
    </div>
  );
};

export default EmployerLayout;
