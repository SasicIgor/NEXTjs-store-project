import Link from "next/link";
import { Button } from "../ui/button";
import { LuShoppingCart } from "react-icons/lu";

const CartButton = () => {
  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      className="flex justify-center items-center relative"
    >
      <Link href="/cart">
        <LuShoppingCart />
        <span className="absolute -top-3 -right-3 bg-primary text-primary-foreground rounded-full h-6 w-6 flex items-center justify-center text-xs">0</span>
      </Link>
    </Button>
  );
};

export default CartButton;
