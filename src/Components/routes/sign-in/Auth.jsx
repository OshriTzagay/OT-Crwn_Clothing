import React, { useEffect, useState } from "react";
import SignUpForm from "../sign-up/SignUpForm";
import { getRedirectResult } from "firebase/auth";
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
  signInWithGoogleRedirect,
  auth,
} from "../../../../utils/Firebase/Firebase.util";
import FormInput from "../../../Form/form-input";
import Button from "../../../Button-Compo/Button";

const user = {
  email: "",
  password: "",
};

export default function SignIn() {
  //   useEffect(() => {
  //     async function createFromRedriect() {
  //       const result = await getRedirectResult(auth);
  //       if (result) {
  //         const userDocRef = await createUserDocFromAuth(result.user);
  //         console.log(userDocRef);
  //       }
  //     }
  {
    /* < onClick={signInWithGoogleRedirect}>//!If you want to redirect the Option to LOGIN FROM REDIRECT --> fire the button and useEffect()
        Click TO Sign With Re-direct
      </button> */
  }

  //     createFromRedriect();
  //   }, []);
  const [userSignIn, setUserSignIn] = useState(user);
  const { email, password } = userSignIn;

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setUserSignIn({ ...userSignIn, [name]: value });
    console.log(userSignIn);
  };
  //!Login with Google Popup
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = createUserDocFromAuth(user);
    console.log(userDocRef);
  };
  const Login = async()=>{

  }
  return (
    <div>
        <form>
      <FormInput
        label="Email"
        type="email"
        required
        name="email"
        value={email}
        onChange={HandleChange}
      />

      <FormInput
        label="Password"
        type="password"
        required
        name="password"
        value={password}
        onChange={HandleChange}
      />
        <Button ButtonType="invert"> Sign In With Email and Password</Button>
            
        </form>
<br />

        <Button ButtonType="google" onClick={logGoogleUser}> Sign In With Google</Button>
      <SignUpForm />
    </div>
  );
}
