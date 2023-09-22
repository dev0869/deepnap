import React from "react";
import { appDev1, appDev2 } from "../../Assets/Index";
import { Data } from "./Allconstants/AppConstant";
const AppDev = () => {
  return (
    <>
      <section className="webdesign p-5 ">
        <div className="container">
          <div className="row ">
            <h1 className="h1 heading">App Development </h1>
            <h3 className="h3 subheading">
              Deepnap Softech: Pioneering Digital Transformation through
              Innovative App Development
            </h3>
            <p
              style={{ fontSize: "20px ", color: "gray", textAlign: "justify" }}
            >
              In an era where the digital realm is at the forefront of
              innovation, Deepnap Softech emerges as a trailblazer in the world
              of App Development. We are more than a company; we are architects
              of technological solutions that bridge the gap between vision and
              reality. As a dedicated App Development firm, we understand that
              mobile apps are the gateways to the digital universe, where ideas
              transform into functional realities, and businesses thrive on the
              power of mobility.
            </p>
            <div
              className=" mt-2 flex align-items-center flex-wrap  "
              style={{ gap: "10%" }}
            >
              <div className="col-sm-12 col-lg-2 col-xl-3 partf flex  align-items-center">
                <div
                  className="cell-5 fx animated bounceIn"
                  data-animate="bounceIn"
                >
                  <a href="#" target="_blank">
                    <img src={appDev1} alt="image" />
                  </a>
                </div>
              </div>

              <div className="col-sm-12 col-lg-8 col-xl-7 parts flex align-items-center justify-content-center ">
                <p
                  style={{
                    fontSize: "20px ",
                    color: "gray",
                    textAlign: "justify",
                  }}
                >
                  App Development goes beyond coding; it's an art that blends
                  creativity, functionality, and user-centric design. It's about
                  crafting mobile experiences that captivate, engage, and
                  simplify. Our App Development services span a broad spectrum,
                  each tailored to address unique needs and objectives
                </p>
              </div>
            </div>
            <div
              className=" flex mt-10 align-items-center dividers flex-wrap justify-content-center"
              style={{ padding: "40px 0", gap: "10%" }}
            >
              <div className="col-sm-12 col-lg-8 col-xl-7 parts flex align-items-center justify-content-center text-center">
                <p
                  style={{
                    fontSize: "20px ",
                    color: "gray",
                    textAlign: "justify",
                  }}
                >
                  We specialize in creating bespoke mobile apps that align
                  seamlessly with your business goals. From concept to
                  deployment, our custom apps are meticulously designed to meet
                  your specific requirements, empowering your business to thrive
                  in the mobile-centric landscape.
                </p>
              </div>
              <div className="col-sm-12 col-lg-2 col-xl-3 partf flex  align-items-center">
                <div
                  className="cell-5 fx animated bounceIn"
                  data-animate="bounceIn"
                >
                  <a href="#" target="_blank">
                    <img src={appDev2} alt="image" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10">
              {Data.map((ele, id) => {
                const { name, para } = ele;
                return (
                  <div
                    key={id}
                    className=" mt-2 "
                    style={{ padding: "5px 0", gap: "5%" }}
                  >
                    <h1
                      style={{
                        fontSize: "25px ",
                        color: "rgb(6, 9, 34)",
                        fontWeight: "bold",
                      }}
                    >
                      {name}
                    </h1>
                    <p
                      style={{
                        fontSize: "20px ",
                        color: "gray",
                        textAlign: "justify",
                      }}
                    >
                      {para}
                    </p>
                  </div>
                );
              })}
              <h1 className="h1 text-center">Your Success, Our Mission:</h1>
              <p
                style={{
                  fontSize: "20px ",
                  color: "gray",
                  textAlign: "justify",
                }}
              >
                Your success is our driving force. We invest time in
                understanding your challenges, goals, and aspirations, tailoring
                our app development solutions to seamlessly align with your
                vision. Whether you're a startup venturing into the mobile app
                arena or an established enterprise seeking innovation, Deepnap
                Softech is your trusted partner on the path to digital
                transformation. Join us in the realm of boundless possibilities,
                where creativity, innovation, and technical excellence converge.
                At Deepnap Softech, we're not just developers; we're architects
                of digital futures, forging a world where every app is a
                testament to our dedication to excellence in App Development.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppDev;
