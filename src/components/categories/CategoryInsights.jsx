import Reveal from "@/components/ui/Reveal";
import { DollarSign } from "lucide-react";

export default function CategoryInsights() {
  const categories = [
    { name: "Luxury Footwear", percent: 42, color: "bg-blue-500" },
    { name: "Timepieces", percent: 28, color: "bg-amber-500" },
    { name: "Home & Living", percent: 18, color: "bg-indigo-300" },
  ];

  return (
    <Reveal className="space-y-6">
      {/* TOP CARD */}
      <div className="bg-primary text-white p-6 rounded-2xl shadow-lg">
        <p className="text-xs uppercase font-medium opacity-80">
          Total Inventory value
        </p>

        <h1 className="text-3xl font-bold mt-2">224.2M</h1>

        <p className="text-sm mt-2 opacity-90">↗ +8% growth this month</p>
      </div>

      {/* DISTRIBUTION CARD */}
      <div className="bg-white p-5 rounded-2xl shadow-md shadow-primary/10 space-y-5">
        <h2 className="font-semibold text-gray-700">Category Distribution</h2>

        {categories.map((cat, i) => (
          <div key={i} className="space-y-2">
            {/* LABEL */}
            <div className="flex justify-between text-sm">
              <span>{cat.name}</span>
              <span className="text-gray-500">{cat.percent}%</span>
            </div>

            {/* PROGRESS BAR */}
            <div className="w-full h-2 bg-gray-200 rounded-full">
              <div
                className={`h-2 rounded-full ${cat.color}`}
                style={{ width: `${cat.percent}%` }}
              />
            </div>
          </div>
        ))}

        {/* BUTTON */}
        <button className="mt-4 w-full py-2 text-sm font-medium bg-white rounded-xl shadow hover:bg-primary hover:text-white cursor-pointer uppercase">
          View full report
        </button>
      </div>
    </Reveal>
  );
}
