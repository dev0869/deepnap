import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { BsJournalCode } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import {
  FaPaperPlane,
  FaRegLightbulb,
  FaRegCreditCard,
  FaRegUserCircle,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Services = () => {
  const deepnapServices = [
    {
      id: 1,
      Service: "Web Development",
      data: "From e-commerce platforms to interactive web applications, our Web Development expertise transforms your digital vision into reality. We thrive on turning complex ideas into elegant solutions, utilizing the latest technologies and best practices to create websites that are robust, secure, and scalable.",
      icons: <BsJournalCode size={40} />,
    },
    {
      id: 2,
      Service: "Website Design",
      data: "Responsive and user-friendly, our Website Design ensures that your platform is accessible and functional across various devices. Whether on desktop or mobile, your audience enjoys a consistent and compelling experience that fosters deeper connections and drives conversions.",
      icons: <BiEdit size={40} />,
    },
    {
      id: 3,
      Service: "Digital Marketing",
      data: "Beyond captivating Website Design and flawless Web Development, our Digital Marketing expertise adds the final touch to your digital journey. We employ a tailored blend of SEO, PPC, and engaging content strategies to amplify your brand's visibility and impact. Together, we navigate the dynamic digital ecosystem of Faridabad & Delhi NCR.",
      icons: <FaPaperPlane size={40} />,
    },
    {
      id: 4,
      Service: "Brand Building",
      data: "From visual elements to messaging consistency, our Brand Building approach complements the technical prowess of Website Design and Web Development. Together, we shape a brand that not only resonates but also leaves a lasting imprint in the ever-evolving digital landscape",
      icons: <FaRegLightbulb size={40} />,
    },
    {
      id: 5,
      Service: "ORM",
      data: "In today's interconnected world, your online reputation is invaluable. Our Online Reputation Management services focus on building, maintaining, and enhancing your brand's image beyond Website Design and Web Development.",
      icons: <FaRegCreditCard size={40} />,
    },
    {
      id: 6,
      Service: "PR",
      data: "Deepnap Softech proudly presents strategic Public Relations services, seamlessly fused with our core expertise in Website Design and Web Development. Ignite your online impact with resonant narratives We empower brands with excellence, creativity, and strategic prowess, forging a path to digital eminence in Faridabad & Delhi NCR.",
      icons: <FaRegUserCircle size={40} />,
    },
  ];

  return (
    <>
      <section
        className="services services-boxed mega-section"
        id="services"
        style={{ background: "#060922", padding: "20px" }}
      >
        <div className="container">
          <div className="flex ">
            <div
              style={{ maxWidth: "850px", color: "white", marginTop: "12px" }}
            >
              <h1 className=" mt-5 font-bold text-white text-3xl lg:text-3xl xl:text-5xl">
                .Our Services.
              </h1>

              <p className=" hero-subtitle text-justify text-lg  lg:text-lg xl:text-xl text-gray-400">
                Empowering Brands Digitally: Your Destination for Expert Website
                Design and Web Development Our Services Redefine Digital
                Landscapes.
              </p>
            </div>
          </div>
          <br />
          <p
            className="p-3   lg:p-3 xl:p-3 text-white  "
            style={{ border: "1px solid #6B7485", borderRadius: "10px" }}
          >
            Our Services encompass a dynamic spectrum, including Website Design
            and Web Development, Brand Building, Digital Marketing, Software
            Development, and Online Reputation Management we craft your brand's
            journey through these services, carving a unique path to success in
            the vibrant domains of Faridabad & Delhi NCR.
          </p>
          <br />

          <div className="row   d-flex justify-content-center ">
            {deepnapServices.map((val) => (
              <div
                className="col-sm-4 col-md-4 col-xl-4 d-flex mb-4 "
                key={val.id}
              >
                <div
                  className="card text-center homesCards  w-65 flex justify-content-center align-items-center"
                  style={{
                    background: "#101c36",
                    borderRadius: "12px",
                    border: "none",
                  }}
                >
                  <div className="card-body border rounded-md">
                    <div className="mt-1 gap-2 flex flex-col">
                      <span className="d-flex  justify-content-center">
                        {val.icons}
                      </span>
                      <p className="card-title  text-white text-xl  lg:text-2xl xl:text-2xl">
                        {val.Service}
                      </p>
                    </div>

                    <p
                      className="card-text text-justify text-lg  lg:text-1xl xl:text-xl text-gray-400"
                      style={{ marginTop: "15px" }}
                    >
                      {val.data}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="cta-areas wow fadeInUp mt-4 d-flex justify-content-center "
          data-wow-delay=".8s"
        >
          <NavLink
            className="cta-btn btn-solid"
            to="/servicePage"
            style={{
              background: "#09aff4",
              borderRadius: "5px",
              padding: "0.75rem 2.25rem",
              fontSize: "1.1rem",
              fontWeight: "500",
              boxShadow: "0px 3px 10px -5px rgba(6, 9, 22, 0.15)",
              transition: "all 0.3s ease-in-out 0s",
              cursor: "pointer",
            }}
          >
            all services <FaLongArrowAltRight size={25} />
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default Services;
