import React from "react";
import { crm1, crm2 } from "../../Assets/Index";
import { Data } from "./Allconstants/CrmConstant";
const Crm = () => {
  return (
    <>
      <section className="webdesign p-5 ">
        <div className="container">
          <div className="row ">
            <h1 className="h1 heading">CRM Development </h1>
            <h3 className="h3 subheading">
              Deepnap Softech: Elevating Business Relationships through CRM
              Development Excellence
            </h3>
            <p
              style={{ fontSize: "20px ", color: "gray", textAlign: "justify" }}
            >
              In today's competitive business landscape, where customer
              relationships are the cornerstone of success, Deepnap Softech
              emerges as a leading force in the world of CRM (Customer
              Relationship Management) Development. We are not just a company;
              we are architects of digital solutions that transform customer
              interactions into valuable, enduring relationships. As a dedicated
              CRM Development firm, we recognize that the heart of any thriving
              business lies in its ability to nurture, understand, and leverage
              customer relationships.
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
                    <img src={crm1} alt="image" />
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
                  CRM Development is more than software; it's an art that merges
                  technology with strategy, data with insights, and automation
                  with personalization. It's about creating a unified platform
                  that empowers businesses to streamline their operations,
                  enhance customer experiences, and make data-driven decisions.
                  Our CRM Development services encompass a comprehensive
                  spectrum, each meticulously designed to address unique needs
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
                  We specialize in crafting bespoke CRM solutions tailored to
                  your unique business requirements. From sales automation to
                  customer service management, our custom CRM systems are
                  designed to help you gain a competitive edge by enhancing
                  customer interactions and driving operational efficiency.
                </p>
              </div>
              <div className="col-sm-12 col-lg-2 col-xl-3 partf flex  align-items-center">
                <div
                  className="cell-5 fx animated bounceIn"
                  data-animate="bounceIn"
                >
                  <a href="#" target="_blank">
                    <img src={crm2} alt="image" />
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
              <h1 className="h1 text-center">Your Success, Our Passion:</h1>
              <p
                style={{
                  fontSize: "20px ",
                  color: "gray",
                  textAlign: "justify",
                }}
              >
                Your success is our mission. We invest time in understanding
                your customer relationship challenges, goals, and aspirations,
                tailoring our CRM development solutions to seamlessly align with
                your vision. Whether you're a growing startup or an established
                enterprise seeking to elevate your customer relationships,
                Deepnap Softech is your trusted partner on the path to CRM
                excellence. Join us in the realm of limitless customer
                possibilities, where technology, strategy, and
                customer-centricity converge. At Deepnap Softech, we're not just
                CRM developers; we're architects of lasting customer
                relationships, forging a world where every interaction is a
                testament to our dedication to excellence in CRM Development.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Crm;
