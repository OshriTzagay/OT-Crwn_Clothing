import React from "react";
import {
  GoogleSignInButton,
  BaseButton,
  InvertedButton,
} from "./Button.styles";

export const BUTTON_TYPE_CLASSES ={
  base: 'base',
  google:'google-sign-in',
  inverted: 'inverted'

}

const getButton = (ButtonType = BUTTON_TYPE_CLASSES.base) => (
  {
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,

  }[ButtonType]
);
// const BUTTON_TYPE_CLASSES = {
//   google: "google-sign-in",
//   inverted: "inverted",
// };

export default function Button({ children, ButtonType, ...otherProps }) {
  const CustomButton = getButton(ButtonType);

  return (
    <CustomButton
      // className={`button-container ${BUTTON_TYPE_CLASSES[ButtonType]}`}
      {...otherProps}
    >
      {children}
    </CustomButton>
  );
}
