import React from "react";
import './header-component.style.scss';
import {connect} from 'react-redux'
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from '../assets/logo.svg'
import {auth} from '../../firebase/firebase-util.js'
import CartIcon from '../cart-component/cart-component.jsx'
import Cartdropdown from '../cart-dropdown.components/cart-dropdown.component.jsx'

const Header=({currentuser,hidden})=>(
    <div className="header">
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className="options">
             <Link to='/shop' className='option'>SHOP</Link>
             <Link to='/' className='option'>CONTACT</Link> 
         
             {currentuser ? (
                 <div className="option" onClick={()=>{auth.signOut();console.log(currentuser)}}>SIGN OUT</div>):(<Link to='/sign-in' className="option">SIGN IN</Link>)
                 
                
             }
             <CartIcon/>
          
        </div>

        {
           hidden?'':  <Cartdropdown/>
        }
      
        
    </div>
)
    
const mapStateToProp=({user:{currentuser},cart:{hidden}})=>({
    currentuser,hidden
    
})

export default connect(mapStateToProp)(Header);