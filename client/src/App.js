import "./App.css";
import React, { lazy, Suspense } from "react";
import Spinner from "./components/spinner/spinner.component";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/header-component/header-component.jsx";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { checkuserPersist } from "./redux/user/user-action";
import { selectCurrentUser } from "./redux/user/user-selector";
import ErrorBoundry from "./components/error-handeling/error-boundry.comoponent";
const Homepage = lazy(() => import("./pages/home-page/homepage.comonent"));
const ShopPages = lazy(() => import("./pages/shop-page/shop-page.jsx"));
const CheckOutpage = lazy(() =>
  import("./pages/check-out.page/check-outpage.component")
);
const SignINandOUT = lazy(() =>
  import("./pages/sign-in-signout-page/sign-in-and-out-page.jsx")
);
class App extends React.Component {
  unSubscribefromAuth = null;

  componentDidMount() {
    const { checkuserPersist } = this.props;
    checkuserPersist();
  }
  componentWillUnmount() {
    this.unSubscribefromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <ErrorBoundry>
            <Suspense fallback={<Spinner />}>
              <Route exact path="/" component={Homepage} />
              <Route path="/shop" component={ShopPages} />
              <Route exact path="/checkout" component={CheckOutpage} />
              <Route
                exact
                path="/sign-in"
                render={() =>
                  this.props.currentUser ? (
                    <Redirect to="/" />
                  ) : (
                    <SignINandOUT />
                  )
                }
              />
            </Suspense>
          </ErrorBoundry>
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  checkuserPersist: () => dispatch(checkuserPersist()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
