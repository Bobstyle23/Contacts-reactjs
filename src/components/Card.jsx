import React, { Component } from "react";

class Card extends Component {
  state = {};
  render(props) {
    return (
      <div className="card">
        <div className="top">
          <h2 className="name">{this.props.name}</h2>
          <img className="circle-img" src={this.props.img} alt="avatar_img" />
        </div>
        <div className="bottom">
          <p className="info">{this.props.tel}</p>
          <p className="info">{this.props.email}</p>
        </div>
      </div>
    );
  }
}

export default Card;
