import { useState } from "react";

import {
  createUserDocFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../../components/form-input/form-input.component";
import Button, { buttonTypeClasses } from "../../components/button/button.component";

import { SignUpContainer, Buttons } from "./sign-in-form.styles";

const defaultSignInFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignInForm() {
  const [signInformFields, setSignInFormFields] = useState(
    defaultSignInFormFields
  );

  const { email, password } = signInformFields;

  const resetSignInFormFields = () => {
    setSignInFormFields(defaultSignInFormFields);
  };


  const handleChange = (event) => {
    const { name, value } = event.target;

    setSignInFormFields({ ...signInformFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetSignInFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("No user associated with this email");
          break;
        case "auth/wrong-password":
          alert("Incorrect password!");
          break;
        default:
          console.log(error);
      }
    }
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    
  };

  return (
    <SignUpContainer>
      <h2>Already have an account?</h2>
      <span>Sign In with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="text"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <Buttons>
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={signInWithGoogle} buttonType={buttonTypeClasses.google}>
            Google Sign In
          </Button>
        </Buttons>
      </form>
    </SignUpContainer>
  );
}

export default SignInForm;
