import React, { Component } from "react";
import ContactUsFooter from "../../Components/ContactUsFooter/ContactUsFooter";
import "./ContactUs.css";
import iiclogo from "./assets/iiclogo.svg";
import iitlogo from "./assets/iit goa logo@1X.svg";

import PersonCard from "../../Components/PersonCard/PersonCard";
import people from "./assets/people.js";
import NavBar from "../../Components/Navbar/Navbar";
import { Link } from "react-router-dom";

export default class ContactUs extends Component {
  state = { footer_visible: false };

  componentDidMount() {
    console.log(people);
  }
  render() {
    return (
      <div className="contact__us">
        <div className="navbar__div">
          <div className="navbar__left">
            <Link to="/">
              <img
                src={iitlogo}
                alt="IIT Goa"
                style={{
                  width: "5vw",
                  marginTop: "0.6vw",
                  marginLeft: "0.5vw",
                  marginRight: "0.8vw",
                }}
                className="iit__goa__logo"
              />
            </Link>

            <img
              src={iiclogo}
              alt="IIC"
              style={{ width: "10vw", marginTop: "0.6vw" }}
              className="iic__logo"
            />
          </div>
          <div className="navbar__center">
            <h1 className="navbar__title">Council</h1>
          </div>
          <div className="navbar__right"></div>
        </div>
        <NavBar />
        <div className="row main__council__window">
          {people.map((person, index) => {
            return (
              <PersonCard
                name={person.name}
                designation={person.designation}
                index={index}
                key={index}
                img={person.photo}
              />
            );
          })}
        </div>
        <ContactUsFooter />
      </div>
    );
  }
}
