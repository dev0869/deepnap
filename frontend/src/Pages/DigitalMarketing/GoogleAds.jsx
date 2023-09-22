import React from "react";
import { google1, google2 } from "../../Assets/Index";
import { Data } from "./DigitalConstant/GoogleConst";
const GoogleAds = () => {
  return (
    <>
      <section className="webdesign p-5 ">
        <div className="container">
          <div className="row ">
            <h1 className="h1 heading">Google Ads</h1>
            <h3 className="h3 subheading">
              Deepnap Softech: Unleashing the Power of Google Ads for Digital
              Triumph
            </h3>
            <p
              style={{ fontSize: "20px ", color: "gray", textAlign: "justify" }}
            >
              In the dynamic landscape of digital marketing, where visibility
              and strategic advertising drive business success, Deepnap Softech
              emerges as a pioneer in the realm of Google Ads. We're not just a
              company; we are architects of digital advertising solutions that
              harness the full potential of Google Ads to help businesses thrive
              in the digital age.
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
                    <img src={google1} alt="image" />
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
                  Google Ads represent the intersection of creativity and
                  data-driven precision in the realm of digital advertising.
                  It's about crafting compelling ad campaigns that resonate
                  across Google's vast network, reaching potential customers
                  precisely when they're searching for products or services. Our
                  Google Ads services encompass a comprehensive spectrum, each
                  meticulously designed to cater to unique business needs and
                  objectives:
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
                  We craft tailored Google Ads strategies aligned with your
                  specific business objectives, whether it's boosting brand
                  awareness, driving website traffic, generating leads, or
                  skyrocketing sales. Our experts delve deep into your target
                  audience and competitive landscape to devise data-backed plans
                  that ensure your ad campaigns deliver stellar results.
                </p>
              </div>
              <div className="col-sm-12 col-lg-2 col-xl-3 partf flex  align-items-center">
                <div
                  className="cell-5 fx animated bounceIn"
                  data-animate="bounceIn"
                >
                  <a href="#" target="_blank">
                    <img src={google2} alt="image" />
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
              <h1 className="h1 text-center">Our Commitment to Excellence</h1>
              <p
                style={{
                  fontSize: "20px ",
                  color: "gray",
                  textAlign: "justify",
                }}
              >
                Excellence is not just a goal at Deepnap Softech; it's our
                standard. We firmly believe that every Google Ads campaign,
                every ad creative, and every data point should contribute to
                achieving your business objectives. Our team of Google Ads
                experts combines creativity with data-driven insights to deliver
                solutions that are not just effective but also strategically
                aligned with your digital advertising goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GoogleAds;
