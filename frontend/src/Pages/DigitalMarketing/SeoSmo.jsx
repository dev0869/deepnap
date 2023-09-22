import React from "react";
import { seo1, seo2 } from "../../Assets/Index";
import { Data } from "./DigitalConstant/Seoconst";
const SeoSmo = () => {
  return (
    <>
      <section className="webdesign p-5 ">
        <div className="container">
          <div className="row ">
            <h1 className="h1 heading">SEO & SEM</h1>
            <h3 className="h3 subheading">
              Deepnap Softech: Navigating the Digital Landscape with SEO & SEM
              Excellence
            </h3>
            <p
              style={{ fontSize: "20px ", color: "gray", textAlign: "justify" }}
            >
              In the ever-evolving realm of digital marketing, where online
              visibility and strategic advertising are the key drivers of
              success, Deepnap Softech emerges as a trusted navigator in the
              world of SEO (Search Engine Optimization) and SEM (Search Engine
              Marketing). We're not just a company; we are architects of digital
              marketing solutions that harness the power of SEO and SEM to help
              businesses enhance their online presence, connect with their
              target audience, and achieve remarkable growth in the digital age.
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
                    <img src={seo1} alt="image" />
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
                  SEO and SEM are more than just acronyms; they represent the
                  convergence of creativity, strategy, and data-driven precision
                  in the realm of digital marketing. It's about optimizing
                  websites for search engines, running targeted advertising
                  campaigns, and ensuring that your brand is visible where it
                  matters most - in search engine results pages. Our SEO and SEM
                  services encompass a comprehensive spectrum, each meticulously
                  designed to cater to unique business needs and objectives:
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
                  We craft tailored SEO strategies aligned with your specific
                  business objectives, whether it's increasing organic traffic,
                  ranking for relevant keywords, or improving website
                  visibility. Our experts delve deep into your target audience
                  and competitive landscape to devise data-backed plans that
                  ensure your SEO efforts deliver stellar results.
                </p>
              </div>
              <div className="col-sm-12 col-lg-2 col-xl-3 partf flex  align-items-center">
                <div
                  className="cell-5 fx animated bounceIn"
                  data-animate="bounceIn"
                >
                  <a href="#" target="_blank">
                    <img src={seo2} alt="image" />
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
              <h1 className="h1 text-center">Your Success, Our Commitment</h1>
              <p
                style={{
                  fontSize: "20px ",
                  color: "gray",
                  textAlign: "justify",
                }}
              >
                Your success is our commitment. We invest time in understanding
                your business objectives, target audience, and competitive
                landscape, tailoring our SEO and SEM solutions to seamlessly
                align with your vision. Whether you're a startup looking to make
                a digital impact or an established business aiming to enhance
                your online visibility, Deepnap Softech is your trusted partner
                on the path to SEO and SEM excellence. Join us in the realm of
                limitless digital marketing possibilities, where creativity,
                strategy, and precision converge. At Deepnap Softech, we're not
                just SEO and SEM specialists; we're architects of digital
                marketing success, forging a world where every search result and
                ad campaign is a testament to our unwavering dedication to
                excellence in SEO and SEM.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SeoSmo;
