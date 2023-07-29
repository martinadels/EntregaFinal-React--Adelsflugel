import { useCartContext } from "../../context/CartContext";
import "./CartWidget.css";
import cart from "../../assets/cart.png";
import { useContext } from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(useCartContext);

  return (
    <div className="cart-widget">
      <Link to="/cart" className="cart-link" style={{ display: totalQuantity > 0 ? "block" : "none" }}>
        <img className="cart-icon" src={cart} alt="cart-widget" />
        <span className="cart-quantity">{totalQuantity}</span>
      </Link>
    </div>
  );
};

export default CartWidget;
