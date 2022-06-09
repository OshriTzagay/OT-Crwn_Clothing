import { useState, useContext,useEffect } from "react";
import "./check-out.styles.scss";
import { CartContext } from "../../contexts/cart-context";
import CheckOutItem from "./check-out-item";
export default function CheckOut() {
  const { cartItems, addItemToCart, removeItemFromCart, calculateTotal } =
    useContext(CartContext);

  const [cartTotal, setCartTotal] = useState(0);
  const CalculateCartHandler = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    setCartTotal(total);
  };

  useEffect(() => {
    CalculateCartHandler();
  }, [cartItems]);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>REMOVE</span>
        </div>
      </div>

      {cartItems.map((cartItem, key) => (
        <CheckOutItem key={key} cartItem={cartItem} />
      ))}

      <span className="total">Total :{cartTotal}$ </span>
    </div>
  );
}
