import React, { Component } from "react";
import Avatar from "./Avatar";
import Info from "./Info";

class Card extends Component {
  state = {};
  render(props) {
    return (
      <div className="card">
        <div className="top">
          <h2 className="name">{this.props.name}</h2>
          <Avatar img={this.props.img} />
        </div>
        <div className="bottom">
          <Info tel={this.props.tel} email={this.props.email} />
        </div>
      </div>
    );
  }
}

export default Card;
