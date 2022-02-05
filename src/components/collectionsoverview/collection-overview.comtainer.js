import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import Withspinner from "../../components/spinner-componet/spinner.component";
import { selectIsCollectionFetching } from "../../redux/shop/shop-selector";
import Collectionsoverview from "./collectionsoverview";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});
const CollectionsoverviewContainer = compose(
  connect(mapStateToProps),
  Withspinner
)(Collectionsoverview);
export default CollectionsoverviewContainer;
