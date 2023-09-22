import React from "react";
import { brand1, brand2 } from "../../Assets/Index";
import { Data } from "./Brandconst/BrandConst";
const Brand = () => {
  return (
    <>
      <section className="webdesign p-5 ">
        <div className="container">
          <div className="row ">
            <h1 className="h1 heading">Brand Building </h1>
            <h3 className="h3 subheading">
              Deepnap Softech: Crafting Legacies Through Brand Building Mastery
            </h3>
            <p
              style={{ fontSize: "20px ", color: "gray", textAlign: "justify" }}
            >
              In the ever-evolving landscape of business and marketing, where
              brand perception and identity are the cornerstones of success,
              Deepnap Softech emerges as a virtuoso in the realm of Brand
              Building. We're not just a company; we are architects of
              comprehensive brand solutions that help businesses craft
              compelling brand narratives, connect with their target audiences
              on a profound level, and build enduring legacies in the digital
              age.
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
                    <img src={brand1} alt="image" />
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
                  Brand Building is more than just a logo or a catchy tagline;
                  it's an art that blends creativity, strategy, and data-driven
                  precision. It's about cultivating a brand identity that
                  resonates with your target audience, instills trust, and
                  inspires loyalty. Our Brand Building services encompass a
                  comprehensive spectrum, each meticulously designed to cater to
                  unique business needs and objectives:
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
                  We craft tailored brand strategies aligned with your specific
                  business objectives, whether it's increasing brand awareness,
                  rebranding, or launching a new product. Our experts delve deep
                  into your target audience, market dynamics, and competitive
                  landscape to devise data-backed plans that ensure your brand
                  efforts deliver remarkable results.
                </p>
              </div>
              <div className="col-sm-12 col-lg-2 col-xl-3 partf flex  align-items-center">
                <div
                  className="cell-5 fx animated bounceIn"
                  data-animate="bounceIn"
                >
                  <a href="#" target="_blank">
                    <img src={brand2} alt="image" />
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
                your business objectives, target audience, and competitive
                landscape, tailoring our Brand Building solutions to seamlessly
                align with your vision. Whether you're a startup looking to make
                a memorable entrance or an established business aiming to
                elevate your brand presence, Deepnap Softech is your trusted
                partner on the path to brand building excellence. Join us in the
                realm of limitless brand building possibilities, where
                creativity, strategy, and precision converge. At Deepnap
                Softech, we're not just Brand Building specialists; we're
                architects of brand legacies, forging a world where every brand
                stands as a testament to our unwavering dedication to excellence
                in Brand Building.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Brand;
