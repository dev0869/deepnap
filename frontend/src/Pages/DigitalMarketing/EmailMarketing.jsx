import React from "react";
import { email1, email2 } from "../../Assets/Index";
import { Data } from "./DigitalConstant/Emailconst";
const EmailMarketing = () => {
  return (
    <>
      <section className="webdesign p-5 ">
        <div className="container">
          <div className="row ">
            <h1 className="h1 heading">Email Marketing </h1>
            <h3 className="h3 subheading">
              Deepnap Softech: Elevating Business Growth Through Email Marketing
              Mastery
            </h3>
            <p
              style={{ fontSize: "20px ", color: "gray", textAlign: "justify" }}
            >
              In the ever-evolving landscape of digital marketing, where
              building and nurturing customer relationships is paramount,
              Deepnap Softech emerges as a beacon of expertise in the realm of
              Email Marketing. We are more than a company; we are architects of
              digital marketing solutions that leverage the power of email to
              help businesses connect with their audiences, drive engagement,
              and achieve remarkable growth in the digital age.
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
                    <img src={email1} alt="image" />
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
                  Email Marketing is more than just sending messages; it's a
                  finely tuned blend of creativity, strategy, and data-driven
                  precision. It's about crafting compelling email campaigns that
                  resonate with subscribers, deliver value, and drive
                  conversions. Our Email Marketing services encompass a
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
                  We craft tailored email marketing strategies aligned with your
                  specific business objectives, whether it's increasing brand
                  awareness, driving website traffic, generating leads, or
                  boosting sales. Our experts delve deep into your target
                  audience and competitive landscape to devise data-backed plans
                  that ensure your email campaigns deliver stellar results.
                </p>
              </div>
              <div className="col-sm-12 col-lg-2 col-xl-3 partf flex  align-items-center">
                <div
                  className="cell-5 fx animated bounceIn"
                  data-animate="bounceIn"
                >
                  <a href="#" target="_blank">
                    <img src={email2} alt="image" />
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
                landscape, tailoring our Email Marketing solutions to seamlessly
                align with your vision. Whether you're a startup looking to make
                a digital impact or an established business aiming to enhance
                your customer relationships, Deepnap Softech is your trusted
                partner on the path to Email Marketing mastery. Join us in the
                realm of limitless digital marketing possibilities, where
                creativity, strategy, and precision converge. At Deepnap
                Softech, we're not just Email Marketing specialists; we're
                architects of digital marketing success, forging a world where
                every email campaign is a testament to our unwavering dedication
                to excellence in Email Marketing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmailMarketing;
