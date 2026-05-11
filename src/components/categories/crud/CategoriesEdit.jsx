import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function CategoryEdit() {
  // Existing category data
  const [formData, setFormData] = useState({
    name: "Luxury Footwear",
    slug: "luxury-footwear",
    description:
      "Premium footwear collection including sneakers, boots and formal shoes.",
    status: "Active",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Updated Category:", formData);

    // API call here
    // axios.put(`/api/categories/${id}`, formData)
  };

  return (
    <div className="p-5 max-w-6xl mx-auto bg-white rounded-3xl shadow-lg shadow-primary/10">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-primary">Edit Category</h1>

          <p className="text-sm text-gray-500 mt-1">
            Update your category information
          </p>
        </div>

        <div
          className="px-3 py-1 rounded-full text-xs font-medium
              bg-blue-100 text-blue-600"
        >
          Active
        </div>
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* CATEGORY NAME */}
        <div className="grid grid-cols-3 space-x-4">
          <div className="col-span-2">
            <Card className=" bg-white shadow-lg shadow-primary/10">
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-primary">
                    Category Name
                  </Label>

                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter category name"
                    className="h-11 rounded-xl border border-primary/10"
                  />
                </div>

                {/* SLUG */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-primary">
                    Slug
                  </Label>

                  <Input
                    type="text"
                    name="slug"
                    value={formData.slug}
                    onChange={handleChange}
                    placeholder="category-slug"
                    className="h-11 rounded-xl border border-primary/10"
                  />
                </div>

                {/* DESCRIPTION */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-primary">
                    Description
                  </Label>

                  <Textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Write category description..."
                    className="min-h-[120px] rounded-xl border border-primary/10"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className=" bg-white shadow-lg shadow-primary/10">
              <CardContent className="space-y-3">
                {/* IMAGE */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-primary">
                    Category Image
                  </Label>

                  <Input
                    type="file"
                    className="rounded-xl border border-primary/10 cursor-pointer"
                  />
                </div>

                {/* STATUS */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-primary">
                    Status
                  </Label>

                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full h-11 rounded-xl border border-primary/10"
                  >
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </div>

                {/* ACTION BUTTONS */}
                <div className="flex justify-end gap-3 pt-4">
                  <Button
                    type="submit"
                    className="rounded-2xl w-full bg-gray-200 font-semibold text-gray-700 hover:bg-primary hover:text-white cursor-pointer"
                  >
                    Update Category
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </div>
  );
}
