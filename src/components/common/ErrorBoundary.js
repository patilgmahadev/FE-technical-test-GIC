import React, { Component } from "react";
import { Grid } from "@material-ui/core";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <Grid>Something went wrong!</Grid>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
