'use client'
import { CartItemWithProduct } from "@/utils/types";
import { Card } from "../ui/card";
import { FirstColumn, FourthColumn, SecondColumn } from "./CartItemColumns";
import ThirdColumn from "./ThirdColumn";

const CartItemsList = ({ cartItems }: { cartItems: CartItemWithProduct[] }) => {
  return (
    <>
      {cartItems.map((cartItem) => {
        const { id, amount } = cartItem;
        const { image, name, company, price, id: productId } = cartItem.product;

        return (
          <Card
            key={id}
            className="flex flex-col gap-y-4 md:flex-row flex-wrap p-6 mb-8 gap-x-4"
          >
            <FirstColumn image={image} name={name} />
            <SecondColumn name={name} company={company} productId={productId} />
            <ThirdColumn id={id} quantity={amount} />
            <FourthColumn price={price} />
          </Card>
        );
      })}
    </>
  );
};

export default CartItemsList;
