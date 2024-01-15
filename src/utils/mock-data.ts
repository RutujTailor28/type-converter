import { Chat } from "../types/internal-types";

const generateMockData = (): Chat => {
  return {
    title: "Mock Chat",
    nodesList: [
      {
        firsName: "John",
        lastName: "Doe",
        age: 30,
        birthDate: "1992-01-01",
        shoppingItemsList: [
          {
            title: "Item 1",
            price: 20,
            currency: "USD",
            date: "2022-01-01",
          },
          {
            title: "Item 2",
            price: 30,
            currency: "EUR",
            date: "2022-02-01",
          },
        ],
      },
      // Add more nodes for testing
    ],
  };
};

export { generateMockData };
