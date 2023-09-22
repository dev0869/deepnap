import React from "react";
import { orm1, orm2 } from "../../Assets/Index";
import { Data } from "./Brandconst/OrmConst";
const Orm = () => {
  return (
    <>
      <section className="webdesign p-5 ">
        <div className="container">
          <div className="row ">
            <h1 className="h1 heading">ORM</h1>
            <h3 className="h3 subheading">
              Deepnap Softech: Fortifying Reputations and Safeguarding Trust
              with Expert Online Reputation Management
            </h3>
            <p
              style={{ fontSize: "20px ", color: "gray", textAlign: "justify" }}
            >
              In the ever-evolving digital landscape, where online reputation
              can make or break businesses, Deepnap Softech stands as a
              formidable guardian in the realm of Online Reputation Management
              (ORM). We are not just a company; we are architects of
              comprehensive ORM solutions that help businesses fortify their
              digital reputations, combat negative online sentiment, and foster
              trust and credibility in the digital age.
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
                    <img src={orm1} alt="image" />
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
                  ORM is more than just monitoring social media mentions; it's
                  an art that blends communication, strategy, and data-driven
                  precision to shape and protect your digital identity. It's
                  about ensuring that your brand's online narrative is one of
                  trust, authenticity, and reliability. Our ORM services
                  encompass a comprehensive spectrum, each meticulously designed
                  to cater to unique business needs and objectives:
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
                  We craft tailored ORM strategies aligned with your specific
                  business objectives, whether it's enhancing online reputation,
                  mitigating the impact of negative reviews, or managing online
                  crises. Our experts delve deep into your target audience,
                  online sentiment, and competitive landscape to devise
                  data-backed plans that ensure your ORM efforts deliver
                  remarkable results.
                </p>
              </div>
              <div className="col-sm-12 col-lg-2 col-xl-3 partf flex  align-items-center">
                <div
                  className="cell-5 fx animated bounceIn"
                  data-animate="bounceIn"
                >
                  <a href="#" target="_blank">
                    <img src={orm2} alt="image" />
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
                your business objectives, target audience, and online landscape,
                tailoring our ORM solutions to seamlessly align with your
                vision. Whether you're a startup looking to establish a pristine
                digital reputation or an established business aiming to enhance
                your online credibility, Deepnap Softech is your trusted partner
                on the path to ORM excellence. Join us in the realm of limitless
                ORM possibilities, where communication, strategy, and precision
                converge. At Deepnap Softech, we're not just Online Reputation
                Management specialists; we're architects of trust and
                credibility, forging a world where every digital interaction is
                a testament to our unwavering dedication to excellence in Online
                Reputation Management.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Orm;
