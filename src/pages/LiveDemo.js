import React from "react";
import { withRouter } from "react-router-dom";

class LiveDemoPage extends React.Component {
  componentDidMount() {
    if (
      this.props.location &&
      this.props.location.state &&
      this.props.location.state.url
    ) {
      const { url } = this.props.location.state;
      window.open(url, "_blank");
      this.props.history.goBack();
    }
  }
  render() {
    return <div>Redirecting...</div>;
  }
}

export default withRouter(LiveDemoPage);
