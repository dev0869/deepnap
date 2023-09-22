import React from "react";
import { Data } from "./Allconstants/LogoConstant";
import { logoDes1, logoDes2 } from "../../Assets/Index";

const LogoDev = () => {
  return (
    <>
      <section className="webdesign p-5 ">
        <div className="container">
          <div className="row ">
            <h1 className="h1 heading">Logo Design </h1>
            <h3 className="h3 subheading">
              Deepnap Softech: Elevating Brands through Distinctive Logo Design
            </h3>
            <p
              style={{ fontSize: "20px ", color: "gray", textAlign: "justify" }}
            >
              In the realm of brand identity, where the visual meets the
              visceral, Deepnap Softech emerges as a beacon of creativity and
              precision. Our expertise extends beyond technology; it encompasses
              the artistry and significance of Logo Design, a craft that speaks
              volumes in a single symbol. We believe that a logo is not just a
              graphic; it's a bridge between a brand's ethos and its audience's
              perception..
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
                    <img src={logoDes1} alt="image" />
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
                  At Deepnap Softech, our Logo Design process begins with a deep
                  dive into the brand's identity, its mission, and its target
                  audience. We believe that understanding the soul of a brand is
                  the first step towards crafting a logo that resonates.
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
                  We meticulously craft the visual elements of your website,
                  from color schemes and typography to imagery and layout. Each
                  design element is thoughtfully selected to resonate with your
                  brand identity and engage your target audience effectively.
                </p>
              </div>
              <div className="col-sm-12 col-lg-2 col-xl-3 partf flex  align-items-center">
                <div
                  className="cell-5 fx animated bounceIn"
                  data-animate="bounceIn"
                >
                  <a href="#" target="_blank">
                    <img src={logoDes2} alt="image" />
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
              <h1 className="h1 text-center">The Legacy of Logo Design</h1>
              <p
                style={{
                  fontSize: "20px ",
                  color: "gray",
                  textAlign: "center",
                }}
              >
                A well-crafted logo has the potential to transcend time and
                trends, etching itself into the collective consciousness of a
                brand's audience. From the iconic Apple logo to the Nike swoosh,
                these symbols have become synonymous with their respective
                brands, exemplifying the enduring legacy of Logo Design. In
                essence, Logo Design is an art form and a strategic tool that
                distills a brand's essence into a visual masterpiece. It serves
                as a bridge between a brand and its audience, forging
                connections that last a lifetime. In a world where visual
                communication is paramount, a thoughtfully designed logo is the
                foundation upon which a brand's identity is built and a
                testament to its commitment to excellence. Join us at Deepnap
                Softech, where every logo we design is a testament to our
                dedication to elevating brands through distinctive and impactful
                Logo Design.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LogoDev;
