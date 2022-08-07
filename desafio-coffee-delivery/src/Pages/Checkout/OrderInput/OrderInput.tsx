import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { FormContainer, OrderInputContainer, PaymentContainer } from "./styles";
import React, {
  ChangeEvent,
  ReactHTML,
  ReactHTMLElement,
  useState,
} from "react";

const customerInformationFormValidationSchema = zod.object({
  cep: zod.string().min(1, "Informe o CEP"),
  number: zod.string().min(1, "Informe o número"),
  city: zod.string().min(1, "Informe a cidade"),
  complement: zod.string().optional(),
  street: zod.string().min(1, "Informe a rua"),
  neighborhood: zod.string().min(1, "Informe o bairro"),
  uf: zod.string().min(1, "Informe a UF"),
});

type CustomerInformationFormData = zod.infer<
  typeof customerInformationFormValidationSchema
>;

export function OrderInput() {
  const [formData, setFormData] = useState<CustomerInformationFormData>();
  const [paymentMethod, setPaymentMethod] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CustomerInformationFormData>({
    resolver: zodResolver(customerInformationFormValidationSchema),
    defaultValues: {},
  });

  function handleCustomerInformation(data: CustomerInformationFormData) {
    setFormData(data);
  }

  function handlePaymentMethod(event: any) {
    const { name } = event.target;

    setPaymentMethod(name);
    console.log(paymentMethod);
  }

  return (
    <OrderInputContainer>
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
        <FormContainer
          id="customer-information-input"
          onSubmit={handleSubmit(handleCustomerInformation)}
          action=""
        >
          <div className="cep">
            <div>
              <input
                type="number"
                id="cep"
                placeholder="CEP"
                maxLength={8}
                {...register("cep")}
              />
            </div>
            <span>Informe o CEP</span>
          </div>

          <div className="street">
            <div>
              <input
                type="text"
                id="street"
                placeholder="Rua"
                {...register("street")}
              />
            </div>
            <span>Informe a rua</span>
          </div>
          <div className="number">
            <div>
              <input
                type="number"
                id="number"
                placeholder="Número"
                {...register("number")}
              />
            </div>
            <span>Informe o número</span>
          </div>
          <div className="complement">
            <div>
              <input
                type="text"
                id="complement"
                placeholder="Complemento"
                {...register("complement")}
              />
            </div>
            <p>Opcional</p>
          </div>
          <div className="neighborhood">
            <div>
              <input
                type="text"
                id="neighborhood"
                placeholder="Bairro"
                {...register("neighborhood")}
              />
            </div>
            <span>Informe o bairro</span>
          </div>
          <div className="city">
            <div>
              <input
                type="text"
                id="city"
                placeholder="Cidade"
                {...register("city")}
              />
            </div>
            <span>Informe a cidade</span>
          </div>
          <div className="uf">
            <div>
              <input type="text" id="uf" placeholder="UF" {...register("uf")} />
            </div>
            <span>Informe a UF</span>
          </div>
        </FormContainer>
      </div>
      <PaymentContainer>
        <div>
          <CurrencyDollar size={22} />
          <p>
            <strong>Pagamento</strong>
            <br />
            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </p>
        </div>
        <div>
          <button
            className={`${
              paymentMethod === "Cartão de Crédito" ? "selected" : ""
            }`}
            name="Cartão de Crédito"
            type="button"
            onClick={handlePaymentMethod}
          >
            <CreditCard size={22} />
            Cartão de Crédito
          </button>
          <button
            className={`${
              paymentMethod === "Cartão de Débito" ? "selected" : ""
            }`}
            type="button"
            name="Cartão de Débito"
            onClick={handlePaymentMethod}
          >
            <Bank size={22} />
            Cartão de Débito
          </button>
          <button
            className={`${paymentMethod === "Dinheiro" ? "selected" : ""}`}
            type="submit"
            form="customer-information-input"
            name="Dinheiro"
            onClick={handlePaymentMethod}
          >
            <Money size={22} />
            Dinheiro
          </button>
        </div>
        <h1>
          {paymentMethod}, {formData?.city}
        </h1>
      </PaymentContainer>
    </OrderInputContainer>
  );
}
