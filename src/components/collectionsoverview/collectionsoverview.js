import './collectionsoverview.scss';
import React from 'react';

import CollectionComponent from '../../components/collection-preview-components/collection-components.jsx';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionforpreview } from '../../redux/shop/shop-selector';
const Collectionsoverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherSectionProps }) => (
        <CollectionComponent key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionforpreview,
});
export default connect(mapStateToProps)(Collectionsoverview);
