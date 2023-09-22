import React from "react";
import { content1, content2 } from "../../Assets/Index";
import { Data } from "./DigitalConstant/Contentconst";
const ContentMarketing = () => {
  return (
    <>
      <section className="webdesign p-5 ">
        <div className="container">
          <div className="row ">
            <h1 className="h1 heading">Content Marketing </h1>
            <h3 className="h3 subheading">
              Deepnap Softech: Illuminating Brands with Content Marketing
              Brilliance
            </h3>
            <p
              style={{ fontSize: "20px ", color: "gray", textAlign: "justify" }}
            >
              In the dynamic landscape of digital marketing, where compelling
              storytelling and valuable content reign supreme, Deepnap Softech
              stands as a luminary in the realm of Content Marketing. We are
              more than a company; we are architects of digital marketing
              solutions that harness the power of content to help businesses
              connect with their target audiences, build authority, and achieve
              remarkable growth in the digital age.
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
                    <img src={content1} alt="image" />
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
                  Content Marketing is not just about creating content; it's an
                  art that blends creativity, strategy, and data-driven
                  precision. It's about crafting content that resonates with
                  your audience, educates, entertains, and drives action. Our
                  Content Marketing services encompass a comprehensive spectrum,
                  each meticulously designed to cater to unique business needs
                  and objectives:
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
                  We craft tailored content marketing strategies aligned with
                  your specific business objectives, whether it's increasing
                  brand awareness, driving website traffic, generating leads, or
                  boosting sales. Our experts delve deep into your target
                  audience and competitive landscape to devise data-backed plans
                  that ensure your content campaigns deliver stellar results.
                </p>
              </div>
              <div className="col-sm-12 col-lg-2 col-xl-3 partf flex  align-items-center">
                <div
                  className="cell-5 fx animated bounceIn"
                  data-animate="bounceIn"
                >
                  <a href="#" target="_blank">
                    <img src={content2} alt="image" />
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
              <h1 className="h1 text-center">Our Commitment, to excellence</h1>
              <p
                style={{
                  fontSize: "20px ",
                  color: "gray",
                  textAlign: "justify",
                }}
              >
                Excellence is not just a goal at Deepnap Softech; it's our
                standard. We firmly believe that every piece of content, every
                blog post, every video, and every data point should contribute
                to achieving your business objectives. Our team of Content
                Marketing experts combines creativity with data-driven insights
                to deliver solutions that are not just effective but also
                strategically aligned with your digital marketing goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentMarketing;
