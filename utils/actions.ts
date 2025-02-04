import db from "@/utils/db";
import { cache } from "react";
import { redirect } from "next/navigation";

export const fetchFeaturedProducts = cache(async () => {
  const products = await db.product.findMany({
    where: {
      featured: true,
    },
  });
  return products;
});

export const fetchAllProcuts = async ({ search = "" }: { search: string }) => {
  const products = await db.product.findMany({
    where: {
      OR: [
        { name: { contains: search, mode: "insensitive" } },
        { name: { contains: search, mode: "insensitive" } },
      ],
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return products;
};

export const fetchSingleProduct = async ({ id }: { id: string }) => {
  const product = await db.product.findUnique({
    where: {
      id: id,
    },
  });
  if (!product) redirect("/products");
  return product;
};
