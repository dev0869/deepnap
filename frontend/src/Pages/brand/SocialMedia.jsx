import React from 'react'
import { media1, media2 } from "../../Assets/Index";
import { Data } from "./Brandconst/SocialConst";
const SocialMedia = () => {
  return (
   <>
     <section className="webdesign p-5 ">
        <div className="container">
          <div className="row ">
            <h1 className="h1 heading">Social Media Presence </h1>
            <h3 className="h3 subheading">
            Deepnap Softech: Elevating Brands Through Mastery in Social Media Presence
            </h3>
            <p
              style={{ fontSize: "20px ", color: "gray", textAlign: "justify" }}
            >
              In the dynamic and interconnected world of modern marketing, where social media has become the heartbeat of online interactions, Deepnap Softech emerges as a trusted guide in the realm of Social Media Presence. We are not just a company; we are architects of comprehensive social media solutions that empower brands to harness the full potential of social platforms, connect with their audiences, and achieve remasrkable growth in the digital age.
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
                    <img src={media1} alt="image" />
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
                  Social Media Presence is more than just posting updates; it's an art that blends creativity, strategy, and data-driven precision to create meaningful connections and foster brand loyalty. It's about ensuring that your brand's message resonates with your audience, sparks conversations, and drives action. Our Social Media Presence services encompass a comprehensive spectrum, each meticulously designed to cater to unique business needs and objectives:
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
                  We craft tailored social media strategies aligned with your specific business objectives, whether it's increasing brand awareness, driving engagement, or boosting sales. Our experts delve deep into your target audience and competitive landscape to devise data-backed plans that ensure your social media efforts deliver stellar results.
                </p>
              </div>
              <div className="col-sm-12 col-lg-2 col-xl-3 partf flex  align-items-center">
                <div
                  className="cell-5 fx animated bounceIn"
                  data-animate="bounceIn"
                >
                  <a href="#" target="_blank">
                    <img src={media2} alt="image" />
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
               Excellence is not just a goal at Deepnap Softech; it's our standard. We firmly believe that every social media post, every interaction, and every data point should contribute to building a robust social media presence. Our team of Social Media Presence experts combines creativity with data-driven insights to deliver solutions that are not just effective but also strategically aligned with your social media goals.
              </p>
            </div>
          </div>
        </div>
      </section>
   </>
  )
}

export default SocialMedia