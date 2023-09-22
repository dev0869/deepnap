import React from 'react'
import { digital1, digital2 } from "../../Assets/Index";
import { Data } from "./Brandconst/DigitalConst";
const DigitalMarketing = () => {
  return (
    <>
    <section className="webdesign p-5 ">
        <div className="container">
          <div className="row ">
            <h1 className="h1 heading">Digital Marketing </h1>
            <h3 className="h3 subheading">
            Deepnap Softech: Navigating Digital Frontiers with Mastery in Digital Marketing
            </h3>
            <p
              style={{ fontSize: "20px ", color: "gray", textAlign: "justify" }}
            >
              In the ever-evolving and hyper-connected digital landscape, where businesses compete for the attention of a global audience, Deepnap Softech stands as a seasoned navigator in the realm of Digital Marketing. We are more than just a company; we are architects of comprehensive digital marketing solutions that empower businesses to harness the full potential of the digital realm, connect with their target audiences, and achieve remarkable growth in the digital age.
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
                    <img src={digital1} alt="image" />
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
                  Digital Marketing is more than just advertising; it's an art that blends creativity, strategy, and data-driven precision to craft compelling narratives, drive engagement, and achieve measurable results in the digital realm. It's about ensuring that your brand's message reaches the right audience, at the right time, through the right channels. Our Digital Marketing services encompass a comprehensive spectrum, each meticulously designed to cater to unique business needs and objectives:
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
                We craft tailored digital marketing strategies aligned with your specific business objectives, whether it's increasing brand awareness, driving website traffic, generating leads, or boosting sales. Our experts delve deep into your target audience and competitive landscape to devise data-backed plans that ensure your digital marketing efforts deliver stellar results.
                </p>
              </div>
              <div className="col-sm-12 col-lg-2 col-xl-3 partf flex  align-items-center">
                <div
                  className="cell-5 fx animated bounceIn"
                  data-animate="bounceIn"
                >
                  <a href="#" target="_blank">
                    <img src={digital2} alt="image" />
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
                Excellence is not just a goal at Deepnap Softech; it's our standard. We firmly believe that every digital marketing effort, every piece of content, every ad campaign, and every data point should contribute to achieving your business objectives. Our team of Digital Marketing experts combines creativity with data-driven insights to deliver solutions that are not just effective but also strategically aligned with your digital marketing goals.

              </p>
            </div>
          </div>
        </div>
      </section>
    
    </>
  )
}

export default DigitalMarketing