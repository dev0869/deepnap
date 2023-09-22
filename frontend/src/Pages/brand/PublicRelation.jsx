import React from 'react'
import { public1, public2 } from "../../Assets/Index";
import { Data } from "./Brandconst/PublicConst";
const PublicRelation = () => {
  return (
    <>
         <section className="webdesign p-5 ">
        <div className="container">
          <div className="row ">
            <h1 className="h1 heading">Public Relations </h1>
            <h3 className="h3 subheading">
            Deepnap Softech: Shaping Positive Narratives and Building Trust Through Expert Public Relations
            </h3>
            <p
              style={{ fontSize: "20px ", color: "gray", textAlign: "justify" }}
            >
              In the fast-paced and interconnected world of modern business, where reputation and communication are pivotal to success, Deepnap Softech emerges as a stalwart in the realm of Public Relations (PR). We are not just a company; we are architects of comprehensive PR solutions that help businesses craft positive narratives, connect with their target audiences, and foster trust and credibility in the digital age.
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
                    <img src={public1} alt="image" />
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
                  Public Relations is more than just managing media interactions; it's an art that blends communication, strategy, and relationship-building to shape perceptions and foster trust. It's about ensuring that your brand's story is told accurately and positively to the right audiences. Our PR services encompass a comprehensive spectrum, each meticulously designed to cater to unique business needs and objectives:
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
                  We craft tailored PR strategies aligned with your specific business objectives, whether it's increasing brand visibility, crisis management, reputation enhancement, or product launches. Our experts delve deep into your target audience, market dynamics, and competitive landscape to devise data-backed plans that ensure your PR efforts deliver remarkable results.
                </p>
              </div>
              <div className="col-sm-12 col-lg-2 col-xl-3 partf flex  align-items-center">
                <div
                  className="cell-5 fx animated bounceIn"
                  data-animate="bounceIn"
                >
                  <a href="#" target="_blank">
                    <img src={public2} alt="image" />
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
               Excellence is not just a goal at Deepnap Softech; it's our standard. We firmly believe that every PR effort, every media interaction, and every communication piece should contribute to building a remarkable brand image and fostering trust. Our team of PR experts combines creativity with data-driven insights to deliver solutions that are not just effective but also strategically aligned with your PR goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    
    </>
  )
}

export default PublicRelation