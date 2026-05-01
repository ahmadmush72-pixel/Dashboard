import RecentOrder from "@/components/dashboard/RecentOrder";
import RevenueChart from "@/components/dashboard/RevenueChart";
import { Button } from "@/components/ui/button";
import {
  Archive,
  BaggageClaim,
  DollarSign,
  TrendingUp,
  Users,
} from "lucide-react";
import React from "react";

export default function Dashboard() {
  const states = [
    {
      title: "total users",
      icon: <Users className="w-5 h-5" />,
      user: "12,00",
      desc: "+5.2%",
      trendIcon: <TrendingUp className="w-4 h-3" />,
    },
    {
      title: "Active products",
      icon: <Archive className="w-5 h-5" />,
      user: "12,00",
      desc: "+5.2%",
      trendIcon: <TrendingUp className="w-4 h-3" />,
    },
    {
      title: "Total orders",
      icon: <BaggageClaim className="w-5 h-5" />,
      user: "12,00",
      desc: "+5.2%",
      trendIcon: <TrendingUp className="w-4 h-3" />,
    },
    {
      title: "net revenues",
      icon: <DollarSign />,
      user: "$12,0034",
      desc: "+5.2%",
      trendIcon: <TrendingUp className="w-4 h-3" />,
    },
  ];
  return (
    <div className="container px-3">
      <div className="">
        <h1 className="text-2xl font-bold text-primary uppercase">
          Admin Dashboard
        </h1>
        <p className="font-medium text-gray-500 text-sm">
          Platform performance and commercial insights
        </p>
      </div>

      <div className="flex justify-between items-center mt-5">
        {states.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border-primary/20 p-4 border shadow-md shadow-primary/10  bg-white w-[20%]"
          >
            <div className="flex items-start justify-between">
              <span className="rounded-lg bg-primary/30 text-primary p-2 py-3">
                {item.icon}
              </span>
              <div className="flex items-center justify-between text-primary bg-primary/10 rounded-2xl text-xs px-2 py-1 font-medium gap-2">
                <span>{item.desc}</span>
                <span>{item.trendIcon}</span>
              </div>
            </div>
            <div className="mt-3">
              <h1 className="text-sm font-medium text-gray-500 uppercase">
                {item.title}
              </h1>
              <p className="font-black text-2xl ">{item.user}</p>
            </div>
          </div>
        ))}
      </div>
      {/* chart */}
      <div className="bg-white w-full shadow-lg shadow-primary/10  rounded-2xl p-6 mt-5 border border-primary/20">
        <RevenueChart />
      </div>
      {/* recent orders */}
      <div className="bg-white w-full shadow-lg shadow-primary/10 rounded-2xl p-2 mt-5 border border-primary/20">
        <RecentOrder />
      </div>
    </div>
  );
}
