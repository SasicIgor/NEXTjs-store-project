"use server";
import db from "@/utils/db";
import { getAuthUser, renderError } from "./utilsActions";
import { reviewSchema, validateWithZodSchema } from "../schemas";
import { revalidatePath } from "next/cache";



export const createReviewAction = async (
  prevState: unknown,
  formData: FormData
) => {
  const user = await getAuthUser();
  try {
    const rawData = Object.fromEntries(formData);
    const validateFields = validateWithZodSchema(reviewSchema, rawData);
    await db.review.create({
      data: {
        ...validateFields,
        clerkId: user.id,
      },
    });
    revalidatePath(`/products/${validateFields.productId}`);
    return { message: "review submitted successfully" };
  } catch (error) {
    return renderError(error);
  }
};

export const fetchProductReviews = async (productId: string) => {
  const reviews = await db.review.findMany({
    where: {
      productId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return reviews;
};

export const fetchProductReviewsByUser = async () => {
  const user = await getAuthUser();
  const reviews = await db.review.findMany({
    where: {
      clerkId: user.id,
    },
    select: {
      id: true,
      rating: true,
      comment: true,
      product: {
        select: {
          image: true,
          name: true,
        },
      },
    },
  });
  return reviews;
};
export const deleteReviewAction = async (prevState: { reviewId: string }) => {
  const { reviewId } = prevState;
  const user = await getAuthUser();
  try {
    await db.review.delete({
      where: {
        id: reviewId,
        clerkId: user.id,
      },
    });
    revalidatePath("/reviews");
    return { message: "review deleted successfully" };
  } catch (error) {
    return renderError(error);
  }
};
export const findExistingReview = async (userId: string, productId: string) => {
  return db.review.findFirst({
    where: {
      clerkId: userId,
      productId,
    },
  });
};

export const fetchProductRating = async (productId: string) => {
    const result = await db.review.groupBy({
      by: ["productId"],
      _avg: {
        rating: true,
      },
      _count: {
        rating: true,
      },
      where: { productId },
    });
    return {
      rating: result[0]?._avg.rating?.toFixed(1) ?? 0,
      count: result[0]?._count.rating ?? 0,
    };
  };
  
