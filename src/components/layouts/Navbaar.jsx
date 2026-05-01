import { Input } from "@/components/ui/input";
import { Bell, User } from "lucide-react";
import React from "react";

export default function Navbaar() {
  const items = [{}];
  return (
    <header className="p-2 px-5 border  overflow-hidden border-b-primary/15  bg-white">
      <nav className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <Input
            className="w-full bg-muted-foreground/10 text-sm hover:bg-primary/10 focus-visible:primary/20"
            placeholder="Search..."
          />
        </div>
        <div className="flex justify-between gap-4 items-center">
          <div className="flex gap-2 md:gap-5">
            <span>
              <Bell className="text-gray-500" size={22} />
            </span>
          </div>
          <div className=" text-gray-500 text-2xl">|</div>
          <div className="flex gap-4 flex-col md:flex-row items-center">
            <div>
              <h1 className="text-primary text-lg font-bold">Mushtaq Ahmad</h1>
              <span className="text-sm font-medium text-gray-500">
                Administrator
              </span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <a href="" className="block">
                <User className="h-9 w-9 rounded-full border-2 border-primary p-2 bg-gray-100" />
              </a>
              <span className="text-xs text-gray-500">Profile</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
