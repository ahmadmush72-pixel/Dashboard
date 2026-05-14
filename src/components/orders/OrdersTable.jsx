import { useState } from "react";
import {
  Eye,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Reveal from "../ui/Reveal";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const allOrders = [
  {
    id: "#ORD-2023-9182",
    date: "Oct 24, 2023",
    customer: "Elias Johnson",
    email: "eliasj@active.io",
    avatar: "EJ",
    color: "bg-indigo-100 text-indigo-700",
    amount: "$2,450.00",
    status: "SHIPPED",
    statusColor: "bg-indigo-100 text-indigo-700",
    category: "in_transit",
  },
  {
    id: "#ORD-2023-9183",
    date: "Oct 24, 2023",
    customer: "Sarah Al-Fayed",
    email: "s.alfayed@global.net",
    avatar: "SA",
    color: "bg-orange-100 text-orange-700",
    amount: "$12,800.00",
    status: "PENDING",
    statusColor: "bg-orange-100 text-orange-700",
    category: "awaiting",
  },
  {
    id: "#ORD-2023-9184",
    date: "Oct 23, 2023",
    customer: "Marcus Webb",
    email: "webb.design@creative.co",
    avatar: "MW",
    color: "bg-blue-100 text-blue-700",
    amount: "$540.25",
    status: "DELIVERED",
    statusColor: "bg-emerald-100 text-emerald-700",
    category: "delivered",
  },
  {
    id: "#ORD-2023-9185",
    date: "Oct 23, 2023",
    customer: "Lina Quinn",
    email: "lquinn@archivic.io",
    avatar: "LQ",
    color: "bg-gray-200 text-gray-700",
    amount: "$1,120.00",
    status: "CANCELLED",
    statusColor: "bg-red-100 text-red-700",
    category: "cancelled",
  },

  // More dummy records
  {
    id: "#ORD-2023-9186",
    date: "Oct 22, 2023",
    customer: "Ahmad Khan",
    email: "ahmad@gmail.com",
    avatar: "AK",
    color: "bg-purple-100 text-purple-700",
    amount: "$890.00",
    status: "SHIPPED",
    statusColor: "bg-indigo-100 text-indigo-700",
    category: "in_transit",
  },
  {
    id: "#ORD-2023-9187",
    date: "Oct 22, 2023",
    customer: "Sophia Lee",
    email: "sophia@design.io",
    avatar: "SL",
    color: "bg-pink-100 text-pink-700",
    amount: "$1,920.00",
    status: "DELIVERED",
    statusColor: "bg-emerald-100 text-emerald-700",
    category: "delivered",
  },
  {
    id: "#ORD-2023-9188",
    date: "Oct 21, 2023",
    customer: "David Miller",
    email: "david@tech.io",
    avatar: "DM",
    color: "bg-cyan-100 text-cyan-700",
    amount: "$320.00",
    status: "PENDING",
    statusColor: "bg-orange-100 text-orange-700",
    category: "awaiting",
  },
  {
    id: "#ORD-2023-9189",
    date: "Oct 20, 2023",
    customer: "Emma Watson",
    email: "emma@studio.io",
    avatar: "EW",
    color: "bg-yellow-100 text-yellow-700",
    amount: "$2,120.00",
    status: "CANCELLED",
    statusColor: "bg-red-100 text-red-700",
    category: "cancelled",
  },
];

const tabs = [
  { label: "All Orders", value: "all" },
  { label: "Awaiting Shipment", value: "awaiting" },
  { label: "In Transit", value: "in_transit" },
  { label: "Delivered", value: "delivered" },
  { label: "Cancelled", value: "cancelled" },
];

export default function OrdersTable() {
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const recordsPerPage = 4;

  const filteredOrders =
    activeTab === "all"
      ? allOrders
      : allOrders.filter((order) => order.category === activeTab);

  const totalPages = Math.ceil(filteredOrders.length / recordsPerPage);

  const startIndex = (currentPage - 1) * recordsPerPage;
  const endIndex = startIndex + recordsPerPage;

  const currentOrders = filteredOrders.slice(startIndex, endIndex);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  return (
    <div className="mx-auto max-w-7xl rounded-3xl bg-white p-5 shadow-sm">
      {/* Header */}
      <Reveal>
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => handleTabChange(tab.value)}
                className={`rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab.value
                    ? "bg-primary text-white shadow-lg shadow-blue-200"
                    : "text-gray-500 hover:bg-gray-100 hover:text-primary"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Daily Volume */}
          <div className="flex w-full items-center justify-between rounded-2xl bg-primary px-6 py-5 text-white lg:w-[260px]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-100">
                Daily Volume
              </p>
            </div>

            <h2 className="text-2xl font-bold">$14,290.40</h2>
          </div>
        </div>
      </Reveal>

      {/* Table */}
      <Reveal>
        <div className="overflow-x-auto rounded-2xl border border-primary/10">
          <Table className="w-full min-w-[950px]">
            <TableHeader>
              <TableRow className="text-left text-[11px] uppercase tracking-widest text-gray-400 bg-[#f8f8fc]">
                <TableHead className="px-6 py-5">Order ID</TableHead>
                <TableHead className="px-6 py-5">Date</TableHead>
                <TableHead className="px-6 py-5">Customer</TableHead>
                <TableHead className="px-6 py-5">Total Amount</TableHead>
                <TableHead className="px-6 py-5">Status</TableHead>
                <TableHead className="px-6 py-5 text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {currentOrders.map((order, index) => (
                <TableRow
                  key={index}
                  className="border-t border-gray-100 transition hover:bg-primary/10"
                >
                  <TableCell className="px-6 py-5">
                    <p className="text-sm font-semibold text-primary">
                      {order.id}
                    </p>
                  </TableCell>

                  <TableCell className="px-6 py-5">
                    <p className="text-sm font-medium text-gray-700">
                      {order.date}
                    </p>
                  </TableCell>

                  <TableCell className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold ${order.color}`}
                      >
                        {order.avatar}
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-gray-800">
                          {order.customer}
                        </h3>

                        <p className="text-xs text-gray-400">{order.email}</p>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell className="px-6 py-5">
                    <p className="text-sm font-bold text-gray-800">
                      {order.amount}
                    </p>
                  </TableCell>

                  <TableCell className="px-6 py-5">
                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-bold tracking-wide ${order.statusColor}`}
                    >
                      {order.status}
                    </span>
                  </TableCell>

                  <TableCell className="px-6 py-5">
                    <div className="flex items-center justify-center gap-4 text-gray-400">
                      <Link to="/orders/show">
                        <button className="transition hover:text-primary">
                          <Eye size={18} />
                        </button>
                      </Link>

                      <button className="transition hover:text-primary">
                        <SlidersHorizontal size={18} />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Footer */}
          <div className="flex flex-col gap-4 border-t border-gray-100 px-6 py-5 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-sm text-gray-400">
              Showing {startIndex + 1}-
              {Math.min(endIndex, filteredOrders.length)} of{" "}
              {filteredOrders.length} records
            </p>

            {/* Pagination */}
            <div className="flex items-center gap-2">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronLeft size={16} />
              </button>

              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-semibold transition ${
                    currentPage === index + 1
                      ? "bg-primary text-white"
                      : "text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
