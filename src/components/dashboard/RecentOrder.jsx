import { ArrowRight } from "lucide-react";
import React from "react";
import Reveal from "@/components/ui/Reveal";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function RecentOrder() {
  const orders = [
    {
      id: "#1025",
      customer: "Ali Khan",
      product: "iPhone 15 Pro",
      date: "24 Apr 2026",
      amount: "$1200",
      status: "Delivered",
    },
    {
      id: "#1026",
      customer: "Ahmed Raza",
      product: "Samsung S24",
      date: "23 Apr 2026",
      amount: "$980",
      status: "Pending",
    },
    {
      id: "#1027",
      customer: "Sara Noor",
      product: "AirPods Pro",
      date: "22 Apr 2026",
      amount: "$250",
      status: "Cancelled",
    },
  ];

  return (
    <Reveal className="flex flex-col p-4 space-y-2 rounded-3xl bg-white shadow-xl shadow-primary/10">
      {/* header */}
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-lg">Recent Orders</h1>
        <div>
          <a href="#" className="flex items-center gap-1">
            <span className="text-primary font-medium text-sm">
              View All activities
            </span>
            <ArrowRight className="text-primary w-4 h-4" />
          </a>
        </div>
      </div>
      {/* recent orders table */}

      <Table className="rounded-2xl overflow-hidden">
        {/* Header */}
        <TableHeader>
          <TableRow className="border-b-0">
            <TableHead>Order ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Product</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell className="font-medium text-primary">
                {order.customer}
              </TableCell>
              <TableCell>{order.product}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>{order.amount}</TableCell>

              <TableCell>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    order.status === "Delivered"
                      ? "bg-green-100 text-green-700"
                      : order.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                  }`}
                >
                  {order.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Reveal>
  );
}
