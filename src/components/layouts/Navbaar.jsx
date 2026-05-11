import { Input } from "@/components/ui/input";
import { Bell, User, Menu } from "lucide-react";
import React from "react";

export default function Navbaar({ onMenuToggle }) {
  return (
    <header className="p-3 md:p-4 bg-white border-b border-gray-200 shadow-sm">
      <nav className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={onMenuToggle}
            className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white p-2 text-gray-600 transition hover:bg-gray-100 md:hidden"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <Input
              className="w-full bg-muted-foreground/10 text-sm placeholder:text-gray-400 focus-visible:border-primary focus-visible:ring-primary/25"
              placeholder="Search..."
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-5">
          <button className="inline-flex items-center rounded-xl border border-gray-200 bg-white p-2 text-gray-600 transition hover:bg-gray-100">
            <Bell size={20} />
          </button>

          <div className="hidden h-8 w-px bg-gray-200 md:block" />

          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-primary text-lg font-bold">Mushtaq Ahmad</h1>
              <span className="text-sm font-medium text-gray-500">
                Administrator
              </span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <a
                href="#"
                className="block rounded-full bg-gray-100 p-2 shadow-sm"
              >
                <User className="h-9 w-9 text-primary" />
              </a>
              <span className="text-xs text-gray-500">Profile</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
