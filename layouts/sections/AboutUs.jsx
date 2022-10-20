import React from "react";
import CountUp, { startAnimation } from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const AboutUs = () => {
  return (
    <section className=" section-why p-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 col-md-4">
            <h1 className="py-1">About us</h1>
            <p className="py-1">
              Sed perspicias unde omnis iste natus error voluptatem accusantium
              dolorem laudanme totam rem aperiam eaque quae.
            </p>
            <a
              href=""
              className="btn btn-2 btn-outline-light my-outline-button rounded-pill w-100"
            >
              About us
            </a>
          </div>
          <div className="col-sm-12 col-xs-12 col-md-8">
            <div className="container">
              <div className="row">
                {" "}
                <div className="col-md-6 counter-container">
                  <div className="counter-item">
                    <div className="number">
                      <h2>
                        <CountUp className="countup" end={70} />
                      </h2>
                    </div>
                    <div className="text">
                      <h2 className="plus">+</h2>
                      <h2>Clients</h2>
                    </div>
                  </div>
                </div>{" "}
                <div className="col-md-6 counter-container">
                  <div className="counter-item">
                    <div className="number">
                      <h2>
                        <CountUp className="countup" end={35} />
                      </h2>
                    </div>
                    <div className="text">
                      <h2 className="plus">+</h2>
                      <h2>Clients</h2>
                    </div>
                  </div>
                </div>{" "}
                <div className="col-md-6 counter-container">
                  <div className="counter-item">
                    <div className="number">
                      <h2>
                        <CountUp className="countup" end={23} />
                      </h2>
                    </div>
                    <div className="text">
                      <h2 className="plus">+</h2>
                      <h2>Clients</h2>
                    </div>
                  </div>
                </div>{" "}
                <div className="col-md-6 counter-container">
                  <div className="counter-item">
                    <div className="number">
                      <h2>
                        <CountUp className="countup" end={100} />
                      </h2>
                    </div>
                    <div className="text">
                      <h2 className="plus">+</h2>
                      <h2>Clients</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
