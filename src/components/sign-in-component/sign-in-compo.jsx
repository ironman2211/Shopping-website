import React from'react';
import './sign-in-component.scss'
import Button from '../Custom-button/custom-btn.jsx'
import InputForm from '../input-label/input-label.jsx'
import {signinWithGoogle} from '../../firebase/firebase-util.js'
class SignIN extends React.Component {

constructor(props){
    super(props);
    this.state={
        email:'',
        password: '',
    }
}


handleSubmit=e=>{
    e.preventDefault();

    this.setState({email:"",password:""})

}
handleChange=e=>{
    const {value,name}=e.target;

    this.setState({[name]:value});
}

render(){

    return(
        <div className="sign-in">
            <h1>Alredy Have An Account</h1>
            <span>signIn with your email and password</span>
            <form onSubmit={this.handleSubmit}>
                <InputForm type="email" name="email" value={this.state.email} label="Email" handleChange={this.handleChange}/>
               
                <InputForm type="password" name="password" value={this.state.password} label="Password" handleChange={this.handleChange}/>
                <div className="buttons">
                <Button  type="submit" >Sign-in</Button>
                <Button  type="submit"  onClick={signinWithGoogle} issigninWithGoogle>
                    {' '}
                    SignIn with google</Button>
         
                </div>
            </form>
        </div>
    )
}





}
export default SignIN;