import React, { useState } from "react";
import "./sign-in-component.scss";
import Button from "../Custom-button/custom-btn.jsx";
import InputForm from "../input-label/input-label.jsx";
import { emailSigninStart } from "../../redux/user/user-action";
import { connect } from "react-redux";
import { googleSigninStart } from "../../redux/user/user-action";

const SignIN = ({ emailSignInStart, googleSignIn }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;
  const handleSubmit = async (e) => {
    e.preventDefault();

    emailSignInStart(email, password);
  };
  const handleChange = (e) => {
    const { value, name } = e.target;

    setUserCredentials({ ...userCredentials,[name]: value });
  };

  return (
    <div className="sign-in">
      <h1>Alredy Have An Account</h1>
      <span>signIn with your email and password</span>
      <form onSubmit={handleSubmit}>
        <InputForm
          type="email"
          name="email"
          value={email}
          label="Email"
          handleChange={handleChange}
        />

        <InputForm
          type="password"
          name="password"
          value={password}
          label="Password"
          handleChange={handleChange}
        />

        <div className="buttons">
          <Button type="submit">Log-in</Button>
          <Button type="button" onClick={googleSignIn} issigninWithGoogle>
            SignIn with google
          </Button>
        </div>
      </form>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  emailSignInStart: (email, password) =>
    dispatch(emailSigninStart({ email, password })),
  googleSignIn: () => dispatch(googleSigninStart()),
});

export default connect(null, mapDispatchToProps)(SignIN);
