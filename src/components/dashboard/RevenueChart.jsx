import { Button } from "../ui/button";
import { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
export default function RevenueChart() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const [view, setView] = useState("monthly");

  const chartData = {
    daily: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      data: [12, 19, 10, 15, 22, 18, 25],
    },
    monthly: {
      labels: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",
      ],
      data: [35, 55, 40, 70, 50, 80, 90, 60, 75, 85, 95, 100],
    },
  };

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(chartRef.current, {
      type: "bar",
      data: {
        labels: chartData[view].labels,
        datasets: [
          {
            data: chartData[view].data,
            backgroundColor: "#5D05C2",
            borderRadius: 8,
            barThickness: 28,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
        },
        scales: {
          x: {
            grid: { display: false },
            border: { display: false },
          },
          y: {
            display: false,
          },
        },
      },
    });

    return () => chartInstance.current.destroy();
  }, [view]);

  return (
    <div>
      <div className="flex items-center justify-between overflow-hidden ">
        <div>
          <h1 className="text-lg font-bold">Sales Overview</h1>
          <p className="text-sm text-gray-400">
            Revenue flow and acquisition trends for the current fiscal period.
          </p>
        </div>
        <div className="flex items-center justify-end gap-2">
          <Button
            className={`p-4 text-[13px] rounded-xl ${view === "daily" ? "bg-primary text-white" : "bg-gray-200 text-gray-500 hover:bg-primary hover:text-white"}`}
            onClick={() => setView("daily")}
          >
            Daily
          </Button>
          <Button
            className={`p-4 text-[13px] rounded-xl ${view === "monthly" ? "bg-primary text-white" : "bg-gray-200 text-gray-500 hover:bg-primary hover:text-white"}`}
            onClick={() => setView("monthly")}
          >
            Monthly
          </Button>
        </div>
      </div>
      {/* chart area */}
      <div className="mt-5 w-full overflow-hidden rounded-3xl bg-white/80 p-4 shadow-sm">
        <div className="h-[320px] w-full">
          <canvas ref={chartRef} className="h-full w-full"></canvas>
        </div>
      </div>
    </div>
  );
}
