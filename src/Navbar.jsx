import { FaCartPlus } from "react-icons/fa";
import { useGlobalContext } from "./CartContext";
const Navbar = () => {
  const { returnAmount } = useGlobalContext();
  return (
    <nav>
      <div className="nav-center">
        <h4>useReducer</h4>
        <div className="nav-container">
          <FaCartPlus className="cart-icon" />
          <div className="amount-container">
            <p className="total-amount">{returnAmount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
