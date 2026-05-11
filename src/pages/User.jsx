import React from "react";
import Reveal from "@/components/ui/Reveal";
import { Users, ShieldCheck } from "lucide-react";

export default function User() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-6 px-3 pb-8">
      <Reveal>
        <div className="space-y-3 rounded-3xl bg-white p-6 shadow-xl shadow-primary/10">
          <h1 className="text-3xl font-bold text-primary uppercase tracking-tight">
            Customers
          </h1>
          <p className="text-sm text-gray-500">
            Monitor user accounts, access status, and admin controls.
          </p>
        </div>
      </Reveal>

      <Reveal className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-3xl bg-white p-6 shadow-xl shadow-primary/10">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-primary/10 p-3 text-primary">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase text-gray-500">Active users</p>
              <p className="mt-2 text-3xl font-bold text-primary">1,248</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-xl shadow-primary/10">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-primary/10 p-3 text-primary">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase text-gray-500">
                Verified accounts
              </p>
              <p className="mt-2 text-3xl font-bold text-primary">924</p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
