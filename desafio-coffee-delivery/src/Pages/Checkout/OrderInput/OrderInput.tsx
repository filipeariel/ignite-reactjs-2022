import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";

export function OrderInput() {
  return (
    <div>
      <span>Complete seu Pedido</span>
      <div>
        <div>
          <MapPinLine size={22} />
          <p>
            <strong>Endereço de Entrega</strong>
            <br />
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </p>
        </div>
        <form action="">
          <div>
            <input type="text" />
            <input type="text" />
            <div>
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </div>
            <div>
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </div>
          </div>
          <div>
            <div>
              <CurrencyDollar size={22} />
              <p>
                <strong>Pagamento</strong>
                <br />
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </p>
            </div>
            <div>
              <button type="button">
                <CreditCard size={22} />
                <span>Cartão de Crédito</span>
              </button>
              <button type="button">
                <Bank size={22} />
                <span>Cartão de Débito</span>
              </button>
              <button type="button">
                <Money size={22} />
                <span>Dinheiro</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
