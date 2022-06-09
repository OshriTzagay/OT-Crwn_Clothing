import Button,{BUTTON_TYPE_CLASSES} from "../../../Button-Compo/Button";
import FormInput from "../../../Form/form-input";
import { useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
  LoginInWithEmailAndPass,
} from "../../../../utils/Firebase/Firebase.util";
import "./SignInForm.styles.scss";

const user = {
  email: "",
  password: "",
};

export default function SignInForm() {
  //   useEffect(() => {
  //     async function createFromRedriect() {
  //       const result = await getRedirectResult(auth);
  //       if (result) {
  //         const userDocRef = await createUserDocFromAuth(result.user);
  //         console.log(userDocRef);
  //       }
  //     }
  // {
    /* < onClick={signInWithGoogleRedirect}>//!If you want to redirect the Option to LOGIN FROM REDIRECT --> fire the button and useEffect()
        Click TO Sign With Re-direct
      </button> */
  // }

  //     createFromRedriect();
  //   }, []);

  //!Login with Google Popup
  const LogInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocFromAuth(user);

    // console.log(userDocRef);
  };
  //!=========================================================

  //!Sign In With Email and Password
  const [userSignIn, setUserSignIn] = useState(user);
  const { email, password } = userSignIn;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserSignIn({ ...userSignIn, [name]: value });
  };

  const resetFields = () => {
    setUserSignIn(userSignIn);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!email || !password) {
        alert("Please fill all the fields");
        return;
      }
      const { user } = await LoginInWithEmailAndPass(email, password);
      console.log(user)

      resetFields();
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("User not found");
          break;

        case "auth/wrong-password":
          alert("Wrong Password for Email");
          break;

        default:
          console.log(error);
      }
    }
  };

  //!=========================================================

  return (
    <div className="sign-in-container">
      <h2>Already have an account ?</h2>

      <span>Sign in with your Email and Password </span>
      <form onSubmit={handleSubmit}>
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
        <div className="buttons-container">
          <Button type="submit">
            Sign In
          </Button>

          <Button
            ButtonType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={LogInWithGoogle}
          >
            {" "}
            Google Sign in
          </Button>
        </div>
      </form>
    </div>
  );
}
