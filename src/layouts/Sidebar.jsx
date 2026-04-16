import {
  Archive,
  BaggageClaim,
  LayoutDashboard,
  Store,
  UserRound,
} from "lucide-react";
import React from "react";

export default function Sidebar() {
  return (
    <aside className="col-span-2 flex flex-col justify-between bg-gray-100 p-4">
      <div>
        <div className="flex items-center p-4">
          <span>
            <Store className="w-10 h-10 text-3E3B88" />
          </span>
          <div className="mx-2">
            <h1 className="text-2xl font-bold text-purple-500">AA Store</h1>
            <span className="text-xs font-bold text-gray-500">
              MANAGEMENT SUIT
            </span>
          </div>
        </div>

        <ul className="space-y-4 p-4">
          <li>
            <a href="" className="flex gap-2">
              <LayoutDashboard className="text-black" />
              <span className="text-gray">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="" className="flex gap-2">
              <Archive />
              <span className="text-gray">Products</span>
            </a>
          </li>

          <li>
            <a href="" className="flex gap-2">
              <BaggageClaim className="text-black" />
              <span className="text-gray">Orders</span>
            </a>
          </li>
          <li>
            <a href="" className="flex gap-2">
              <UserRound />
              <span className="text-gray">Customers</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="p-4">
        <button>logout</button>
      </div>
    </aside>
  );
}
