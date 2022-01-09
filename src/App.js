import './App.css';
import React from 'react';
import Homepage from './pages/home-page/homepage.comonent';
import ShopPages from './pages/shop-page/shop-page.jsx';
import CheckOutpage from './pages/check-out.page/check-outpage.component';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header-component/header-component.jsx';
import { auth } from './firebase/firebase-util';
import { createUserProfileDocument } from './firebase/firebase-util';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user-action';
import SignINandOUT from './pages/sign-in-signout-page/sign-in-and-out-page.jsx';
class App extends React.Component {
  unSubscribefromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unSubscribefromAuth = auth.onAuthStateChanged(async UserAuth => {
      if (UserAuth) {
        const userRef = await createUserProfileDocument(UserAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(UserAuth);
      }
    });
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
const mapStateToProps = state => ({
  currentUser: state.user.currentuser,
});
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
