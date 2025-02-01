import db from "@/utils/db";

export const fetchFeaturedProducts = async () => {
  const products = await db.product.findMany({
    where: {
      featured: true,
    },
  });
  return products;
};

export const fetchAllProcuts = async()=>{
    const products = await db.product.findMany({
        orderBy:{
            createdAt:"desc"
        }
    })
    return products;
}