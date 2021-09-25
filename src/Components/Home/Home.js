import "./Home.css";
import React from "react";
import iitlogo from "./assets/iit goa logo@1X.svg";
import iiclogo from "./assets/iiclogo.svg";
import NavBar from "../Navbar/Navbar";

class Home extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       showLoader: true,
  //     };
  //   }

  //   LoaderHandler = () => {
  //     this.setState({ showLoader: false });
  //   };

  render() {
    // let load = null;
    // setTimeout(this.LoaderHandler, 2000);
    // if (this.state.showLoader) {
    //   load = (
    //     <div class="loader">
    //       <div class="loaderiit ldr">
    //         <img src={iitlogo}></img>
    //       </div>
    //       <div class="loaderiic ldr">
    //         <img src={iiclogo}></img>
    //       </div>
    //     </div>
    //   );
    // }
    return (
      <div id="outer492002">
        {/* {load} */}
        <div id="iitlogo">
          <img src={iitlogo}></img>
        </div>
        <div id="iiclogo">
          <img src={iiclogo}></img>
        </div>
        <NavBar />
        <div id="otherthanLogo">
          <h2 class="heading492002 ig492002">IIT GOA</h2>
          <h3 class="heading492002 ic492002">Institute's Innovation Council</h3>

          <div className="motivesOuter">
            <div className="motivesWrapper">
              <div className="motives1 motives">
                <h4>Ideate</h4>
                <h5>
                  Create thought ideation and an environment to identify social
                  problems
                </h5>
              </div>
              <div className="motives2 motives">
                <h4>Initiate</h4>
                <h5>
                  Enable and empower to turn idea into a sustainable solution
                </h5>
              </div>
              <div className="motives3 motives">
                <h4>Create</h4>
                <h5>Build a product or a prototype</h5>
              </div>
            </div>
          </div>

          <div id="yellowStrip">
            <p>About Us</p>
          </div>
          <h6 class="text">
            IIC, IIT Goa aims to develop a culture of innovation by providing
            relevant education and solving real world problems and developing
            all faculty, students and all staff and support systems into future
            leaders and entrepreneurs. To develop a culture of
            “innovation-to-market” and empower all stakeholders to lead the
            entrepreneurial way.
          </h6>
        </div>
      </div>
    );
  }
}

export default Home;
