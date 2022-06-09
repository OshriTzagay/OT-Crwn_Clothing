import React from "react";
import { useState,useContext } from "react";
import "./SignUpForm.styles.scss";
import {
  CreateUserFunctionWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../../../utils/Firebase/Firebase.util";
import FormInput from "../../../Form/form-input";
import Button from "../../../Button-Compo/Button";



const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
export default function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  //!---------------->//Change the current value of the Inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
    // console.log(formFields);
  };
  //!---------------->
  //!---------------->
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  //!---------------->

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password and Confirm Password must match");
      return;
    }

    try {
      const { user } = await CreateUserFunctionWithEmailAndPassword(
        email,
        password
      ); //!
      await createUserDocFromAuth(user, { displayName }); //!Add displayName to the user beacuse it coming Null.
      resetFormFields();
    } catch (error) {
      if (error.code === `auth/email-already-in-use`) {
        //! if email already in use exception from FIREBASE :)
        alert("Cannot Create User Email Already In Use !");
      } else {
        console.log(error.message);
      }
    }
  };
  //!---------------->

  return (
    <div className="sign-up-container">
      <h2>Dont have an account ?</h2>
      <span>Sign Up With Your Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Name"
          type="text"
          required
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />
        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          value={email}
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          value={password}
          onChange={handleChange}
        />
        <FormInput
          label="Confirm Password"
          type="password"
          required
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
        <Button ButtonType="inverted" type="submit">
          Sign-Up{" "}
        </Button>
      </form>
    </div>
  );
}
