import { Button } from "@/components/ui/button";
import Reveal from "@/components/ui/Reveal";
import { Download, Plus } from "lucide-react";
import React from "react";

export default function Orders() {
  return (
    <div className="px-4 mx-auto max-w-6xl pb-8">
      {/* header */}
      <Reveal>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-primary uppercase tracking-tight">
              Orders
            </h1>
            <p className="text-sm max-w-md font-medium text-gray-500 tracking-tight">
              Manage, track and curate institutional transaction data with
              mathematical precision and editorial clarity.
            </p>
          </div>
          <div className="flex gap-3">
            <Button className="rounded-xl w-30 font-semibold text-center h-8 text-gray-700 bg-gray-200 hover:text-white hover:bg-primary">
              <Download />
              Export Report
            </Button>
            <Button className="rounded-2xl w-38 h-8 font-semibold text-center text-gray-700 bg-gray-200 hover:text-white hover:bg-primary">
              <Plus />
              Create Manual Order
            </Button>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
