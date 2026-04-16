import React from "react";
import Navbaar from "./Navbaar";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-12 min-h-screen">
      <Sidebar />

      <main className="col-span-9">
        <Navbaar />
        {children}
      </main>
    </div>
  );
}
