import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";
import Button, { BUTTON_TYPE_CLASSES } from "../Button-Compo/Button";
import "./cart-dropdown.styles.jsx";
import { CartContext } from "../../contexts/cart-context";
import CartItem from "../cart-item/cartItem";
import { CartDropdownContainer, CartItems, EmptyCartMessage } from "./cart-dropdown.styles.jsx";

export default function CartDropDown() {
  const { cartItems, addItemToCart } = useContext(CartContext);

  const navigate = useNavigate();

  const NavigateToCheckOut = () => {
    navigate("/checkout");
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <EmptyCartMessage>Your cart is empty</EmptyCartMessage>
        )}
      </CartItems>
      <Button
        ButtonType={BUTTON_TYPE_CLASSES.base}
        onClick={NavigateToCheckOut}
      >
        Go to checkout
      </Button>
    </CartDropdownContainer>
  );
}
