import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import Withspinner from "../../components/spinner-componet/spinner.component";
import { selectIsCollectionLoading } from "../../redux/shop/shop-selector";
import Components from "./collection.components";

const mapStateToProps = createStructuredSelector({
  isLoading:(state)=> !selectIsCollectionLoading(state)
});
const CollectionComponentsContainer = compose(
  connect(mapStateToProps),
  Withspinner
)(Components);
export default CollectionComponentsContainer;
