import React, { Component } from "react";

class Avatar extends Component {
  state = {};
  render(props) {
    return (
      <div>
        <img className="circle-img" src={this.props.img} alt="avatar_img" />
      </div>
    );
  }
}

export default Avatar;
