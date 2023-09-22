import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { GiSupersonicArrow } from "react-icons/gi";
import { TbSettingsCode } from "react-icons/tb";
import { BiSolidBookContent } from "react-icons/bi";
import CountUp from "react-countup";
const Details = () => {
  return (
    <>
      <section className="stats js-stats-counter mega-section">
        <div
          className="overlay-photo-image-bg"
          style={{
            backgroundImage:
              'url("https://amincodes.com/html/one-pages/flex-it/assets/images/sections-bg-images/pattern-bg-3.jpg")',
            opacity: "0.2",
          }}
        ></div>
        <div className="container">
          <div className="stats-inner" style={{ marginTop: "-310px" }}>
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-3  stat-box">
                <div
                  className="stat-box-inner  d-flex align-items-center flex-column justify-content-center"
                  data-tilt="data-tilt"
                >
                  <TbSettingsCode className="stat-icon " />
                  <p className="stat-num">
                    <span
                      className="counter"
                      data-from="10"
                      data-to="750"
                      data-speed="3000"
                      data-refresh-interval="50"
                    >
                      <CountUp start={0} end={100} duration={5} />
                    </span>
                    <span className="sign">+</span>
                  </p>
                  <span className="stat-desc">finished projects</span>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3 stat-box">
                <div
                  className="stat-box-inner d-flex align-items-center flex-column justify-content-center"
                  data-tilt="data-tilt"
                >
                  <BiSolidBookContent className="stat-icon" />
                  <p className="stat-num">
                    <span
                      className="counter"
                      data-from="10"
                      data-to="750"
                      data-speed="3000"
                      data-refresh-interval="50"
                    >
                      <CountUp start={0} end={30} duration={5} />
                    </span>
                    <span className="sign">+</span>
                  </p>
                  <span className="stat-desc">Created Jobs </span>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3 stat-box">
                <div
                  className="stat-box-inner d-flex align-items-center flex-column justify-content-center"
                  data-tilt="data-tilt"
                >
                  <FaUserAlt className="stat-icon" />
                  <p className="stat-num">
                    <span
                      className="counter"
                      data-from="10"
                      data-to="750"
                      data-speed="3000"
                      data-refresh-interval="50"
                    >
                      <CountUp start={0} end={90} duration={5} />
                    </span>
                    <span className="sign">+</span>
                  </p>
                  <span className="stat-desc"> Happy Customers</span>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3 stat-box">
                <div
                  className="stat-box-inner d-flex align-items-center flex-column justify-content-center"
                  data-tilt="data-tilt"
                >
                  <GiSupersonicArrow className="stat-icon" />
                  <p className="stat-num">
                    <span
                      className="counter"
                      data-from="10"
                      data-to="750"
                      data-speed="3000"
                      data-refresh-interval="50"
                    >
                      <CountUp start={0} end={25} duration={5} />
                    </span>
                    <span className="sign">+</span>
                  </p>
                  <span className="stat-desc"> Technologies have</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
