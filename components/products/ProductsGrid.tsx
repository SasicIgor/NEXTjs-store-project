import { Product } from "@prisma/client";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import FavoriteToggleButton from "./FavoriteToggleButton";
const ProductsGrid = ({ products }: { products: Product[] }) => {
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const { id, name, price, image } = product;
        return (
          <article key={id} className="group relative">
            <Link href={`/products/${id}`}>
              <Card className="transform group-hover:shadow-xl transition-shadow duration-500">
                <CardContent className="p-4">
                  <div className="relative h-64 md:h-48 rounded overflow-hidden">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                      priority
                      className="rounded w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h2 className="text-lg capitalize">{name}</h2>
                    <p className="text-muted-foreground mt-2">{`$${price}`}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <div className="absolute top-7 right-7">
              <FavoriteToggleButton productId={id} />
            </div>
          </article>
        );
      })}
    </div>
  );
  //   return (
  //     <div className="pt-12 grip gap-4 md:grid-cols-2 lg:grid-cols-3">
  //       <ul>
  //         {products.map((product) => {
  //           return <h2 key={product.id}>{product.name}</h2>;
  //         })}
  //       </ul>
  //     </div>
  //   );
};

export default ProductsGrid;
