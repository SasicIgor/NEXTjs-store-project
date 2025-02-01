import { fetchFeaturedProducts } from "@/utils/actions";
import EmptyList from "@/components/global/EmptyList";
import SectionTitle from "@/components/global/SectionTitle";
import ProductsGrid from "@/components/products/ProductsGrid";

const FeaturedProducts = async () => {
  const products = await fetchFeaturedProducts();
  if (!products.length) return <EmptyList />;
  return (
    <section>
      <SectionTitle text="featured products" />
      <ProductsGrid products={products} />
    </section>
  );
};

export default FeaturedProducts;
