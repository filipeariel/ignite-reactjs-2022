import { OrderInput } from "./OrderInput/OrderInput";
import { CheckoutContainer } from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <OrderInput />
    </CheckoutContainer>
  );
}
