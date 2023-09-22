import React from "react";
import { webDev1, webDev2 } from "../../Assets/Index";
import { Data } from "./Allconstants/WebdevConstant";

const WebDev = () => {
  return (
    <>
      <section className="webdesign p-5 ">
        <div className="container">
          <div className="row ">
            <h1 className="h1 heading">Web Development </h1>
            <h3 className="h3 subheading">
              Deepnap Softech: Nurturing Digital Excellence through Web
              Development
            </h3>
            <p
              style={{ fontSize: "20px ", color: "gray", textAlign: "justify" }}
            >
              IIn the ever-evolving digital landscape, where the online presence
              of businesses and individuals is paramount, Deepnap Softech stands
              as a stalwart in the realm of Web Development. We are not just a
              company; we are architects of digital experiences, weaving
              intricate webs of functionality, interactivity, and innovation.
              Our passion lies in crafting bespoke digital solutions that
              empower our clients to thrive in the dynamic digital ecosystem.
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
                    <img src={webDev1} alt="image" />
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
                  Web Development is a multifaceted craft that goes beyond the
                  lines of code. It's an art that combines creativity with
                  technical acumen and a strategic mindset. Our Web Development
                  services span a wide spectrum, each tailored to meet the
                  unique needs of our clients:
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
                  The aesthetic face of your brand. Our designers meticulously
                  craft visually stunning websites that captivate audiences, all
                  while ensuring a seamless user experience.
                </p>
              </div>
              <div className="col-sm-12 col-lg-2 col-xl-3 partf flex  align-items-center">
                <div
                  className="cell-5 fx animated bounceIn"
                  data-animate="bounceIn"
                >
                  <a href="#" target="_blank">
                    <img src={webDev2} alt="image" />
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
              <h1 className="h1 text-center">Your Success, Our Purpose:</h1>
              <p
                style={{
                  fontSize: "20px ",
                  color: "gray",
                  textAlign: "center",
                }}
              >
                Your success is the heartbeat of our organization. We invest
                time in understanding your goals, challenges, and aspirations,
                tailoring our solutions to seamlessly align with your vision.
                Whether you're a startup taking your first digital steps or an
                established enterprise seeking to innovate, Deepnap Softech is
                your trusted partner on the path to digital excellence. Join us
                in the realm of endless digital possibilities, where creativity,
                innovation, and technical excellence converge. At Deepnap
                Softech, we're not just developers; we're architects of digital
                futures, crafting a world where every click, every interaction,
                and every pixel is a testament to our dedication to nurturing
                digital excellence through Web Development.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebDev;
