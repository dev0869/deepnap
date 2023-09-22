import React, { useEffect } from "react";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { m1, m2, m3, m4, m5 } from "../../Assets/Index";

const Phone = () => {

  const data = [
    {
      icon: <MdOutlineSettingsSuggest />,
      heading: "  Mobile-Responsive Mastery",
      para: "At Deepnap Softech, we understand the paramount importance of mobile responsiveness. Our innovative website design ensures your site captivates visitors, regardless of their chosen device.",
    },
    {
      icon: <MdOutlineSettingsSuggest />,
      heading: "  Aesthetics Meets Strategy",
      para: "Our designs are a fusion of creativity and purpose. We meticulously tailor each element to convey your brand's essence, leaving a lasting imprint on your audience.",
    },
    {
      icon: <MdOutlineSettingsSuggest />,
      heading: " Conversion-Centric Approach",
      para: " Your website's success hinges on conversions. Our designs are strategically structured to guide users seamlessly towards your desired actions, boosting your conversion rates.",
    },
    {
      icon: <MdOutlineSettingsSuggest />,
      heading: " Seamless User Experience:",
      para: "Deepnap Softech's skilled web development team transforms designs into functional masterpieces. We meticulously code every element, from navigation to lightning-fast page loads, ensuring an intuitive and immersive user experience.",
    },
    {
      icon: <MdOutlineSettingsSuggest />,
      heading: "    Browser Compatibility",
      para: "Your website deserves to shine universally. Our developers rigorously test across browsers, guaranteeing consistent performance and aesthetics, no matter where your visitors come from.",
    },
    {
      icon: <MdOutlineSettingsSuggest />,
      heading: "  Future-Ready Scalability",
      para: "We envision beyond the present. Deepnap Softech's web development ensures your site is prepared for growth, with scalable architecture that maintains peak performance even as your traffic soars.",
    },
  ];

  const phonedata = [
    {
      image: m1,
      alt: "m1",
    },
    {
      image: m2,
      alt: "m2",
    },
    {
      image: m3,
      alt: "m3",
    },
    {
      image: m4,
      alt: "m4",
    },
    {
      image: m5,
      alt: "m5",
    },
  ];

  useEffect(() => {
    const carousel = new window.bootstrap.Carousel(
      document.getElementById("carouselExampleDark")
    );
  }, []);

  return (
    <>

      <div className="container-fluid " style={{ background: "#060922" }}>
        <div className="container ">
          <div className="row flex items-center">
            <h2 className="font-bold text-white  pt-4 text-3xl lg:text-3xl xl:text-5xl text-center">
              Why Deepnap Softech for Website Design & Web Development?
            </h2>
            <div className="col-md-12 mt-5 mb-5 flex items-center text-white">
              <section id="default row" className="row gap-7 lg:gap-0 xl:gap-0">
                <div className="col-md-4 col-sm-12 p-4 lg:p-5 xl:p-5">
                  <ul>
                    {data.splice(0, 3).map((ele, index) => {
                      const { icon, para, heading } = ele;
                      return (
                        <div key={index}>
                          <li>
                            <div className="flex flex-col-reverse ">
                              <p className="hero-subtitle mt-2 text-1xl text-[#09aff4] ">
                                {heading}
                              </p>
                              <p
                                style={{
                                  width: "8%",
                                  height: "10%",
                                  color: "#09aff4",
                                  fontSize: "45px",
                                }}
                              >
                                {icon}
                              </p>
                            </div>
                            <br />
                            <p className="hero-subtitle mt-[-15px] text-justify text-lg font-thin text-gray-100 ">
                              {para}
                            </p>
                          </li>
                          <br />
                        </div>
                      );
                    })}
                  </ul>
                </div>

                <div className="col-md-4 col-sm-12">
                  <div
                    id="carouselExampleDark"
                    className="carousel carousel-dark slide"
                    data-bs-ride="carousel"
                  >
                    <div
                      className="phone-carousel-container"
                      style={{
                        position: "relative",
                        width: "258px",
                        overflow: "hidden",
                        height: "520px",
                        display: "block",
                        top: "40px",
                        margin: "auto",
                      }}
                    >
                      <div
                        className="phone-frame"
                        style={{
                          background:
                            'url("http://www.webserviceprovider.in/images/phone-white.png")',
                          backgroundRepeat: "no-repeat",
                          backgroundPositionX: "-27px",
                          position: "absolute",
                          top: "0",
                          left: "0",
                          width: "100%",
                          height: "100%",
                          overflow: "hidden",
                          zIndex: "2",
                        }}
                      ></div>
                      <div
                        className="carousel-container"
                        style={{
                          position: "absolute",
                          left: "12px",
                          width: "235px",
                          height: "400px",
                          top: "54px",
                          overflow: "hidden",
                        }}
                      >
                        <div className="carousel-inner">
                          {phonedata.map((val, id) => (
                            <div
                              key={id}
                              className={`carousel-item ${
                                id === 0 ? "active" : ""
                              }`}
                              data-bs-interval="2000"
                            >
                              <img
                                src={val.image}
                                className="d-block w-100"
                                alt={`Slide ${id}`}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-sm-12 p-4 lg:p-5 xl:p-5">
                  <ul>
                    {data.splice(0, 3).map((ele, index) => {
                      const { icon, para, heading } = ele;
                      return (
                        <div key={index}>
                          <li>
                            <div className="flex flex-col-reverse ">
                              <p className="hero-subtitle mt-2 text-1xl text-[#09aff4] ">
                                {heading}
                              </p>
                              <p
                                style={{
                                  width: "8%",
                                  height: "10%",
                                  color: "#09aff4",
                                  fontSize: "45px",
                                }}
                              >
                                {icon}
                              </p>
                            </div>
                            <br />
                            <p className="hero-subtitle mt-[-15px] text-justify text-lg font-thin text-gray-100 ">
                              {para}
                            </p>
                          </li>
                          <br />
                        </div>
                      );
                    })}
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Phone;
