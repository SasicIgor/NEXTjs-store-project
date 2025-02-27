import { fetchProductRating } from "@/utils/actions/reviewActions";
import { FaStar } from "react-icons/fa";

const ProductRating = async ({ productId }: { productId: string }) => {
  const { count, rating } = await fetchProductRating(productId);
  const countValue = `(${count}) reviews`;

  return (
    <span className="flex gap-1 items-center text-md mt-1 mb-4">
      <FaStar className="w-3 h-3" />
      {rating} {countValue}
    </span>
  );
};

export default ProductRating;
