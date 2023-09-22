import React from "react";
import { influence1, influence2 } from "../../Assets/Index";
import { Data } from "./Brandconst/FluenceConst";
const Fluence = () => {
  return (
    <>
      <section className="webdesign p-5 ">
        <div className="container">
          <div className="row ">
            <h1 className="h1 heading">Influencer Marketing</h1>
            <h3 className="h3 subheading">
              Deepnap Softech: Illuminating Brands through Influencer Marketing
              Expertise
            </h3>
            <p
              style={{ fontSize: "20px ", color: "gray", textAlign: "justify" }}
            >
              In the dynamic and ever-evolving world of marketing, where
              authenticity and engagement hold the key to success, Deepnap
              Softech emerges as a guiding light in the realm of Influencer
              Marketing. We are not just a company; we are architects of
              comprehensive influencer marketing solutions that enable brands to
              harness the power of influential voices, connect with their target
              audiences, and achieve remarkable growth in the digital age
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
                    <img src={influence1} alt="image" />
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
                  Influencer Marketing is more than just endorsements; it's an
                  art that blends authenticity, strategy, and data-driven
                  precision to create meaningful connections and drive action.
                  It's about partnering with individuals who resonate with your
                  brand's values and have the ability to authentically convey
                  your message to their engaged audiences. Our Influencer
                  Marketing services encompass a comprehensive spectrum, each
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
                  We craft tailored influencer marketing strategies aligned with
                  your specific business objectives, whether it's increasing
                  brand awareness, driving engagement, or boosting sales. Our
                  experts delve deep into your target audience and competitive
                  landscape to devise data-backed plans that ensure your
                  influencer marketing efforts deliver stellar results
                </p>
              </div>
              <div className="col-sm-12 col-lg-2 col-xl-3 partf flex  align-items-center">
                <div
                  className="cell-5 fx animated bounceIn"
                  data-animate="bounceIn"
                >
                  <a href="#" target="_blank">
                    <img src={influence2} alt="image" />
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
              <h1 className="h1 text-center">Your Success, Our Commitment:</h1>
              <p
                style={{
                  fontSize: "20px ",
                  color: "gray",
                  textAlign: "justify",
                }}
              >
                Your success is our commitment. We invest time in understanding
                your brand, target audience, and competitive landscape,
                tailoring our Influencer Marketing solutions to seamlessly align
                with your vision. Whether you're a startup looking to make a
                memorable entrance or an established business aiming to enhance
                your influencer marketing strategy, Deepnap Softech is your
                trusted partner on the path to influencer marketing brilliance.
                Join us in the realm of limitless influencer marketing
                possibilities, where authenticity, strategy, and precision
                converge. At Deepnap Softech, we're not just Influencer
                Marketing specialists; we're architects of influencer marketing
                success, forging a world where every influencer collaboration is
                a testament to our unwavering dedication to excellence in
                Influencer Marketing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Fluence;
