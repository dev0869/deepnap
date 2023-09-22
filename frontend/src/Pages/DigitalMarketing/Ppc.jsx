import React from "react";
import { ppc1, pp2 } from "../../Assets/Index";
import { Data } from "./DigitalConstant/Metaconst";
const Ppc = () => {
  return (
    <>
      <section className="webdesign p-5 ">
        <div className="container">
          <div className="row ">
            <h1 className="h1 heading">PPC</h1>
            <h3 className="h3 subheading">
            Deepnap Softech: Propelling Businesses to New Heights with Precision PPC Mastery
            </h3>
            <p
              style={{ fontSize: "20px ", color: "gray", textAlign: "justify" }}
            >
             In the ever-evolving landscape of digital advertising, where the battle for online visibility and strategic advertising is fiercer than ever, Deepnap Softech emerges as a beacon of expertise in the realm of PPC (Pay-Per-Click) advertising. We are not just a company; we are architects of digital advertising solutions that harness the power of PPC to help businesses skyrocket their online presence, connect with their target audience, and achieve remarkable growth in the digital age.
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
                    <img src={ppc1} alt="image" />
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
                  PPC is more than just advertising; it's a finely tuned blend of creativity, strategy, and data-driven precision. It's about creating ad campaigns that deliver results by putting your brand in front of potential customers at the right moment. Our PPC services encompass a comprehensive spectrum, each meticulously designed to cater to unique business needs and objectives:
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
                  We craft tailored PPC strategies aligned with your specific business objectives, whether it's increasing website traffic, generating leads, or boosting sales. Our experts delve deep into your target audience and competitive landscape to devise data-backed plans that ensure your PPC efforts deliver stellar results.
                </p>
              </div>
              <div className="col-sm-12 col-lg-2 col-xl-3 partf flex  align-items-center">
                <div
                  className="cell-5 fx animated bounceIn"
                  data-animate="bounceIn"
                >
                  <a href="#" target="_blank">
                    <img src={pp2} alt="image" />
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
              <h1 className="h1 text-center">Our Commitment to Excellence:</h1>
              <p
                style={{
                  fontSize: "20px ",
                  color: "gray",
                  textAlign: "justify",
                }}
              >
               Excellence is not just a goal at Deepnap Softech; it's our standard. We firmly believe that every PPC campaign, every keyword, every ad creative, and every data point should contribute to achieving your business objectives. Our team of PPC experts combines creativity with data-driven insights to deliver solutions that are not just effective but also strategically aligned with your digital advertising goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ppc;
