import React from 'react';
import Styled from 'styled-components';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  // componentDidCatch(error, errorInfo) {
  //   // You can also log the error to an error reporting service
  //   logErrorToMyService(error, errorInfo);
  // }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <BoundaryWrapper>
          <p>
            Something wnet wrong. Kindly refresh this page and try again later.
          </p>
        </BoundaryWrapper>
      );
    }

    return this.props.children;
  }
}

const BoundaryWrapper = Styled.div`
  width: 90%;
  height: 100vh;
  margin: auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 480px;
`;
