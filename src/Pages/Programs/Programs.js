import React, { useState, useEffect } from "react";
import "./Programs.css";
import NavBar from "../../Components/Navbar/Navbar";
import iitlogo from "../../Components/Home/assets/iitgoalogo.svg";
import iiclogo from "../../Components/Home/assets/iiclogo.svg";
import ideaFunnel from "../../Components/vectors/ideaFunnel2.svg";
import igniteIcon from "../../Components/vectors/mic2.svg";
import aeiEPicon from "../../Components/vectors/leadership2.svg";
import startuplabs from "../../Components/vectors/startuplab2.svg";
import nextBlue from "./right_blue.png";
import prevBlue from "./left_blue.png";
import nextOrange from "./right_orange.png";
import prevOrange from "./left_orange.png";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

function Programs() {
  const [isIdeaFunnelShown, setIsideaFunnelShown] = useState(false);
  const [isIgniteShown, setIsigniteShown] = useState(false);
  const [isAeiEPShown, setIsaeiEPShown] = useState(false);
  const [isStartupLabShown, setIsstartupLabShown] = useState(false);

  const [activeIndex, setActiveIndex] = useState(0);
  const mediaMatch = window.matchMedia("(max-width: 720px)");
  const [mobile, setMobile] = useState(mediaMatch.matches);

  useEffect(() => {
    const handler = (e) => setMobile(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  });
  const handleIdeaFunnel = () => {
    setIsideaFunnelShown(!isIdeaFunnelShown);
  };

  const handleIgnite = () => {
    setIsigniteShown(!isIgniteShown);
  };

  const handleAeiEP = () => {
    setIsaeiEPShown(!isAeiEPShown);
  };

  const handleStartupLabs = () => {
    setIsstartupLabShown(!isStartupLabShown);
  };

  const handleIncubation = () => {
    if (
      isIdeaFunnelShown == true ||
      isIgniteShown == true ||
      isAeiEPShown == true ||
      isStartupLabShown == true
    ) {
      return true;
    }
    return false;
  };
  const handleActiveIndex = (index) => {
    setActiveIndex(index);
  };

  const Card1Block = () => {
    return (
      <div className="card_1_block">
        <div
          className="idea_funnel card_block"
          style={{ backgroundColor: "var(--light-blue)" }}
        >
          <img
            src={ideaFunnel}
            alt="Idea Funnel"
            onClick={handleIdeaFunnel}
            width="70%"
            height="70%"
            id="card_img"
          />

          <p style={{ color: "var(--dark-blue)" }} id="info_card_title">
            Idea Funnel
          </p>
        </div>
      </div>
    );
  };
  const Card1Shown = () => {
    return (
      <div className="card_1_shown">
        <div
          className="idea_funnel"
          style={{ backgroundColor: "var(--light-blue)" }}
        >
          <img
            src={ideaFunnel}
            alt="Idea Funnel"
            onClick={handleIdeaFunnel}
            width="40%"
            height="40%"
            className="imgs"
          />

          <p style={{ color: "var(--dark-blue)" }} id="info_card_title_shown">
            Idea Funnel
          </p>

          <div className="info_card_content">
            <p
              style={{ color: "var(--dark-blue)" }}
              id="info_card_content_text_1"
            >
              Idea Funnel is a continuous tool for idea scouting, validation and
              facilitation. In order to encourage students to bring forward
              executable ideas, IIC has set up an online idea consolidation
              mechanism, details of which are attached.
            </p>
            <p
              style={{ color: "var(--dark-blue)" }}
              id="info_card_content_text_1"
            >
              Please read the attached IDEA Funnel for details.(Appendix A1).
            </p>
            <p
              style={{ color: "var(--dark-blue)" }}
              id="info_card_content_text_1"
            >
              
              Link for the application is:
              <a href="https://forms.gle/BeZuxVrnXFQXd9nB9" target="_blank">
                <p id="form-link">https://forms.gle/BeZuxVrnXFQXd9nB9</p>
              </a>
              ( All question details in the appendix)
            </p>
          </div>
        </div>
      </div>
    );
  };
  const Card1 = () => {
    return isIdeaFunnelShown ? <Card1Shown /> : <Card1Block />;
  };

  const Card2Block = () => {
    return (
      <div className="card_2_block">
        <div className="ignite" style={{ backgroundColor: "var(--dark-blue)" }}>
          <img
            src={igniteIcon}
            alt="Ignite"
            onClick={handleIgnite}
            width="70%"
            height="70%"
            id="card_img"
          />

          <p style={{ color: "var(--orange)" }} id="info_card_title">
            Ignite PoC Grant
          </p>
        </div>
      </div>
    );
  };

  const Card2Shown = () => {
    return (
      <div className="card_2_shown">
        <div className="ignite" style={{ backgroundColor: "var(--dark-blue)" }}>
          <img
            src={igniteIcon}
            alt="Ignite"
            onClick={handleIgnite}
            width="40%"
            height="40%"
            className="imgs"
          />

          <p style={{ color: "var(--orange)" }} id="info_card_title_shown">
            Ignite PoC Grant
          </p>

          <div className="info_card_content">
            <p style={{ color: "var(--orange)" }} id="info_card_content_text_2">
              POC Grant was developed to enable entrepreneurial spirit and
              develop a culture of innovation. Interested students work on their
              idea proposal with faculty and teams to develop a prototype.
            </p>
            <p style={{ color: "var(--orange)" }} id="info_card_content_text_2">
              please read the attached IGNITE document. (Appendix A2).
            </p>
          </div>
        </div>
      </div>
    );
  };

  const Card2 = () => {
    return isIgniteShown ? <Card2Shown /> : <Card2Block />;
  };

  const Card3Block = () => {
    return (
      <div className="card_3_block">
        <div className="aeIEP" style={{ backgroundColor: "var(--light-blue)" }}>
          <img
            src={aeiEPicon}
            alt="aeIEP"
            onClick={handleAeiEP}
            width="70%"
            height="70%"
            id="card_img"
          />

          <p style={{ color: "var(--dark-blue)" }} id="info_card_title">
            AeIEP
          </p>
        </div>
      </div>
    );
  };

  const Card3Shown = () => {
    return (
      <div className="card_3_shown">
        <div className="aeIEP" style={{ backgroundColor: "var(--light-blue)" }}>
          <img
            src={aeiEPicon}
            alt="aeIEP"
            onClick={handleAeiEP}
            width="40%"
            height="40%"
            className="imgs"
            id="card_img"
          />

          <p style={{ color: "var(--dark-blue)" }} id="info_card_title_shown">
            AeiEP
          </p>

          <div className="info_card_content">
            <p
              style={{ color: "var(--dark-blue)" }}
              id="info_card_content_text_3"
            >
              This program aims to provide skills required for entrepreneurs
              through courses, internships and similar programs in collaboration
              with academic units within IIT Goa and external organisations.
              AeIEP aims to generate better theoretical understanding of various
              aspects related to innovation, enterpreneurship, design thinking
              and creating successful and sustainable businesses.
            </p>
          </div>
        </div>
      </div>
    );
  };

  const Card3 = () => {
    return isAeiEPShown ? <Card3Shown /> : <Card3Block />;
  };

  const Card4Block = () => {
    return (
      <div className="card_4_block">
        <div
          className="startuplabs"
          style={{ backgroundColor: "var(--dark-blue)" }}
        >
          <img
            src={startuplabs}
            alt="startuplabs"
            onClick={handleStartupLabs}
            width="70%"
            height="70%"
            id="card_img"
          />

          <p style={{ color: "var(--orange)" }} id="info_card_title">
            Startup Labs
          </p>
        </div>
      </div>
    );
  };
  const Card4Shown = () => {
    return (
      <div className="card_4_shown">
        <div
          className="startuplabs"
          style={{ backgroundColor: "var(--dark-blue)" }}
        >
          <img
            src={startuplabs}
            alt="startuplabs"
            onClick={handleStartupLabs}
            width="40%"
            height="40%"
            className="imgs"
            id="card_img"
          />

          <p style={{ color: "var(--orange)" }} id="info_card_title_shown">
            Startup Labs
          </p>

          <div className="info_card_content">
            <p style={{ color: "var(--orange)" }} id="info_card_content_text_4">
              A start-up Lab is a program created as a "Hub" for venture
              creation. Startup Labs offers a structured, guided, and blended
              program that takes a student who has a business model and/or an
              MVP from the stage of a Potential Real Venture to a Real Venture.
              Eligible students identified through the idea funnel & ignite
              grant program will get access to the startup lab facilities.
            </p>
            <p style={{ color: "var(--orange)" }} id="info_card_content_text_4">
              The program is designed to have fixed weekly goals over an 8-12
              week period with the objective for facilitate learning and
              success.
            </p>
          </div>
        </div>
      </div>
    );
  };

  const Card4 = () => {
    return isStartupLabShown ? <Card4Shown /> : <Card4Block />;
  };
  return (
    <div className="Program">
      <div
        className="navbar"
        style={{
          display: "flex",
          flexDirection: "row",
          height: mobile ? "10vh" : "15vh",
        }}
      >
        <div className="logos" style={{ flex: "1" }}>
          <Link to="/">
            <img
              src={iitlogo}
              alt="iit logo"
              style={{
                width: "5vw",
                marginTop: "0vw",
                marginLeft: "1.5vw",
                marginRight: "0.8vw",
              }}
              className="iit-logo"
            />
          </Link>
          <img
            src={iiclogo}
            alt="iic logo"
            style={{ width: "10vw", marginTop: "0vw" }}
            className="iic-logo"
          />
        </div>
        <div className="heading" style={{ flex: "1", textAlign: "center" }}>
          <h1
            style={{ color: "var(--orange)", fontFamily: " Montserrat" }}
            className="program-text"
          >
            Programs
          </h1>
        </div>
        <div className="menu" style={{ flex: "1" }}>
          <NavBar />
        </div>
      </div>

      <p
        className="pre-incubation"
        style={{
          transition: "transform 100ms",
          transform:
            handleIncubation() == true && !mobile ? "translateY(-6vh)" : "",
        }}
      >
        Pre-Incubation Support
      </p>

      <div className="content_1">
        <div
          className="accessible"
          style={{
            transition: "transform 100ms",
            transform: isIdeaFunnelShown ? "translateY(-10vh)" : "",
          }}
        >
          <p
            style={{ color: "var(--dark-blue)", textAlign: "right" }}
            id="heading_text"
          >
            Accessible
          </p>
          <p
            style={{ color: "var(--orange)", textAlign: "right" }}
            id="content_text"
          >
            All graduate and undergraduate students can participate
          </p>
        </div>
        <div
          className="educational"
          style={{
            transition: "transform 100ms",
            transform: isIgniteShown ? "translateY(-10vh)" : "",
          }}
        >
          <p
            style={{
              color: "var(--orange)",
              textAlign: "center",
              fontFamily: "Domine",
            }}
            id="heading_text"
          >
            Educational
          </p>
          <p
            style={{ color: "var(--dark-blue)", textAlign: "center" }}
            id="content_text"
          >
            Designed to fit within the academic experience, the programs help
            students pursue entrepreneurial ideas along with classwork
          </p>
        </div>
        <div
          className="personalized"
          style={{
            transition: "transform 100ms",
            transform: isAeiEPShown ? "translateY(-10vh)" : "",
          }}
        >
          <p
            style={{ color: "var(--darl-blue)", textAlign: "center" }}
            id="heading_text"
          >
            Personalized
          </p>
          <p
            style={{ color: "var(--orange)", textAlign: "center" }}
            id="content_text"
          >
            Student teams are matched with mentors and given personalized
            attention that best support them in moving their ideas forward
          </p>
        </div>
        <div
          className="practical"
          style={{
            transition: "transform 100ms",
            transform: isStartupLabShown ? "translateY(-10vh)" : "",
          }}
        >
          <p
            style={{ color: "var(--orange)", textAlign: "left" }}
            id="heading_text"
          >
            Practical
          </p>
          <p
            style={{ color: "var(--dark-blue)", textAlign: "left" }}
            id="content_text"
          >
            {" "}
            Students learn by doing and gain real world experience in moving
            their ideas forward from concept to creation
          </p>
        </div>
      </div>

      <div className="content_2">
        <div className="accessible">
          <p style={{ color: "var(--dark-blue)" }} id="heading_text">
            Accessible
          </p>
          <p style={{ color: "var(--orange)" }} id="content_text">
            All graduate and undergraduate students can participate
          </p>
        </div>
        <div className="educational">
          <p style={{ color: "var(--orange)" }} id="heading_text">
            Educational
          </p>
          <p style={{ color: "var(--dark-blue)" }} id="content_text">
            Designed to fit within the academic experience, the programs help
            students pursue entrepreneurial ideas along with classwork
          </p>
        </div>
        <div className="personalized">
          <p style={{ color: "var(--darl-blue)" }} id="heading_text">
            Personalized
          </p>
          <p style={{ color: "var(--orange)" }} id="content_text">
            Student teams are matched with mentors and given personalized
            attention that best support them in moving their ideas forward
          </p>
        </div>
        <div className="practical">
          <p style={{ color: "var(--orange)" }} id="heading_text">
            Practical
          </p>
          <p style={{ color: "var(--dark-blue)" }} id="content_text">
            {" "}
            Students learn by doing and gain real world experience in moving
            their ideas forward from concept to creation
          </p>
        </div>
      </div>

      {!mobile && (
        <div className="card_content">
          <Card1 />
          <Card2 />
          <Card3 />
          <Card4 />
        </div>
      )}
      <div className="tab-card-content">
        <Carousel
          onSelect={handleActiveIndex}
          activeIndex={activeIndex}
          interval={null}
          controls={true}
          indicators={false}
          wrap={false}
          nextIcon={
            <img
              src={activeIndex == 0 || activeIndex == 2 ? nextBlue : nextOrange}
            />
          }
          prevIcon={
            <img
              src={activeIndex == 1 || activeIndex == 3 ? prevOrange : prevBlue}
            />
          }
          prevLabel={""}
          nextLabel={""}
        >
          <Carousel.Item>
            <div style={{ display: "flex", alignItems: "flex-end" }}>
              <Card1 />
              <Card2 />
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div style={{ display: "flex", alignItems: "flex-end" }}>
              <Card3 />
              <Card4 />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      {mobile && (
        <div
          className="mobile-card-content"
          style={{
            display: "flex",
            flexGrow: "1",
            justifyContent: "center",
            border: "none",
            bottom: "0px",
            width: "100vw",
          }}
        >
          <Carousel
            onSelect={handleActiveIndex}
            activeIndex={activeIndex}
            interval={null}
            controls={true}
            indicators={false}
            wrap={false}
            nextIcon={
              <img
                src={
                  activeIndex == 0 || activeIndex == 2 ? nextBlue : nextOrange
                }
              />
            }
            prevIcon={
              <img
                src={
                  activeIndex == 1 || activeIndex == 3 ? prevOrange : prevBlue
                }
              />
            }
            prevLabel={""}
            nextLabel={""}
          >
            <Carousel.Item>
              <Card1 />
            </Carousel.Item>
            <Carousel.Item>
              <Card2 />
            </Carousel.Item>
            <Carousel.Item>
              <Card3 />
            </Carousel.Item>
            <Carousel.Item>
              <Card4 />
            </Carousel.Item>
          </Carousel>
        </div>
      )}
    </div>
  );
}

export default Programs;
