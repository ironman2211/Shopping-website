import React from 'react';
import './log-in-component.scss';
import Button from '../Custom-button/custom-btn.jsx';
import InputForm from '../input-label/input-label.jsx';
import { signinWithGoogle } from '../../firebase/firebase-util.js';
class SignIN extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ email: '', password: '', name: '' });
  };
  handleChange = e => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h1>Create An Account</h1>

        <form onSubmit={this.handleSubmit}>
          <InputForm
            type="name"
            name="name"
            value={this.state.name}
            label="UserName"
            handleChange={this.handleChange}
            autocomplete="on"
          />
          <InputForm
            type="email"
            name="email"
            value={this.state.email}
            label="Email"
            handleChange={this.handleChange}
            autocomplete="on"
          />

          <InputForm
            type="password"
            name="password"
            value={this.state.password}
            label="Password"
            handleChange={this.handleChange}
            autocomplete="on"
          />
          <div className="buttons">
            <Button type="submit">Sign-in</Button>
            <Button type="submit" onClick={signinWithGoogle} issigninWithGoogle>
              {' '}
              SignIn with google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIN;
