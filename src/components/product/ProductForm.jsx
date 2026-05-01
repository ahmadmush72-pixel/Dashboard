import React, { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { InputGroupInput } from "../ui/input-group";
import { Button } from "../ui/button";

export default function ProductForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [images, setImages] = useState([]);
  const [variants, setVariants] = useState([
    { size: "", color: "", stock: "" },
  ]);
  const addVariant = () =>
    setVariants([...variants, { size: "", color: "", stock: "" }]);
  const updateVariant = (i, key, val) =>
    setVariants((v) =>
      v.map((x, idx) => (idx === i ? { ...x, [key]: val } : x)),
    );
  const onFiles = (e) => setImages(Array.from(e.target.files || []));
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      await axios.post("/api/products", { name: "Demo Product" });
      setMessage("Product saved successfully");
    } catch (err) {
      setMessage("Failed to save product");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="p-4 bg-white max-w-6xl mx-auto space-y-6 border rounded-2xl border-primary/20 shadow-lg shadow-primary/10">
      <h1 className="font-bold text-2xl text-primary uppercase">
        Create Product
      </h1>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-3 gap-5">
          {/* Left Side */}
          <div className="md:col-span-2 space-y-6">
            {/* General */}
            <Card className="rounded-2xl border border-primary/20 shadow-lg shadow-primary/10">
              <CardContent className="p-4 space-y-3">
                <h2 className="text-[15px] text-primary font-semibold">
                  General
                </h2>

                <InputGroupInput
                  type="text"
                  placeholder="Product Name..."
                  className="border border-primary/20 p-3 rounded-2xl"
                />

                <InputGroupInput
                  type="text"
                  placeholder="SKU..."
                  className="border border-primary/20 p-3 rounded-2xl"
                />

                <Textarea
                  placeholder="Description..."
                  className="border border-primary/20 rounded-2xl"
                />

                <Input
                  type="number"
                  placeholder="Price"
                  className="border border-primary/20 rounded-2xl"
                />
              </CardContent>
            </Card>

            {/* Variants */}
            <Card className="rounded-2xl border border-primary/20 shadow-lg shadow-primary/10">
              <CardContent className="p-4 space-y-4">
                <h2 className="text-[15px] text-primary font-semibold">
                  Variants
                </h2>

                {variants.map((v, i) => (
                  <div key={i} className="grid grid-cols-3 gap-3">
                    <Input
                      placeholder="Size"
                      value={v.size}
                      onChange={(e) => updateVariant(i, "size", e.target.value)}
                      className="border border-primary/20 rounded-2xl"
                    />

                    <Input
                      placeholder="Color"
                      value={v.color}
                      onChange={(e) =>
                        updateVariant(i, "color", e.target.value)
                      }
                      className="border border-primary/20 rounded-2xl"
                    />

                    <Input
                      placeholder="Stock"
                      value={v.stock}
                      onChange={(e) =>
                        updateVariant(i, "stock", e.target.value)
                      }
                      className="border border-primary/20 rounded-2xl"
                    />
                  </div>
                ))}

                <Button
                  type="button"
                  onClick={addVariant}
                  className="bg-gray-100 text-gray-500 cursor-pointer hover:bg-primary hover:text-white rounded-xl px-4 py-2 border-primary/20"
                >
                  Add Variant
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Side */}
          <div className="space-y-6">
            {/* Inventory */}
            <Card className="rounded-2xl border border-primary/20 shadow-lg shadow-primary/10">
              <CardContent className="p-4 space-y-3">
                <h2 className="text-[15px] text-primary font-semibold">
                  Inventory
                </h2>

                <Input
                  type="number"
                  placeholder="Stock Quantity"
                  className="border border-primary/20 rounded-2xl"
                />
              </CardContent>
            </Card>

            {/* Images */}
            <Card className="rounded-2xl border border-primary/20 shadow-lg shadow-primary/10">
              <CardContent className="p-4 space-y-3">
                <h2 className="text-[15px] text-primary font-semibold">
                  Images
                </h2>

                <Input
                  type="file"
                  multiple
                  onChange={onFiles}
                  className="border border-primary/20 rounded-2xl"
                />

                <p className="text-xs text-muted-foreground">
                  {images.length} files selected
                </p>
              </CardContent>
            </Card>

            {/* Submit */}
            <Card className="rounded-2xl border border-primary/20 shadow-lg shadow-primary/10">
              <CardContent className="p-4">
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gray-100 text-gray-500 border border-primary/20 hover:bg-primary hover:text-white rounded-xl cursor-pointer"
                >
                  {loading ? "Saving..." : "Save Product"}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </div>
  );
}
