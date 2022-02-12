import React, { useState } from "react";
import "./log-in-component.scss";
import Button from "../Custom-button/custom-btn.jsx";
import InputForm from "../input-label/input-label.jsx";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user-action";
const SignIN = ({ signUpStart }) => {
  const [userCredential, setUserCredential] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    displayName: "",
  });
  const { email, password, confirmPassword, displayName } = userCredential
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("enter the same password");
      return;
    }
    signUpStart({ email, password, displayName });
  };
  const handleChange = (e) => {
    const { value, name } = e.target;

    setUserCredential({ ...userCredential, [name]: value });
  };

  return (
    <div className="sign-in">
      <h3>Dont have an account ?</h3>
      <h1>Create An Account</h1>

      <form onSubmit={handleSubmit}>
        <InputForm
          type="name"
          name="displayName"
          value={displayName}
          label="UserName"
          handleChange={handleChange}
        />
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
        <InputForm
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          label="Confirm password"
          handleChange={handleChange}
        />
        <div className="buttons">
          <Button type="submit">Sign-in</Button>
        </div>
      </form>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredential) => dispatch(signUpStart(userCredential)),
});
export default connect(null, mapDispatchToProps)(SignIN);
