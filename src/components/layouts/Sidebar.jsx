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
import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <div>
        <div className="flex items-center p-4">
          <span>
            <Store className="w-10 h-10 text-primary" />
          </span>
          <div className="mx-2">
            <h1 className="text-xl font-bold text-primary">AA Store</h1>
            <span className="text-xs font-bold text-gray-500 uppercase">
              MANAGEMENT SUIT
            </span>
          </div>
        </div>

        <ul className="space-y-2 p-4">
          <li className="w-full">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-gray-500 hover:bg-primary hover:text-white"
                }`
              }
            >
              <LayoutDashboard className="w-5 h-5" />
              <span className="font-medium">Dashboard</span>
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-gray-500 hover:bg-primary hover:text-white"
                }`
              }
            >
              <Archive className="w-5 h-5" />
              <span className="font-medium">Products</span>
            </NavLink>
          </li>

          <li className="w-full">
            <NavLink
              to="/categories"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-gray-500 hover:bg-primary hover:text-white"
                }`
              }
            >
              <Grid3X3 className="w-5 h-5" />
              <span className="font-medium">Categories</span>
            </NavLink>
          </li>

          <li className="w-full">
            <NavLink
              to="/orders"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-gray-500 hover:bg-primary hover:text-white"
                }`
              }
            >
              <BaggageClaim className="w-5 h-5" />
              <span className="font-medium">Orders</span>
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink
              to="/customers"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-gray-500 hover:bg-primary hover:text-white"
                }`
              }
            >
              <UsersRound className="w-5 h-5" />
              <span className="font-medium">Users</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="p-4">
        <Button
          className="p-5 text-md text-gray-500 w-full hover:bg-red-100 cursor-pointer hover:text-red-500"
          variant="outline"
        >
          <LogOut />
          Logout
        </Button>
      </div>
    </>
  );
}
