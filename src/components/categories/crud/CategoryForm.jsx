import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Reveal from "@/components/ui/Reveal";

import React from "react";

export default function CategoryForm() {
  return (
    <Reveal>
      <div className="p-4 max-w-6xl  shadow-lg shadow-primary/10 bg-white mx-auto rounded-3xl">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold text-primary">Create Category</h1>

          <p className="text-sm font-medium text-gray-500">
            Add a new category to your inventory system
          </p>
        </div>
        {/* HEADER */}

        {/* FORM */}
        <form className="space-y-5">
          {/* CATEGORY NAME */}
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2 space-y-5">
              <Card className=" bg-white shadow-lg shadow-primary/10">
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-primary">
                      Category Name
                    </Label>

                    <Input
                      type="text"
                      placeholder="Enter category name"
                      className=" rounded-xl h-11 border-primary/10"
                    />
                  </div>

                  {/* SLUG */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-primary">
                      Slug
                    </Label>

                    <Input
                      type="text"
                      placeholder="category-slug"
                      className="h-11 rounded-xl border-primary/10"
                    />
                  </div>

                  {/* DESCRIPTION */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-primary">
                      Description
                    </Label>

                    <Textarea
                      placeholder="Write category description..."
                      className="min-h-30 border border-input bg-background px-3 text-sm rounded-xl border-primary/10"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* IMAGE */}
            <div className="col-span-1">
              <Card className=" bg-white shadow-lg shadow-primary/10 ">
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-primary">
                      Category Image
                    </Label>

                    <Input
                      type="file"
                      className="rounded-xl h-9 cursor-pointer border-primary/10"
                    />
                  </div>

                  {/* STATUS */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-primary">
                      Status
                    </Label>

                    <select
                      className="w-full h-9 rounded-xl border border-input 
                bg-background px-3 text-sm border-primary/10"
                    >
                      <option>Active</option>
                      <option>Inactive</option>
                    </select>
                  </div>

                  {/* BUTTONS */}
                  <div>
                    <Button
                      type="submit"
                      className="rounded-2xl w-full font-semibold bg-gray-200 text-gray-700 hover:bg-primary hover:text-white cursor-pointer"
                    >
                      Create Category
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </Reveal>
  );
}
