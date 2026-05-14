import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbaar from "./Navbaar";

export default function Layout() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="relative min-h-screen md:grid md:grid-cols-[280px_1fr]">
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-full max-w-sm bg-primary p-5 transition-transform duration-300 md:static md:sticky md:top-0 md:h-screen md:overflow-y-auto md:translate-x-0 ${
          mobileMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar />
      </aside>

      <div
        className={`fixed inset-0 bg-black/20 transition-opacity duration-300 md:hidden ${
          mobileMenu
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileMenu(false)}
      />

      <div className="flex flex-col min-h-screen md:col-span-1 md:overflow-hidden">
        <header className="shrink-0">
          <Navbaar onMenuToggle={() => setMobileMenu((prev) => !prev)} />
        </header>

        <main className="flex-1 overflow-y-auto bg-primary/5 p-4 md:p-5">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
