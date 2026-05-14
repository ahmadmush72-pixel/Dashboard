import React from "react";
import RecentOrder from "@/components/dashboard/RecentOrder";
import RevenueChart from "@/components/dashboard/RevenueChart";
import Reveal from "@/components/ui/Reveal";
import { useCountUp } from "@/lib/animations";
import {
  Archive,
  BaggageClaim,
  DollarSign,
  TrendingUp,
  Users,
} from "lucide-react";

function StatCard({ item }) {
  const count = useCountUp(item.count, 1400);

  return (
    <Reveal className="rounded-3xl bg-white p-5 shadow-xl shadow-primary/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
      <div className="flex items-start justify-between gap-4">
        <span className="rounded-2xl bg-primary/20 text-primary p-3 animate-float">
          {item.icon}
        </span>
        <div className="rounded-2xl bg-primary/10 px-3 py-1 text-xs font-semibold uppercase text-primary">
          {item.desc}
        </div>
      </div>
      <div className="mt-4">
        <p className="text-xs font-semibold text-gray-500 uppercase">
          {item.title}
        </p>
        <p className="text-3xl font-black text-primary mt-2">
          {item.prefix}
          {count}
          {item.suffix}
        </p>
      </div>
    </Reveal>
  );
}

export default function Dashboard() {
  const states = [
    {
      title: "Total users",
      icon: <Users className="w-5 h-5" />,
      count: 1200,
      desc: "+5.2%",
      prefix: "",
      suffix: "",
    },
    {
      title: "Active products",
      icon: <Archive className="w-5 h-5" />,
      count: 420,
      desc: "+7.8%",
      prefix: "",
      suffix: "",
    },
    {
      title: "Total orders",
      icon: <BaggageClaim className="w-5 h-5" />,
      count: 1342,
      desc: "+3.1%",
      prefix: "",
      suffix: "",
    },
    {
      title: "Net revenue",
      icon: <DollarSign className="w-5 h-5" />,
      count: 12234,
      desc: "+5.2%",
      prefix: "$",
      suffix: "",
    },
  ];

  return (
    <div className="mx-auto w-full max-w-6xl space-y-6 px-3 pb-8">
      <Reveal>
        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-primary uppercase tracking-tight">
            Admin Dashboard
          </h1>
          <p className="text-sm text-gray-500 max-w-md ">
            Platform performance and commercial insights
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {states.map((item) => (
          <StatCard key={item.title} item={item} />
        ))}
      </div>

      <Reveal>
        <div className="overflow-hidden rounded-3xl bg-white p-6 shadow-xl shadow-primary/10 border border-primary/10">
          <RevenueChart />
        </div>
      </Reveal>

      <Reveal>
        <div className="overflow-hidden rounded-3xl bg-white p-2 shadow-xl shadow-primary/10 border border-primary/10">
          <RecentOrder />
        </div>
      </Reveal>
    </div>
  );
}
