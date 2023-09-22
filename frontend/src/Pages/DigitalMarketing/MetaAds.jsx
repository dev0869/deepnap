import React from "react";
import { meta1, meta2 } from "../../Assets/Index";
import { Data } from "./DigitalConstant/Metaconst";
const MetaAds = () => {
  return (
    <>
      <section className="webdesign p-5 ">
        <div className="container">
          <div className="row ">
            <h1 className="h1 heading">Meta Ads</h1>
            <h3 className="h3 subheading">
              Deepnap Softech: Unleashing the Power of Meta Ads for Digital
              Success
            </h3>
            <p
              style={{ fontSize: "20px ", color: "gray", textAlign: "justify" }}
            >
              In the dynamic world of digital marketing, where innovation and
              strategic advertising are the driving forces behind brand
              visibility and business growth, Deepnap Softech stands as a
              visionary in the realm of Meta Ads. We are not just a company; we
              are architects of digital advertising solutions that leverage the
              full potential of the ever-evolving Meta Ads platforms to help
              businesses thrive in the digital age.
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
                    <img src={meta1} alt="image" />
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
                  Meta Ads represent a fusion of creativity, data-driven
                  precision, and strategic targeting in the world of digital
                  advertising. It's about creating compelling ad campaigns that
                  resonate with audiences across the Meta Ads ecosystem,
                  including Facebook, Instagram, WhatsApp, and Messenger. Our
                  Meta Ads services encompass a comprehensive spectrum, each
                  meticulously designed to address unique business needs and
                  objectives:eticulously designed to address unique needs and
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
                  We craft customized Meta Ads strategies tailored to your
                  specific business goals, whether it's increasing brand
                  awareness, driving website traffic, generating leads, or
                  boosting sales. Our experts analyze your target audience and
                  competition to formulate data-driven plans that ensure your ad
                  campaigns deliver the desired results.
                </p>
              </div>
              <div className="col-sm-12 col-lg-2 col-xl-3 partf flex  align-items-center">
                <div
                  className="cell-5 fx animated bounceIn"
                  data-animate="bounceIn"
                >
                  <a href="#" target="_blank">
                    <img src={meta2} alt="image" />
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
                Your success is our mission. We invest time in understanding
                your business objectives, target audience, and competitive
                landscape, tailoring our Meta Ads solutions to seamlessly align
                with your vision. Whether you're a startup looking to make a
                digital impact or an established business seeking to enhance
                your online presence, Deepnap Softech is your trusted partner on
                the path to digital advertising excellence. Join us in the realm
                of limitless digital advertising possibilities, where
                creativity, strategy, and precision converge. At Deepnap
                Softech, we're not just Meta Ads specialists; we're architects
                of digital advertising success, forging a world where every ad
                campaign is a testament to our dedication to excellence in Meta
                Ads.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MetaAds;
