import { fetchAllProcuts } from "@/utils/actions";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { LuLayoutGrid, LuList } from "react-icons/lu";
import Link from "next/link";

const ProductContainer = async ({
  layout,
  search,
}: {
  layout: string;
  search: string;
}) => {
  const products = await fetchAllProcuts({search});
  const totalProducts = products.length;
  const searchTerm = search ? `&search=${search}` : "";
  return (
    <>
      <section>
        <div className="flex justify-between items-center">
          <h4 className="font-medium text-lg">
            {`${totalProducts} product${totalProducts > 1 ? "s":''}`}
          </h4>
          <div className="flex gap-x-4">
            <Button
              variant={layout === "grid" ? "default" : "ghost"}
              size="icon"
              asChild
            >
              <Link href={`/products?layout=grid${searchTerm}`}>
                <LuLayoutGrid />
              </Link>
            </Button>
            <Button
              variant={layout === "list" ? "default" : "ghost"}
              size="icon"
              asChild
            >
              <Link href={`/products?layout=list${searchTerm}`}>
                <LuList/>
              </Link>
            </Button>
          </div>
        </div>

        <Separator className="mt-4" />
      </section>
      {!products.length && (
        <h4 className="text-2xl mt-16">
          Sorry, no products matched your search...
        </h4>
      )}
      {layout === "grid" ? (
        <ProductsGrid products={products} />
      ) : (
        <ProductsList products={products} />
      )}
    </>
  );
};

export default ProductContainer;
