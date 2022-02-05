import './App.css';
import React from 'react';
import Homepage from './pages/home-page/homepage.comonent';
import ShopPages from './pages/shop-page/shop-page.jsx';
import CheckOutpage from './pages/check-out.page/check-outpage.component';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header-component/header-component.jsx';
// import { auth, createUserProfileDocument } from './firebase/firebase-util';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { checkuserPersist } from './redux/user/user-action';
import { selectCurrentUser } from './redux/user/user-selector';
import SignINandOUT from './pages/sign-in-signout-page/sign-in-and-out-page.jsx';
class App extends React.Component {
  unSubscribefromAuth = null;

  componentDidMount() {
  const {checkuserPersist}=this.props;
  checkuserPersist()
  }
  componentWillUnmount() {
    this.unSubscribefromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route path="/shop" component={ShopPages}></Route>
          <Route exact path="/checkout" component={CheckOutpage}></Route>
          <Route
            exact
            path="/sign-in"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignINandOUT />
            }
          ></Route>
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = dispatch => ({
  checkuserPersist: () => dispatch(checkuserPersist()),
});
export default connect(mapStateToProps,mapDispatchToProps)(App);
