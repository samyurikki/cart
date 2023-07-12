import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./actions";

export const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cartItems: new Map() };
  } else if (action.type === REMOVE) {
    const newItems = new Map(state.cartItems);

    newItems.delete(action.payload.id);

    return { ...state, cartItems: newItems };
  } else if (action.type === INCREASE) {
    const newList = new Map(state.cartItems);
    const item = newList.get(action.payload.id);
    newList.set(action.payload.id, { ...item, amount: item.amount + 1 });
    return { ...state, cartItems: newList };
  } else if (action.type === DECREASE) {
    const newList = new Map(state.cartItems);
    const itemid = action.payload.id;
    const item = newList.get(itemid);
    if (item.amount > 1) {
      const newItem = { ...item, amount: item.amount - 1 };
      newList.set(itemid, newItem);
      return { ...state, cartItems: newList };
    } else {
      newList.delete(itemid);
      return { ...state, cartItems: newList };
    }
  } else if (action.type === LOADING) {
    console.log("loading");
    return { ...state, isLoading: true };
  } else if (action.type === DISPLAY_ITEMS) {
    const newList = new Map(action.payload.data.map((item) => [item.id, item]));
    return { ...state, isLoading: false, cartItems: newList };
  }
  throw new Error(`N action type matching ${action.type}`);
};
