import './App.css';
import React from 'react';
import Homepage from './pages/home-page/homepage.comonent';
import ShopPages from './pages/shop-page/shop-page.jsx';
import SignINandOUT from './pages/sign-in-signout-page/sign-in-and-out-page';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/header-component/header-component.jsx';
import { auth } from './firebase/firebase-util';
import { createUserProfileDocument } from './firebase/firebase-util';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user-action';

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
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route exact path="/shop" element={<ShopPages />}></Route>

          <Route
            exact
            path="/sign-in"
            element={
              this.props.currentUser ? <Navigate to="/" /> : <SignINandOUT />
            }
          ></Route>
        </Routes>
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
