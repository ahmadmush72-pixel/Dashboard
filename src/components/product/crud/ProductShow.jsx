import Reveal from "@/components/ui/Reveal";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ProductShow() {
  const productVariants = [
    {
      size: "M",
      color: "Red",
      image: "https://via.placeholder.com/50",
      stock: 12,
      price: "$20",
    },
    {
      size: "L",
      color: "Blue",
      image: "https://via.placeholder.com/50",
      stock: 5,
      price: "$22",
    },
  ];

  return (
    <Reveal>
      <div className="px-4 max-w-6xl mx-auto space-y-6 p-4 ">
        <div>
          <h1 className="uppercase text-3xl tracking-tight font-bold text-primary">
            Product Detail
          </h1>
          <p className="text-sm font-medium text-gray-500">
            Detailed information about product variants
          </p>
        </div>

        <div className="rounded-2xl bg-white p-3 border border-primary/25 shadow-lg shadow-primary/10 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Size</TableHead>
                <TableHead>Color</TableHead>
                <TableHead>Image</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Price</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {productVariants.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.size}</TableCell>
                  <TableCell>{item.color}</TableCell>

                  <TableCell>
                    <img
                      src={item.image}
                      alt="product"
                      className="h-10 w-10 rounded-md object-cover"
                    />
                  </TableCell>

                  <TableCell>{item.stock}</TableCell>
                  <TableCell>{item.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </Reveal>
  );
}
