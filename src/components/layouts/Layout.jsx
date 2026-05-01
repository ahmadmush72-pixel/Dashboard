import React from "react";

import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbaar from "./Navbaar";

export default function Layout() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="col-span-1 flex flex-col  justify-between md:col-span-2 bg-gray-100 p-5 border border-primary/10 order-t-0 border-b-0 ">
        <Sidebar />
      </aside>

      {/* Right Side */}
      <div className="col-span-1 md:col-span-10 flex flex-col overflow-hidden">
        {/* Fixed Navbar */}
        <header className="shrink-0">
          <Navbaar />
        </header>

        {/* Scroll Only Outlet */}
        <main className="flex-1 overflow-y-auto bg-primary/3 p-5">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
