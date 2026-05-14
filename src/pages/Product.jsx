import React from "react";
import ProductTable from "@/components/product/ProductTable";
import SummaryCard from "@/components/product/SummaryCard";
import Reveal from "@/components/ui/Reveal";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

export default function Product() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-6 px-3 pb-8">
      <Reveal>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-primary uppercase tracking-tight">
              Products Archive
            </h1>
            <p className="text-sm text-gray-500 max-w-md ">
              Manage and curate your high-end inventory collections.
            </p>
          </div>
          <Link to="/products/form">
            <Button className="inline-flex items-center gap-2 rounded-2xl bg-gray-200 px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-primary hover:text-white">
              <Plus />
              Add Product
            </Button>
          </Link>
        </div>
      </Reveal>

      <Reveal>
        <ProductTable />
      </Reveal>

      <Reveal>
        <SummaryCard />
      </Reveal>
    </div>
  );
}
