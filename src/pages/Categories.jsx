import React from "react";
import { Link } from "react-router-dom";
import CategoriesTable from "@/components/categories/CategoriesTable";
import CategoryInsights from "@/components/categories/CategoryInsights";
import Reveal from "@/components/ui/Reveal";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function Categories() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-6 px-3 pb-8">
      <Reveal>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-primary uppercase tracking-tight">
              Categories archive
            </h1>
            <p className="text-sm font-medium text-gray-500">
              Manage and organize your product taxonomy
            </p>
          </div>
          <Link to="/categories/form">
            <Button className="inline-flex items-center gap-2 rounded-2xl bg-gray-200 px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-primary hover:text-white">
              <Plus /> Create Category
            </Button>
          </Link>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[2fr_1fr]">
        <Reveal>
          <div className="rounded-3xl border border-primary/10 bg-white p-5 shadow-xl shadow-primary/10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h1 className="text-primary font-bold">Active Taxonomy</h1>
              <div className="flex flex-wrap gap-3">
                <Button className="rounded-2xl bg-gray-100 px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-primary hover:text-white">
                  Export <span className="uppercase">csv</span>
                </Button>
                <Button className="rounded-2xl bg-gray-100 px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-primary hover:text-white">
                  Bulk Action
                </Button>
              </div>
            </div>
            <div className="mt-5">
              <CategoriesTable />
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="space-y-6">
            <CategoryInsights />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
