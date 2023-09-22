import React from "react";
import { softDev1, softDev2 } from "../../Assets/Index";
import { Data } from "./Allconstants/SoftwareConstant";
const Software = () => {
  return (
    <>
      <section className="webdesign p-5 ">
        <div className="container">
          <div className="row ">
            <h1 className="h1 heading">Software Development</h1>
            <h3 className="h3 subheading">
              Deepnap Softech: Forging Tomorrow's Digital Excellence Today
            </h3>
            <p
              style={{ fontSize: "20px ", color: "gray", textAlign: "justify" }}
            >
              In the rapidly evolving digital landscape, where innovation
              propels progress, and technology is the cornerstone of success,
              Deepnap Softech emerges as a beacon of technical brilliance and
              software ingenuity. As a Software Development company, we are not
              just creators of code; we are architects of digital solutions that
              empower businesses, entrepreneurs, and visionaries to achieve
              their goals and navigate the digital world with confidence
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
                    <img src={softDev1} alt="image" />
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
                  At Deepnap Softech, we envision a digital realm where every
                  challenge finds its solution, every idea transforms into
                  reality, and every problem becomes an opportunity. Our vision
                  is to be the catalyst for digital transformation, enabling our
                  clients to harness the power of technology and thrive in an
                  ever-changing world
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
                  Software Development is more than writing lines of code; it's
                  a journey of creativity, innovation, and problem-solving. It's
                  about transforming concepts into functional solutions that
                  drive efficiency, productivity, and innovation. Our Software
                  Development services encompass a diverse spectrum, each
                  meticulously crafted to address unique needs and objectives
                </p>
              </div>
              <div className="col-sm-12 col-lg-2 col-xl-3 partf flex  align-items-center">
                <div
                  className="cell-5 fx animated bounceIn"
                  data-animate="bounceIn"
                >
                  <a href="#" target="_blank">
                    <img src={softDev2} alt="image" />
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
              })}<h1 className="h1 text-center">Our Commitment to Excellence:</h1>
              <p
                style={{
                  fontSize: "20px ",
                  color: "gray",
                  textAlign: "center",
                }}
              >
                Excellence is not merely a goal at Deepnap Softech; it's our
                standard. We believe that every line of code, every feature, and
                every solution should embody perfection. Our team of experts
                combines technical expertise with a deep understanding of
                business dynamics to deliver solutions that are not just
                effective but strategically aligned with your goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Software;
