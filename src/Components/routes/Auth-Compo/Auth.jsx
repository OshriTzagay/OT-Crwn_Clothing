import React, { useEffect, useState } from "react";
import SignUpForm from "./sign-up/SignUpForm";
import SignInForm from "./sign-in/SignIn-Form";
import "./Auth.styles.scss";
export default function Auth() {
  return (
    <div className="auth-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
}
