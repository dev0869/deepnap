import React from "react";
import {
  FaRegPaperPlane,
  FaSearchDollar,
  FaRegCreditCard,
  FaRegUserCircle,
  FaPaperPlane,
  FaRegLightbulb,
} from "react-icons/fa";
import { BsJournalCode } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import {} from "react-icons/fa";
const ServicesPage = () => {
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
    {
      id: 7,
      Service: "SEM",
      data: "At Deepnap Softech, we specialize in integrating website design and web development into SEM strategies that amplify your digital reach. Partner with us to unlock the full potential of SEM and achieve digital success that resonates with your audience.",
      icons: <FaSearchDollar size={40} />,
    },

    {
      id: 8,
      Service: "SEO",
      data: "SEO, or Search Engine Optimization, is the cornerstone that enhances both website design and web development to improve your online presence. By strategically integrating relevant keywords and optimizing various elements of your website, SEO ensures your online platform is easily discoverable by search engines and your target audience.",
      icons: <FaRegPaperPlane size={40} />,
    },
    {
      id: 9,
      Service: "CRM Development",
      data: "Deepnap Softech specializes in this integrated approach, redefining customer interactions through CRM Development that harmonizes website design and web development. CRM Development streamlines workflows, automates processes, and empowers your teams to deliver prompt, efficient customer service.",
      icons: <FaRegCreditCard size={40} />,
    },
    {
      id: 10,
      Service: "Logo Design",
      data: "A logo speaks volumes about your brand. It's the face that greets your audience, telling a story of your values and mission. At Deepnap Softech, we understand the intricate connection between Logo Design, website design, and web development.",
      icons: <FaRegCreditCard size={40} />,
    },
    {
      id: 11,
      Service: "E-Commerce Website Development",
      data: "E-commerce Website Development merges the worlds of website design and web development, empowering your business to thrive in the competitive online market. At Deepnap Softech, we specialize in creating e-commerce experiences that elevate your brand, engage customers, and drive e-commerce success.",
      icons: <FaRegCreditCard size={40} />,
    },
    {
      id: 12,
      Service: "Software Development",
      data: " Software development is the dynamic process of conceptualizing, creating, and refining the digital frameworks that underpin both website design and web development. It involves crafting intricate codes and functional architectures to bring captivating designs to life and ensure seamless, efficient user experiences.",
      icons: <FaRegCreditCard size={40} />,
    },
    {
      id: 13,
      Service: "App Development",
      data: "App Development is the art of crafting versatile, user-centric applications that seamlessly integrate with both website design and web development. It involves the creative process of designing, coding, and refining applications that extend your digital reach beyond websites.",
      icons: <FaRegCreditCard size={40} />,
    },
    {
      id: 14,
      Service: "Meta Ads",
      data: "Meta Ads, a dynamic form of online advertising, collaborate harmoniously with the art of website design and the precision of web development to create a robust digital strategy that propels your brand's visibility and engagement to new heights.",
      icons: <FaRegCreditCard size={40} />,
    },
    {
      id: 15,
      Service: "Google Ads",
      data: "Google Ads is a dynamic marketing tool that merges the creative elements of website design with the technical prowess of web development, propelling brands to the forefront of online visibility and engagement.",
      icons: <FaRegCreditCard size={40} />,
    },
  ];
  return (
    <>
      <section
        className="servicess services-boxed mega-section"
        id="services"
        style={{ background: "#060922", padding: "20px" }}
      >
        <div className="container">
          <div className="sec-headings d-flex flex-column align-items-center">
            <div
              className="content-area text-center"
              style={{ maxWidth: "850px", color: "white", lineHeight: "1.5" }}
            >
              <h1 className="pre-titles wow fadeInUp h1" data-wow-delay=".2s">
                Our Services
              </h1>
              <h2 className="title wow fadeInUp m-2" data-wow-delay=".4s">
                <span className="hollow-text">
                  Empowering Brands Digitally: Your Destination for Expert
                  Website Design and Web Development Our Services Redefine
                  Digital Landscapes
                </span>
              </h2>
              <p
                className="subtitle wow fadeInUp mt-4 p-3 "
                data-wow-delay=".6s"
                style={{ border: "1px solid white", borderRadius: "15px" }}
              >
                Our Services encompass a dynamic spectrum, including Website
                Design and Web Development, Brand Building, Digital Marketing,
                Software Development, and Online Reputation Management we craft
                your brand's journey through these services, carving a unique
                path to success in the vibrant domains of Faridabad & Delhi NCR.
              </p>
            </div>
          </div>

          <div className="row mt-4">
            {deepnapServices.map((val) => (
              <div className="col-sm-6 col-md-4 d-flex mb-4" key={val.id}>
                <div
                  className="card text-center homesCards w-100"
                  style={{
                    background: "#101c36",
                    borderRadius: "1rem",
                    border: "none",
                  }}
                >
                  <div className="card-body">
                    <span className="d-flex justify-content-center">
                      {val.icons}
                    </span>
                    <span className="card-title">{val.Service}</span>
                    <p className="card-text mt-3">{val.data}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
