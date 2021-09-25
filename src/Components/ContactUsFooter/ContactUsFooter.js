import React, { Component } from "react";
import "./ContactUsFooter.css";
import down_arrow from "./assets/down_arrow.svg";
import up_arrow from "./assets/up_arrow.svg";
import twitter_icon from "./assets/twitter.svg";
import insta__icon from "./assets/instagram.svg";
import linkedin_icon from "./assets/linkedin.svg";

export default class ContactUsFooter extends Component {
  constructor(props) {
    super(props);
    this.state = { windowWidth: window.innerWidth, footer_open: false };
  }

  handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.addEventListener("resize", this.handleResize);
  }
  toggle_footer = () => {
    this.setState({ footer_open: !this.state.footer_open });
    console.log(this.state.windowWidth);
  };
  render() {
    return (
      <div
        className={
          "contact__us__footer " +
          (this.state.footer_open ? "footer__open" : "footer__closed")
        }
      >
        <div className="footer__arrow__div">
          <img
            onClick={this.toggle_footer}
            src={this.state.footer_open ? down_arrow : up_arrow}
            className="arrow__img"
          />
        </div>
        {this.state.windowWidth > 578 ? (
          <div className="row contact__us_info__div">
            <div className="footer__left col-sm-6 col-xs-12">
              <div className="icons__div">
                <a href="https://twitter.com/iiciitgoa">
                  <img
                    src={twitter_icon}
                    className="footer__icon"
                    alt="twitter"
                  />
                </a>
                <a href="https://www.instagram.com/ecell_iitgoa/">
                  <img src={insta__icon} className="footer__icon" alt="email" />
                </a>
                <a href="">
                  <img
                    src={linkedin_icon}
                    className="footer__icon"
                    alt="linkedin"
                  />
                </a>
              </div>
              <p className="left__column__text">
                <a
                  className="left__column__text_1"
                  href="mailto:iic@iitgoa.ac.in"
                >
                  Contact Us
                </a>
              </p>
            </div>
            <div className="footer__right col-sm-6 col-xs-12">
              <p className="right__column__text">
                Indian Institute of Technology
              </p>
              <p className="right__column__text">Goa</p>
              <p className="right__column__text">GEC Campus</p>
              <p className="right__column__text">Veling</p>
              <p className="right__column__text">Ponda, Goa 403401</p>
            </div>
          </div>
        ) : (
          <div className="footer__info__div__mobile">
            <div className="icons__div_mobile">
              <a href="https://twitter.com/iiciitgoa">
                <img
                  src={twitter_icon}
                  className="footer__icon_mobile"
                  alt="twitter"
                />
              </a>
              <a href="https://www.instagram.com/ecell_iitgoa/">
                <img
                  src={insta__icon}
                  className="footer__icon_mobile"
                  alt="email"
                />
              </a>
              <a href="">
                <img
                  src={linkedin_icon}
                  className="footer__icon_mobile"
                  alt="linkedin"
                />
              </a>
            </div>
            <p className="contact__us__mobile__text">
              <a
                className="contact__us__mobile__text_1"
                href="mailto:iic@iitgoa.ac.in"
              >
                Contact Us
              </a>
            </p>
            <div className="iit__goa__text">
              <p className="right__column__text__mobile">
                Indian Institute of Technology Goa
              </p>
              <p className="right__column__text__mobile">GEC Campus</p>
              <p className="right__column__text__mobile">Veling</p>
              <p className="right__column__text__mobile">Ponda, Goa 403401</p>
            </div>
          </div>
        )}
        {this.state.windowWidth > 578 ? (
          <div className="footer__copyright__div">
            <p className="footer__copyright__text">
              Copyright @ ArchiTechs2021
            </p>
          </div>
        ) : (
          <div className="footer__copyright__div">
            <p className="footer__copyright__text__mobile">
              Copyright @ ArchiTechs2021
            </p>
          </div>
        )}
      </div>
    );
  }
}
