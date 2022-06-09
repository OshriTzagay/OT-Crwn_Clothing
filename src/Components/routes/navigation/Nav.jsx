import React from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import {
  NavLink,
  NavLinks,
  NavContainer,
  LogoContainer,
} from "./navigation.styles";
import CartIcon from "../../cart-icon/cart-icon";
import CartDropDown from "../../cart-dropdown/cart-dropdown";
import { useContext } from "react";
import { UserContext } from "../../../contexts/user-context";
import { CartContext } from "../../../contexts/cart-context";
import { SignOutUser } from "../../../utils/Firebase/Firebase.util";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <NavContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink  to="/shop">Shop</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={SignOutUser}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to="/auth">Sign In</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropDown />}
      </NavContainer>

      <Outlet />
    </>
  );
};

export default Navigation;
