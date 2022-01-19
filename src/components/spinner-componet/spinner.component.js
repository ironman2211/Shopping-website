import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './spinner.component.style';
const Withspinner = Wrappedcomponent => {
  const spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <Wrappedcomponent {...otherProps} />
    );
  };
  return spinner;
};
export default Withspinner;
