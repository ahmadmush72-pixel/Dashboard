import { QrCode, TriangleAlert, Wallet } from "lucide-react";
import React from "react";
import Reveal from "@/components/ui/Reveal";

export default function SummaryCard() {
  const SummaryCart = [
    {
      title: "Total value",
      value: "$12,345",
      icon: <Wallet className="w-5 h-5" />,
    },
    {
      title: "Active Skus",
      value: "1,234",
      icon: <QrCode className="w-5 h-5" />,
    },
    {
      title: "Out of stock",
      value: "123",
      icon: <TriangleAlert className="w-5 h-5" />,
    },
  ];
  return (
    <Reveal>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-5">
        {SummaryCart.map((item, index) => {
          return (
            <div
              key={index}
              className=" flex justify-between shadow-md shadow-primary/10  items-center  rounded-2xl p-5 bg-white"
            >
              <div className="flex flex-col gap-1">
                <h1 className="font-medium text-gray-500 text-[13px] uppercase">
                  {item.title}
                </h1>
                <span
                  className={`text-2xl font-bold ${
                    item.title === "Out of stock"
                      ? "text-red-600"
                      : "text-primary"
                  }`}
                >
                  {item.value}
                </span>
              </div>
              <div>
                <span
                  className={`p-2 rounded-2xl block overflow-hidden ${
                    item.title === "Out of stock"
                      ? "bg-red-100 text-red-600"
                      : "bg-primary/30 text-primary"
                  }`}
                >
                  {item.icon}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </Reveal>
  );
}
