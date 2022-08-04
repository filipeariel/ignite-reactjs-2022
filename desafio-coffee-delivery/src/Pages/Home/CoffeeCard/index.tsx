import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { CoffeeCardContainer, CoffeesContainer } from "./styles";
import { useState } from "react";
import { coffeeTypes } from "../../../data/coffees";

interface SelectedCoffees {
  id: number;
  name: string;
  quantity: number;
  price: number;
  img: string;
}

export function CoffeeCard() {
  const [coffees, setCoffees] = useState(coffeeTypes);
  const [selectedCoffees, setSelectesCoffees] = useState<SelectedCoffees[]>([]);

  function handleShopCoffee(coffee: SelectedCoffees) {
    if (!selectedCoffees.find((o) => o.id === coffee.id)) {
      setSelectesCoffees([...selectedCoffees, coffee]);
    } else {
      setSelectesCoffees(
        selectedCoffees.map((selectedCoffee) => {
          if (selectedCoffee.id === coffee.id)
            return {
              ...selectedCoffee,
              quantity: selectedCoffee.quantity + coffee.quantity,
            };
          return selectedCoffee;
        })
      );
    }
  }

  console.log(selectedCoffees);

  console.log(coffees);

  function handleIncreaseCoffeeQuantity(coffeeId: Number) {
    setCoffees((state) =>
      state.map((coffee) => {
        if (coffee.id === coffeeId)
          return {
            ...coffee,
            quantity: coffee.quantity + 1,
          };
        return coffee;
      })
    );
  }

  function handleDecreaseCoffeeQuantity(coffeeId: Number) {
    setCoffees(
      coffees.map((coffee) => {
        if (coffee.id === coffeeId && coffee.quantity > 1)
          return {
            ...coffee,
            quantity: coffee.quantity - 1,
          };
        return coffee;
      })
    );
  }

  return (
    <CoffeesContainer>
      {coffees.map((coffee) => {
        return (
          <div key={coffee.id}>
            <CoffeeCardContainer>
              <img src={coffee.img} alt={coffee.name} />
              <div>
                {coffee.tags.map((tag) => {
                  return (
                    <>
                      <span key={tag}>{tag}</span>
                    </>
                  );
                })}
              </div>
              <h2>{coffee.name}</h2>
              <p>{coffee.description}</p>
              <div>
                <span>
                  R$ <strong>9,90</strong>
                </span>
                <div>
                  <button>
                    <Minus
                      size={14}
                      weight="fill"
                      onClick={() => handleDecreaseCoffeeQuantity(coffee.id)}
                    />
                  </button>
                  <input type="number" readOnly value={coffee.quantity} />
                  <button>
                    <Plus
                      size={14}
                      weight="fill"
                      onClick={() => handleIncreaseCoffeeQuantity(coffee.id)}
                    />
                  </button>
                </div>
                <button>
                  <ShoppingCart
                    size={22}
                    weight="fill"
                    onClick={() => handleShopCoffee(coffee)}
                  />
                </button>
              </div>
            </CoffeeCardContainer>
          </div>
        );
      })}
    </CoffeesContainer>
  );
}
