import { INodeElement, ShopingItemType, Chat } from "../types/internal-types";

import {
  ExtChat,
  IExtNodeElement,
  ExtShopingItemType,
  Timestamp,
} from "../types/external-types";

/**
 * Converts internal data (Chat) to external data (ExtChat).
 * @param internalData Internal data in the Chat format.
 * @returns External data in the ExtChat format.
 */
const convertInternalToExternal = (internalData: Chat): ExtChat => {
  const externalData: ExtChat = {
    Title: internalData.title,
    ChatItems: internalData.nodesList.map((internalNode) =>
      convertNode(internalNode)
    ),
  };
  return externalData;
};

/**
 * Converts internal node data (INodeElement) to external node data (IExtNodeElement).
 * @param internalNode Internal node data in the INodeElement format.
 * @returns External node data in the IExtNodeElement format.
 */

const convertNode = (internalNode: INodeElement): IExtNodeElement => {
  return {
    FirsName: internalNode.firsName,
    LastName: internalNode.lastName,
    Age: internalNode.age,
    BirthDate: convertTimestamp(internalNode.birthDate),
    ShoppingItems: internalNode.shoppingItemsList
      ? internalNode.shoppingItemsList.map(convertShopingItem)
      : [],
  };
};

/**
 * Converts internal shopping item data (ShopingItemType) to external shopping item data (ExtShopingItemType).
 * @param internalItem Internal shopping item data in the ShopingItemType format.
 * @returns External shopping item data in the ExtShopingItemType format.
 */
const convertShopingItem = (
  internalItem: ShopingItemType
): ExtShopingItemType => {
  return {
    Title: internalItem.title,
    Price: internalItem.price,
    Currency: internalItem.currency,
    Date: convertTimestamp(internalItem.date),
  };
};

/**
 * Converts a date string to a Timestamp object.
 * @param dateString Date string in the format 'YYYY-MM-DD'.
 * @returns Timestamp object.
 */
const convertTimestamp = (dateString: string): Timestamp => {
  return {
    seconds: new Date(dateString).getTime() / 1000,
    nanos: 0,
  };
};

export { convertInternalToExternal };
