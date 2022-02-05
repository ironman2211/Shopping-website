import React from 'react';
import CollectionsoverviewContainer from '../../components/collectionsoverview/collection-overview.comtainer'
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionComponentsContainer from '../collections.page/collection.page.container';


import {fetchCollectionStart} from '../../redux/shop/shop.action'



class ShopPages extends React.Component {
  

  componentDidMount() {
   const {fetchCollectionStart} =this.props;
   fetchCollectionStart()
  }
  render() {
    const { match } = this.props;
   
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
        component={CollectionsoverviewContainer}
        />
        <Route
          path={`${match.path}/:Id`}
         component={CollectionComponentsContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({

  fetchCollectionStart: ()=>dispatch(fetchCollectionStart())
});
export default connect(null, mapDispatchToProps)(ShopPages);
