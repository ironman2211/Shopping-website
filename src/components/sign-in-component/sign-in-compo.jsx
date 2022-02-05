import React from 'react';
import './sign-in-component.scss';
import Button from '../Custom-button/custom-btn.jsx';
import InputForm from '../input-label/input-label.jsx';
import {emailSigninStart} from '../../redux/user/user-action'
import {connect} from 'react-redux'
import {googleSigninStart} from '../../redux/user/user-action';

class SignIN extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit =async  e => {
    e.preventDefault();
    const {emailSignInStart} =this.props;
    const { email, password }=this.state;
    emailSignInStart(email,password)
    
  };
  handleChange = e => {
    const { value, name } = e.target;
 
    this.setState({ [name]: value });
  };

  render() {
    const {googleSignIn} =this.props;
    return (
      <div className="sign-in">
        <h1>Alredy Have An Account</h1>
        <span>signIn with your email and password</span>
        <form onSubmit={this.handleSubmit}>
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
           
          <div className="buttons">
            <Button type="submit">Log-in</Button>
            <Button type="button" onClick={googleSignIn} issigninWithGoogle>
           
           SignIn with google
         </Button>
          </div>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps=dispatch=>({
  emailSignInStart:(email,password)=>dispatch(emailSigninStart({email,password})),
  googleSignIn:()=>dispatch(googleSigninStart())
})

export default connect(null,mapDispatchToProps)(SignIN);
