import { Cart } from "@prisma/client";
import { Separator } from "../ui/separator";
import { Card, CardTitle } from "../ui/card";
import FormContainer from "../form/FormContainer";
import { createOrderAction } from "@/utils/actions/orderActions";
import { SubmitButton } from "../form/Buttons";

const CartTotals = ({ cart }: { cart: Cart }) => {
  const { cartTotal, shipping, tax, orderTotal } = cart;

  return (
    <div>
      <Card className="p-8">
        <CartTotalRow label="Subtotal" amount={cartTotal} />
        <CartTotalRow label="Shipping" amount={shipping} />
        <CartTotalRow label="Tax" amount={tax} />
        <CardTitle className="mt-8">
          <CartTotalRow label="Order Total" amount={orderTotal} lastRow />
        </CardTitle>
      </Card>
      <FormContainer action={createOrderAction}>
        <SubmitButton text="Place order" className="w-full mt-8" />
      </FormContainer>
    </div>
  );
};

const CartTotalRow = ({
  label,
  amount,
  lastRow,
}: {
  label: string;
  amount: number;
  lastRow?: boolean;
}) => {
  return (
    <>
      <p className="flex justify-between text-sm">
        <span>{label}</span>
        <span>$ {amount}</span>
      </p>
      {lastRow ? null : <Separator className="my-2" />}
    </>
  );
};

export default CartTotals;
