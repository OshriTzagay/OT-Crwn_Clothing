import React from "react";
import Button,{BUTTON_TYPE_CLASSES} from "../Button-Compo/Button";
import "./product-card.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";

export default function ProductCard({ product }) {
  const {name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);


  return (
    <div className="product-card-container">
      <img src={imageUrl} alt="product_IMG" />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}$</span>
      </div>
        <Button ButtonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add To Card</Button>
    </div>
  );
}
