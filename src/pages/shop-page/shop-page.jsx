import React from 'react';
import Collectionsoverview from '../../components/collectionsoverview/collectionsoverview.js';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Components from '../collections.page/collection.components.js';
import Withspinner from '../../components/spinner-componet/spinner.component.js';

import {
  firestore,
  collectionSnapshotobjMap,
} from '../../firebase/firebase-util';
import { updateShopreducer } from '../../redux/shop/shop.action';
const CollectionsoverviewwithSpinner = Withspinner(Collectionsoverview);
const Componentswithspinner = Withspinner(Components);

class ShopPages extends React.Component {
  state = {
    loading: true,
  };
  unsSubscribefromSnapshot = null;

  componentDidMount() {
    const { updateShopReducer } = this.props;
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(snapshot => {
      const collectionMap = collectionSnapshotobjMap(snapshot);
      updateShopReducer(collectionMap);
      this.setState({ loading: false });
    });
  }
  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsoverviewwithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:Id`}
          render={props => (
            <Componentswithspinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  updateShopReducer: collectionMap =>
    dispatch(updateShopreducer(collectionMap)),
});
export default connect(null, mapDispatchToProps)(ShopPages);
