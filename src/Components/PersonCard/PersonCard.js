import React, { Component } from "react";

import "./PersonCard.css";

export default class PersonCard extends Component {
  state = { flipped: false };

  setFlipTrue = (e) => {
    e.preventDefault();
    this.setState({ flipped: true });
  };
  setFlipFalse = (e) => {
    e.preventDefault();
    this.setState({ flipped: false });
  };

  render() {
    return (
      <div
        className={"col-md-4 col-lg-3 col-xs-6 flip-card"}
        onMouseEnter={(e) => this.setFlipTrue(e)}
        onMouseLeave={(e) => this.setFlipFalse(e)}
      >
        <div
          className={
            this.state.flipped ? "flip-card-inner flipped" : "flip-card-inner"
          }
        >
          <div className="flip-card-front ">
            <img src={this.props.img} alt="Avatar" className="avatar__image" />
          </div>
          <div
            className={
              "flip-card-back " +
              (this.props.index % 2 !== 0
                ? "bg__light__blue"
                : "bg__dark__blue")
            }
          >
            <h1
              className={
                "member__name " +
                (this.props.index % 2 !== 0
                  ? "text__color__blue"
                  : "text__color__orange")
              }
            >
              {this.props.name}
            </h1>
            <p
              className={
                "member__designation " +
                (this.props.index % 2 !== 0
                  ? "text__color__blue"
                  : "text__color__orange")
              }
            >
              {this.props.designation}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
