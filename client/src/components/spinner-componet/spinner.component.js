import React from "react";
import Spinner from "../spinner/spinner.component";
const Withspinner =
  (Wrappedcomponent) =>
  ({ isLoading, ...otherProps }) => {
    return isLoading ? <Spinner /> : <Wrappedcomponent {...otherProps} />;
  };
export default Withspinner;
