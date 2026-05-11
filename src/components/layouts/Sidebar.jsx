import { Button } from "@/components/ui/button";
import {
  Archive,
  BaggageClaim,
  LayoutDashboard,
  LogOut,
  Store,
  UsersRound,
  Grid3X3,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 768) setIsCollapsed(false);
  }, []);

  return (
    <div className="h-full">
      <div
        className={`flex flex-col h-full bg-white rounded-2xl border-r transition-all duration-300 ${
          isCollapsed ? "md:w-16 w-full" : "md:w-64 w-full"
        }`}
        onMouseEnter={() => setIsCollapsed(false)}
        onMouseLeave={() => setIsCollapsed(true)}
      >
        <div className="flex items-center p-4 gap-3">
          <Store className="w-10 h-10 text-primary" />
          {!isCollapsed && (
            <div>
              <h1 className="text-xl font-bold text-primary">AA Store</h1>
              <span className="text-xs font-bold text-gray-500 uppercase">
                MANAGEMENT SUITE
              </span>
            </div>
          )}
        </div>

        <ul className="space-y-2 p-4 flex-1">
          {[
            { to: "/", icon: LayoutDashboard, label: "Dashboard" },
            { to: "/products", icon: Archive, label: "Products" },
            { to: "/categories", icon: Grid3X3, label: "Categories" },
            { to: "/orders", icon: BaggageClaim, label: "Orders" },
            { to: "/customers", icon: UsersRound, label: "Users" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <li className="w-full" key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      isActive
                        ? "bg-primary text-white"
                        : "text-gray-500 hover:bg-primary hover:text-white"
                    }`
                  }
                >
                  <Icon className="w-5 h-5" />
                  {!isCollapsed && (
                    <span className="font-medium">{item.label}</span>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className="p-4">
          <Button
            className="p-5 text-md text-gray-500 w-full hover:bg-red-100 hover:text-red-500"
            variant="outline"
          >
            <LogOut />
            {!isCollapsed && "Logout"}
          </Button>
        </div>
      </div>
    </div>
  );
}
