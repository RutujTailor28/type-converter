export type ShopingItemType = {
  title: string;
  price: number;
  currency: string;
  date: string;
};

export interface INodeElement {
  firsName: string;
  lastName: string;
  age: number;
  birthDate: string;
  shoppingItemsList?: ShopingItemType[];
}

export type Chat = {
  title: string;
  nodesList: INodeElement[];
};
