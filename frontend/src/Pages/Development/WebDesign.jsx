import React from "react";
import "././Allconstants/developer.css";
import { webDes1, webDes2 } from "../../Assets/Index";
import { Data } from "./Allconstants/WebContstant";
const WebDesign = () => {
  return (
    <>
      <section className="webdesign p-5 ">
        <div className="container">
          <div className="row ">
            <h1 className="h1 heading">Web Design</h1>
            <h3 className="h3 subheading">
              Deepnap Softech: Crafting Exceptional Website Design Solutions
            </h3>
            <p
              style={{ fontSize: "20px ", color: "gray", textAlign: "justify" }}
            >
              In the ever-evolving digital landscape, where an online presence
              is paramount for businesses and individuals alike, finding a
              reliable partner to transform your vision into a captivating
              reality is crucial. Deepnap Softech is your trusted source for
              cutting-edge Website Design and Web Development services, where
              innovation, creativity, and technical prowess converge to deliver
              outstanding digital solutions.
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
                    <img src={webDes1} alt="image" />
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
                  At Deepnap Softech, we understand that a website is often the
                  first point of interaction between your brand and its
                  audience. Our expert team of designers is dedicated to
                  creating visually stunning and immersive web experiences that
                  leave a lasting impression. We pride ourselves on our ability
                  to blend aesthetics with functionality seamlessly.
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
                    <img src={webDes2} alt="image" />
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

              <p
                style={{
                  fontSize: "20px ",
                  color: "gray",
                  textAlign: "center",
                }}
              >
                Experience the Deepnap Softech difference today and embark on a
                journey towards digital success with unmatched Website Design
                and Web Development services
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebDesign;
