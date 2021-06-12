import React, { Component } from "react";

class Info extends Component {
  state = {};
  render(props) {
    return (
      <div>
        <p className="info">{this.props.tel}</p>
        <p className="info">{this.props.email}</p>
      </div>
    );
  }
}

export default Info;
