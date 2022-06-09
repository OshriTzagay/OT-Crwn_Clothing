import "./cart-icon.styles.jsx";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";
import {
  CartIconContainer,
  ItemCounter,
  ShoppingIcon,
} from "./cart-icon.styles.jsx";

export default function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartCounter } = useContext(CartContext);
  const ToggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <CartIconContainer onClick={ToggleCart}>
      <ShoppingIcon />
      <ItemCounter>{cartCounter}</ItemCounter>
    </CartIconContainer>
  );
}
