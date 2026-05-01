"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";

import { Pencil, Trash2, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    image: "/products/iphone.jpg",
    name: "Apple iPhone 15 Pro Max",
    sku: "APL-001",
    category: "Mobile",
    price: 1499,
    stock: 18,
  },
  {
    id: 2,
    image: "/products/laptop.jpg",
    name: "MacBook Pro M3",
    sku: "APL-002",
    category: "Laptop",
    price: 2399,
    stock: 5,
  },
  {
    id: 3,
    image: "/products/headphone.jpg",
    name: "Sony WH-1000XM5",
    sku: "SNY-101",
    category: "Audio",
    price: 399,
    stock: 2,
  },
  {
    id: 4,
    image: "/products/watch.jpg",
    name: "Apple Watch Ultra",
    sku: "APL-004",
    category: "Mobile",
    price: 899,
    stock: 10,
  },
  {
    id: 5,
    image: "/products/ipad.jpg",
    name: "iPad Pro M4",
    sku: "APL-005",
    category: "Tablet",
    price: 1299,
    stock: 7,
  },
];

const categoryColors = {
  Mobile: "bg-blue-100 text-blue-600",
  Laptop: "bg-violet-100 text-violet-600",
  Audio: "bg-orange-100 text-orange-600",
  Tablet: "bg-green-100 text-green-600",
};

export default function ProductTable() {
  const [currentPage, setCurrentPage] = useState(1);

  const perPage = 4;
  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / perPage);

  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;

  const currentProducts = products.slice(startIndex, endIndex);

  const start = startIndex + 1;
  const end = Math.min(endIndex, totalProducts);

  return (
    <div className="space-y-5 border shadow-primary/10 rounded-2xl border-primary/20 shadow-lg">
      {/* Table */}
      <div className="bg-white shadow-primary/8 shadow-lg rounded-2xl p-4">
        <Table className="rounded-2xl  overflow-hidden">
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Product Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock Level</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {currentProducts.map((product) => {
              const lowStock = product.stock <= 5;
              const stockWidth = `${(product.stock / 20) * 100}%`;

              return (
                <TableRow key={product.id}>
                  {/* Image */}
                  <TableCell>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 rounded-lg object-cover border"
                    />
                  </TableCell>

                  {/* Name */}
                  <TableCell>
                    <div>
                      <p className="font-semibold text-primary">
                        {product.name}
                      </p>
                      <p className="text-xs text-gray-400">
                        SKU: {product.sku}
                      </p>
                    </div>
                  </TableCell>

                  {/* Category */}
                  <TableCell>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        categoryColors[product.category]
                      }`}
                    >
                      {product.category}
                    </span>
                  </TableCell>

                  {/* Price */}
                  <TableCell>${product.price}</TableCell>

                  {/* Stock */}
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          style={{ width: stockWidth }}
                          className={`h-full rounded-full ${
                            lowStock ? "bg-red-500" : "bg-blue-600"
                          }`}
                        />
                      </div>

                      <span
                        className={`text-sm ${
                          lowStock ? "text-red-500" : "text-gray-600"
                        }`}
                      >
                        {lowStock
                          ? `Low: ${product.stock}`
                          : `${product.stock} Units`}
                      </span>
                    </div>
                  </TableCell>

                  {/* Actions */}
                  <TableCell>
                    <div className="flex gap-2">
                      <Link to="/products/edit">
                        <Button
                          size="icon"
                          variant="ghost"
                          className="text-blue-600 bg-blue-100 cursor-pointer"
                        >
                          <Pencil size={18} />
                        </Button>
                      </Link>

                      <Button
                        size="icon"
                        variant="ghost"
                        className="text-red-500  bg-red-100 cursor-pointer"
                      >
                        <Trash2 size={18} />
                      </Button>

                      <Link to="/products/show">
                        <Button
                          size="icon"
                          variant="ghost"
                          className="text-gray-600  bg-gray-200 cursor-pointer"
                        >
                          <Eye size={18} />
                        </Button>
                      </Link>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between bg-[#f4f3fb] rounded-2xl px-5 py-4">
        <p className="text-sm text-gray-500 font-medium">
          Showing {start}-{end} of{" "}
          <span className="font-bold text-primary">{totalProducts}</span>{" "}
          products
        </p>

        <div className="flex items-center gap-2">
          {/* Prev */}
          <button
            onClick={() =>
              setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))
            }
            className="w-9 h-9 rounded-lg bg-white shadow-sm flex items-center justify-center"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Pages */}
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`w-9 h-9 rounded-lg font-medium ${
                currentPage === index + 1
                  ? "bg-primary text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              {index + 1}
            </button>
          ))}

          {/* Next */}
          <button
            onClick={() =>
              setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev))
            }
            className="w-9 h-9 rounded-lg bg-white shadow-sm flex items-center justify-center"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
