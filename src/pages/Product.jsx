import ProductTable from "@/components/product/ProductTable";
import SummaryCard from "@/components/product/SummaryCard";
import { Button } from "@/components/ui/button";

import { Plus } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Product() {
  return (
    <div className="flex flex-col px-3 space-y-4">
      {/* header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-primary uppercase">
            Products Archive
          </h1>
          <p className="text-sm font-medium text-gray-500">
            Manage and curate your high-end inventory collections.
          </p>
        </div>
        {/* button */}
        <div>
          <Link to="/products/form">
            <Button className="bg-gray-200 text-gray-700 hover:bg-primary cursor-pointer hover:text-white p-4 text-[13px] rounded-xl">
              <Plus />
              Add Product
            </Button>
          </Link>
        </div>
      </div>
      {/* product table with pagination */}

      <ProductTable />
      {/* summary card of products */}
      <SummaryCard />
    </div>
  );
}
