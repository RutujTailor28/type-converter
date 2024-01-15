export type Timestamp = {
  seconds: number;
  nanos: number;
};

export type ExtShopingItemType = {
  Title: string;
  Price: number;
  Currency: string;
  Date: Timestamp;
};

export interface IExtNodeElement {
  FirsName: string;
  LastName: string;
  Age: number;
  BirthDate: Timestamp;
  ShoppingItems: ExtShopingItemType[];
}

export type ExtChat = {
  Title: string;
  ChatItems: IExtNodeElement[];
};
