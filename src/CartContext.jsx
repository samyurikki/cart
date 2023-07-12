import { createContext, useEffect, useReducer } from "react";
import { useContext } from "react";
import { reducer } from "./reducer";
import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./actions";
import cartItems from "./data";
import { getTotals } from "./utils";

const AppContext = createContext();

export const useGlobalContext = () => useContext(AppContext);
const url = "https://www.course-api.com/react-useReducer-cart-project";

//const cart = new Map(cartItems.map((each) => [each.id, each]));

const defaultValues = { isLoading: true, cartItems: new Map() };

const AppProvider = ({ children }) => {
  const [state, dispatcher] = useReducer(reducer, defaultValues);
  const { returnAmount, totalCost } = getTotals(state.cartItems);
  const clearCart = () => {
    dispatcher({ type: CLEAR_CART });
  };
  const removeItem = (id) => {
    dispatcher({ type: REMOVE, payload: { id } });
  };

  const increaseItem = (id) => {
    dispatcher({ type: INCREASE, payload: { id } });
  };
  const decreaseItem = (id) => {
    dispatcher({ type: DECREASE, payload: { id } });
  };

  const fetchData = async () => {
    dispatcher({ type: LOADING });
    const res = await fetch(url);
    const data = await res.json();
    dispatcher({ type: DISPLAY_ITEMS, payload: { data } });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        cart: state.cartItems,
        clearCart,
        removeItem,
        increaseItem,
        decreaseItem,
        returnAmount,
        totalCost,
        isLoading: state.isLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
