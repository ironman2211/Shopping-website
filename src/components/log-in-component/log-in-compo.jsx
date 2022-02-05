import React from "react";
import "./log-in-component.scss";
import Button from "../Custom-button/custom-btn.jsx";
import InputForm from "../input-label/input-label.jsx";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user-action";
class SignIN extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      displayName: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const {signUpStart} =this.props;
    const { email, password, confirmPassword, displayName } = this.state;
    if (password !== confirmPassword) {
      alert("enter the same password");
      return;
    }
    signUpStart({email, password, displayName});
  };
  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h3>Dont have an account ?</h3>
        <h1>Create An Account</h1>

        <form onSubmit={this.handleSubmit}>
          <InputForm
            type="name"
            name="displayName"
            value={this.state.displayName}
            label="UserName"
            handleChange={this.handleChange}
          />
          <InputForm
            type="email"
            name="email"
            value={this.state.email}
            label="Email"
            handleChange={this.handleChange}
          />

          <InputForm
            type="password"
            name="password"
            value={this.state.password}
            label="Password"
            handleChange={this.handleChange}
          />
          <InputForm
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            label="Confirm password"
            handleChange={this.handleChange}
          />
          <div className="buttons">
            <Button type="submit">Sign-in</Button>
          </div>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  signUpStart: userCredential => dispatch(signUpStart(userCredential)),
});
export default connect(null, mapDispatchToProps)(SignIN);
