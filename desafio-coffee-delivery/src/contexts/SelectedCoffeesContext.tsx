import { createContext, ReactNode, useState } from "react";

interface SelectedCoffees {
  id: number;
  name: string;
  quantity: number;
  price: number;
  img: string;
}

interface SelectedCoffeesContextType {
  selectedCoffees: SelectedCoffees[] | undefined;
  ShopCoffee: (coffee: SelectedCoffees) => void;
}

export const SelectedCoffeesContext = createContext(
  {} as SelectedCoffeesContextType
);

interface SelectedCoffeesContextProviderPros {
  children: ReactNode;
}

export function SelectedCoffeesContextProvider({
  children,
}: SelectedCoffeesContextProviderPros) {
  const [selectedCoffees, setSelectesCoffees] = useState<SelectedCoffees[]>([]);

  function ShopCoffee(coffee: SelectedCoffees) {
    if (
      !selectedCoffees.find((selectedCoffee) => selectedCoffee.id === coffee.id)
    ) {
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

  return (
    <SelectedCoffeesContext.Provider
      value={{
        selectedCoffees,
        ShopCoffee,
      }}
    >
      {children}
    </SelectedCoffeesContext.Provider>
  );
}
