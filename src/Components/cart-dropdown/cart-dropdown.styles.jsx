import styled from "styled-components";
import {
  InvertedButton,
  BaseButton,
  GoogleSignInButton,
} from "../Button-Compo/Button.styles";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 300px;
  height: 370px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  ${InvertedButton},${BaseButton},${GoogleSignInButton} {
    margin-top: auto;
  }
`;

export const EmptyCartMessage = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
