import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
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

export default function CategoryTable() {
  const categoriesData = [
    {
      id: 1,
      name: "Luxury Footwear",
      slug: "luxury-footwear",
      products_count: 1240,
    },
    {
      id: 2,
      name: "Timepieces",
      slug: "timepieces-heritage",
      products_count: 842,
    },
    {
      id: 3,
      name: "Leather Goods",
      slug: "leather-goods",
      products_count: 3105,
    },
    { id: 4, name: "Fine Jewelry", slug: "fine-jewelry", products_count: 512 },
    {
      id: 5,
      name: "Modern Decor",
      slug: "modern-decor-home",
      products_count: 2008,
    },
    {
      id: 6,
      name: "Smart Gadgets",
      slug: "smart-gadgets",
      products_count: 1560,
    },
  ];

  const [page, setPage] = useState(1);
  const itemsPerPage = 4;

  const total = categoriesData.length;
  const lastPage = Math.ceil(total / itemsPerPage);

  const paginatedData = categoriesData.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage,
  );

  // 🎨 Slug Color Generator
  const getSlugColor = (slug) => {
    if (slug.includes("footwear")) return "bg-blue-100 text-blue-600";
    if (slug.includes("time")) return "bg-purple-100 text-purple-600";
    if (slug.includes("leather")) return "bg-amber-100 text-amber-600";
    if (slug.includes("jewelry")) return "bg-pink-100 text-pink-600";
    if (slug.includes("decor")) return "bg-green-100 text-green-600";
    return "bg-gray-100 text-gray-600";
  };

  return (
    <Reveal>
      <div className="rounded-2xl shadow-lg shadow-primary/10 space-y-4 bg-white">
        {/* TABLE */}
        <Table className="rounded-2xl  overflow-hidden">
          <TableHeader>
            <TableRow>
              <TableHead>Category</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead>Products</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {paginatedData.map((cat) => (
              <TableRow key={cat.id} className="hover:bg-primary/15">
                {/* CATEGORY */}
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                      📦
                    </div>
                    <div>
                      <p className="font-medium">{cat.name}</p>
                      <p className="text-xs text-gray-500">
                        ID: CAT-{cat.id.toString().padStart(3, "0")}
                      </p>
                    </div>
                  </div>
                </TableCell>

                {/* SLUG (COLORED BADGE) */}
                <TableCell>
                  <span
                    className={`px-3 py-1 text-xs rounded-full font-medium ${getSlugColor(
                      cat.slug,
                    )}`}
                  >
                    {cat.slug}
                  </span>
                </TableCell>

                {/* PRODUCTS */}
                <TableCell className="font-medium">
                  {cat.products_count}
                </TableCell>

                {/* ACTIONS (COLORED) */}
                <TableCell className="text-right space-x-2">
                  {/* EDIT */}
                  <Link to="/categories/edit">
                    <Button
                      size="icon"
                      className="bg-blue-100 text-blue-600 cursor-pointer hover:bg-blue-200"
                    >
                      <Pencil className="w-4 h-4" />
                    </Button>
                  </Link>

                  {/* DELETE */}
                  <Button
                    size="icon"
                    className="bg-red-100 text-red-600 cursor-pointer hover:bg-red-200"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* FOOTER */}
        <div className="flex items-center justify-between bg-[#f4f3fb] rounded-2xl px-5 py-4">
          <p className="text-sm text-gray-500">
            Showing {(page - 1) * itemsPerPage + 1}–
            {Math.min(page * itemsPerPage, total)} of {total} categories
          </p>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="cursor-pointer"
            >
              <ChevronLeft />
            </Button>

            {Array.from({ length: lastPage }, (_, i) => i + 1).map((p) => (
              <Button
                key={p}
                size="sm"
                variant={p === page ? "default" : "outline"}
                className={p === page ? "bg-purple-600 text-white" : ""}
                onClick={() => setPage(p)}
              >
                {p}
              </Button>
            ))}

            <Button
              variant="outline"
              size="icon"
              disabled={page === lastPage}
              onClick={() => setPage(page + 1)}
              className="cursor-pointer"
            >
              <ChevronRight />
            </Button>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
