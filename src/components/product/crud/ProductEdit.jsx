import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/ui/Reveal";

export default function UpdateProduct() {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [variants, setVariants] = useState([
    { size: "", color: "", stock: "" },
  ]);

  const [form, setForm] = useState({
    name: "",
    sku: "",
    description: "",
    price: "",
  });

  // Fetch Product Data
  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const res = await axios.get("/api/products/1");

      setForm({
        name: res.data.name,
        sku: res.data.sku,
        description: res.data.description,
        price: res.data.price,
      });

      setVariants(res.data.variants || []);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const updateVariant = (i, key, value) => {
    const data = [...variants];
    data[i][key] = value;
    setVariants(data);
  };

  const addVariant = () => {
    setVariants([...variants, { size: "", color: "", stock: "" }]);
  };

  const onFiles = (e) => {
    setImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await axios.put("/api/products/1", {
        ...form,
        variants,
      });

      alert("Product Updated Successfully");
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <Reveal>
      <div className="p-4 bg-white max-w-6xl mx-auto space-y-6 rounded-3xl shadow-lg shadow-primary/10">
        <h1 className="font-bold text-2xl text-primary uppercase">
          Update Product
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-3 gap-5">
            {/* Left */}
            <div className="md:col-span-2 space-y-6">
              {/* General */}
              <Card className="rounded-2xl bg-white  shadow-lg shadow-primary/10 ">
                <CardContent className="p-4 space-y-3">
                  <h2 className="text-[15px] text-primary font-semibold">
                    General
                  </h2>

                  <Input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Product Name"
                    className="border-primary/10 rounded-2xl"
                  />

                  <Input
                    name="sku"
                    value={form.sku}
                    onChange={handleChange}
                    placeholder="SKU"
                    className="border-primary/10 rounded-2xl"
                  />

                  <Textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Description"
                    className="border-primary/10 border rounded-2xl"
                  />

                  <Input
                    type="number"
                    name="price"
                    value={form.price}
                    onChange={handleChange}
                    placeholder="Price"
                    className="border-primary/10 rounded-2xl"
                  />
                </CardContent>
              </Card>

              {/* Variants */}
              <Card className="rounded-2xl  bg-white shadow-lg shadow-primary/10">
                <CardContent className="p-4 space-y-4">
                  <h2 className="text-[15px] text-primary font-semibold">
                    Variants
                  </h2>

                  {variants.map((v, i) => (
                    <div key={i} className="grid grid-cols-3 gap-3">
                      <Input
                        placeholder="Size"
                        value={v.size}
                        onChange={(e) =>
                          updateVariant(i, "size", e.target.value)
                        }
                        className="border-primary/10 rounded-2xl"
                      />

                      <Input
                        placeholder="Color"
                        value={v.color}
                        onChange={(e) =>
                          updateVariant(i, "color", e.target.value)
                        }
                        className="border-primary/10 rounded-2xl"
                      />

                      <Input
                        placeholder="Stock"
                        value={v.stock}
                        onChange={(e) =>
                          updateVariant(i, "stock", e.target.value)
                        }
                        className="border-primary/10 rounded-2xl"
                      />
                    </div>
                  ))}

                  <Button
                    type="button"
                    onClick={addVariant}
                    className=" bg-gray-100 text-gray-600 
                  border border-primary/10 hover:bg-primary hover:text-white rounded-xl cursor-pointer"
                  >
                    Add Variant
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Right */}
            <div className="space-y-6">
              {/* inventory stock */}
              <Card className="rounded-2xl  bg-white  shadow-lg shadow-primary/10">
                <CardContent className="p-4 space-y-3">
                  <h2 className="text-[15px] text-primary font-semibold">
                    Inventory
                  </h2>

                  <Input
                    type="number"
                    placeholder="Stock Quantity"
                    className="border border-primary/10 rounded-2xl"
                  />
                </CardContent>
              </Card>
              {/* Images */}
              <Card className="rounded-2xl  bg-white shadow-lg shadow-primary/10">
                <CardContent className="p-4 space-y-3">
                  <h2 className="text-[15px] text-primary font-semibold">
                    Images
                  </h2>

                  <Input type="file" multiple onChange={onFiles} />

                  <p className="text-xs text-muted-foreground">
                    {images.length} files selected
                  </p>
                </CardContent>
              </Card>

              {/* Submit */}
              <Card className="rounded-2xl   bg-white shadow-lg shadow-primary/10">
                <CardContent className="p-4">
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gray-100  text-gray-700 font-semibold
                  hover:bg-primary hover:text-white rounded-xl cursor-pointer"
                  >
                    {loading ? "Updating..." : "Update Product"}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </Reveal>
  );
}
