import ProductContainer from "@/components/products/ProductContainer";

const ProductsPage =async({
  searchParams,
}: {
  searchParams: Promise<{ layout?: string; search?: string }>;
}) => {
  const resolvedParams=await searchParams;
 
  const layout=resolvedParams.layout || 'grid';
  const search=resolvedParams.search || '';
  return <ProductContainer layout={layout} search={search}/>
};

export default ProductsPage;