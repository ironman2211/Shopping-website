import React from "react";
import {ErrorImageOverlay,ErrorImageContainer,ErrorImageText} from './error-boundary.styles'
class ErrorBoundry extends React.Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }
  render() {
    if (this.state.hasError) {
      return (
        <ErrorImageOverlay>
            <ErrorImageContainer imageUrl={"https://i.imgur.com/lKJiT77.png"}/>
            <ErrorImageText>A Dog Ate this Page</ErrorImageText>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundry;