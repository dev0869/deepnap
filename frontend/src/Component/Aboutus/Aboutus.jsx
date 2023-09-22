import React from "react";
import { FaMedal, FaMapMarkedAlt, FaGamepad, FaUserAlt } from "react-icons/fa";
import { GiLifeSupport, GiSupersonicArrow } from "react-icons/gi";
import { TbSettingsCode } from "react-icons/tb";
import { BiSolidBookContent } from "react-icons/bi";
import CountUp from "react-countup";
import "./About.css";

const About = () => {
  const employes = [
    { name: "Deepak Sharma", post: "CEO" },
    { name: "Pankaj Kumar Shukla", post: "CTO" },
    { name: "Yatish Sharma", post: "CMO" },
    { name: "Kiara Chauhan", post: "HR" },
    { name: "Rakesh Agrawat", post: "Floor Manager" },
  ];

  const developers = [
    { name: "Pankaj Khushwah", post: "Sr. Developer" },
    { name: "Shekhar Rana", post: "Sr. Developer" },
    { name: "Devesh Bisht", post: "Sr. Developer" },
    { name: "Soni Mouryavanshi ", post: "Jr. Developer" },
    { name: "Joaseph Fransis", post: "Jr. Developer" },
    { name: "Manish Bisht", post: "Jr. Developer" },
    { name: " Sahil Diwakar", post: "Video Editor" },
    { name: " Vikas Gupta", post: "Sr. Team Leader" },
    { name: " Ashok", post: " Team Leader" },
    { name: "Ritik Chauhan", post: "Staff" },
  ];

  return (
    <>
      <section
        className="about mega-section "
        style={{ background: "#060922" }}
        id="about"
      >
        <div className="container">
          <div className="row p-5">
            <div className="sec-heading  mb-4">
              <div
                className="content-area d-flex  justify-content-center align-items-center flex-column"
                style={{ width: "100%" }}
              >
                <span className="pre-title wow fadeInUp" data-wow-delay=".2s">
                  about Us
                </span>
                <h2
                  className="title text-white"
                  data-wow-delay=".4s"
                  style={{ width: "60%" }}
                >
                  Transforming Faridabad & Delhi NCR with Innovative
                  <span className="featured-text">
                    &nbsp; Website Design and Web Development.
                  </span>
                </h2>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-12 col-xl-6"
              data-wow-delay="0.6s"
              style={{ marginTop: "50px" }}
            >
              <div className="text-area ">
                <p className="about-text " style={{}}>
                  Welcome to Deepnap Softech, a driving force in digital
                  evolution and innovation based in Faridabad & Delhi NCR. Our
                  focus on website design and web development serves as a
                  catalyst for businesses, bridging the gap between creativity
                  and technology to transform digital landscapes. As we journey
                  together, know that our destination is your digital triumph.
                  It's a place where your brand shines brightly, your message
                  resonates powerfully, and your goals are realized with
                  precision. We invite you to join us on this transformative
                  expedition, where the horizon is limitless, and the
                  opportunities are boundless. Together, we'll uncover new
                  horizons, navigate uncharted waters, and ultimately transform
                  possibilities into the palpable reality of your digital
                  success.
                </p>
              </div>
            </div>
            <div
              className="col-lg-6 col-xl-6 col-sm-12 col-md-6  mt-4 d-flex align-items-center justify-content-center "
              data-wow-delay="0.2s"
            >
              <img
                className="about-img img-fluid   md:top-[-160px] "
                loading="lazy"
                src="https://amincodes.com/html/one-pages/flex-it/assets/images/about/3.png"
                alt="Our vision"
              />
            </div>
          </div>
          <div className="info-items-list">
            <div className="row">
              <div className="col-md-6">
                <div className="info-item">
                  <FaMedal className="info-icon" />
                  <div className="info-content">
                    <h5 className="info-title">Our Vision</h5>
                    <p className="info-text">
                      At Deepnap Softech, our vision is clear—to create a
                      digital world where innovation knows no bounds. We
                      envision a future where every business, regardless of
                      size, harnesses the power of a strong online presence.
                      Leveraging our prowess in website design, web development,
                      digital marketing, brand building, online reputation
                      management, software development, and e-commerce website
                      development, we intricately weave a tapestry of services
                      that not only enhance your online presence but also
                      elevate your brand's identity, we are committed to making
                      this vision a reality.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="info-item">
                  <FaGamepad className="info-icon" />
                  <div className="info-content">
                    <h5 className="info-title ">Our Mission</h5>
                    <p className="info-text">
                      Our mission is to serve as the dynamic bridge between
                      boundless creativity and cutting-edge technology. With a
                      comprehensive approach encompassing captivating website
                      design, seamless web development, strategic digital
                      marketing, robust brand building, meticulous online
                      reputation management, innovative software development,
                      and transformative e-commerce website development, we
                      channel our efforts into bringing your unique ideas to
                      life. Our ultimate goal is to craft immersive digital
                      experiences that not only capture attention but also
                      deeply engage, leaving an indelible and resonating impact
                      on your audience's hearts and minds.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="info-item">
                  <FaMapMarkedAlt className="info-icon" />
                  <div className="info-content">
                    <h5 className="info-title">Our Approach</h5>
                    <p className="info-text">
                      Partnering with us means unlocking a world of
                      possibilities. Experience the convenience and At Deepnap
                      Softech, our approach to tackling challenges in the
                      dynamic digital landscape is a harmonious blend of
                      innovation, expertise, and strategic thinking. We pride
                      ourselves on a multidimensional approach that marries the
                      realms of website design, web development, digital
                      marketing, brand building, and more, to sculpt
                      forward-thinking solutions that seamlessly adapt to the
                      ever-evolving needs of our diverse clientele. Our journey
                      begins by immersing ourselves in your challenges. We don't
                      just see isolated issues; we view the bigger picture,
                      understanding how each element intersects and impacts the
                      other.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="info-item">
                  <GiLifeSupport className="info-icon" />
                  <div className="info-content">
                    <h5 className="info-title">Our Core Services </h5>
                    <p className="info-text">
                      Our spectrum of services represents the pulse of modern
                      business transformation. Through captivating website
                      design and seamless web development, we craft the
                      foundation of your digital presence. With Digital
                      Marketing strategies that resonate and brand building that
                      forges lasting identities, we shape your digital
                      narrative. Our mastery in Online Reputation Management
                      safeguards your image while Software Development creates
                      tailored solutions that drive efficiency. Finally,
                      E-Commerce Website Development redefines the online
                      marketplace, putting your products and services in the
                      global spotlight.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}

          <div className="content-block">
            <div className="row ">
              <div
                className="col-lg-6 d-flex align-items-center about-col wow fadeInUp  "
                data-wow-delay="0.2s"
              >
                <div className="img-area  d-flex gap-[30px] flex-column" style={{ zIndex: "1" }}>
                  <div className="image  mb-5" data-tilt="">
                    <img
                      className="about-img img-fluid"
                      loading="lazy"
                      src="https://amincodes.com/html/one-pages/flex-it/assets/images/about/1.png"
                      alt="about"
                    />
                  </div>
                  <div className="image border mt-5" data-tilt="">
                    <img
                      className="about-img img-fluid"
                      loading="lazy"
                      src="https://media.istockphoto.com/id/496280806/photo/computer-keyboard-about-us.jpg?s=612x612&w=0&k=20&c=g8mfKNgYDzOzuekpoKwviAJ0bAt7LubJ2bRf7adu4Wc="
                      alt="abouthf"
                    />
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 d-flex align-items-center about-col pad-start wow fadeInUp mt-5"
                data-wow-delay="0.6s"
              >
                <div className="text-area">
                  <div className="sec-heading light-title">
                    <div className="content-area">
                      <span
                        className="pre-title wow fadeInUp"
                        data-wow-delay=".2s"
                      >
                        why choose us
                      </span>
                      <h2
                        className="title wow fadeInUp"
                        data-wow-delay=".4s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.4s",
                          animationName: "fadeInUp",
                        }}
                      >
                        Why our <span className="hollow-text">customers</span>{" "}
                        choose <span className="featured-text">working</span>{" "}
                        with us
                      </h2>
                    </div>
                  </div>
                  <p className="about-text" style={{ textAlign: "justify" }}>
                    We don't believe in one-size-fits-all solutions. Our clients
                    choose us because we listen, understand, and craft tailored
                    solutions that align precisely with their unique goals,
                    challenges, and aspirations. From inception to execution,
                    our comprehensive suite of services empowers clients to find
                    everything they need under one roof. Our holistic expertise
                    covers everything from web development to digital marketing,
                    making us a one-stop solution hub. With us, clients discover
                    a collaborative journey that leads to digital growth,
                    innovation, and a future where their success knows no
                    bounds.
                  </p>
                  <div className="info-items-list">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="info-item">
                          <span className="info-number">01.</span>
                          <div className="info-content">
                            <h5 className="info-title">latest technologies</h5>
                            <p className="info-text">
                              Explore a realm of innovation with Deepnap
                              Softech. Our expertise spans across a spectrum of
                              the latest technologies including REACT JS, VUE
                              JS, NEXT JS, EXPRESS JS, NODE JS, MONGO DB,
                              FLUTTER & DART, and WORDPRESS. We're not just
                              about code – we specialize in Responsive Web
                              Design, Web Components, Graphics Designing, and
                              the art of Digital Marketing. From SEO to SMO, and
                              even software development, we harness these tools
                              to craft digital solutions that stand as a
                              testament to technology's transformative power.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="info-item">
                          <span className="info-number">02.</span>
                          <div className="info-content">
                            <h5 className="info-title">unique solutions</h5>
                            <p className="info-text">
                              At Deepnap Softech, we're not confined by
                              templates. We specialize in understanding your
                              vision and molding designs to match your demand.
                              Our commitment to Unique Solutions means that your
                              digital footprint will be as distinctive as your
                              business itself. Share your ideas, and we'll shape
                              them into a digital reality that's uniquely yours.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="info-item">
                          <span className="info-number">03.</span>
                          <div className="info-content">
                            <h5 className="info-title">powerful strategies</h5>
                            <p className="info-text">
                              Choosing us means gaining access to a holistic
                              digital ecosystem. We seamlessly integrate
                              "Website Design," "Web Development," "Digital
                              Marketing," "Brand Building," “Public Relations”,
                              “Online Reputation Management “and more, offering
                              a comprehensive suite of services that work in
                              harmony to elevate your brand and online presence.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cta-area">
                    <a className="btn-solid" href="#0">
                      get in touch
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* employes */}
      <div className="meet p-3" style={{ background: "rgb(16 28 54)" }}>
        <div className="container">
          <div className="row justify-content-center gap-4 text-center">
            <h1 className="text-slate-300 h1 font-serif">Meet Our Team</h1>
            {employes.map((val, id) => {
              return (
                <>
                  <div
                    className=" shadow-md border text-center text-white py-2   border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700"
                    style={{ background: "rgb(16 28 54)", width: "300px" }}
                  >
                    <h2 className="h2 text-slate-400 font-serif">{val.post}</h2>
                    <h4 className="h4 font-mono ">{val.name}</h4>
                  </div>
                </>
              );
            })}

            {developers.map((val, id) => {
              return (
                <>
                  <div
                    className=" shadow-md border text-center text-white py-3   border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700"
                    style={{ background: "rgb(16 28 54)", width: "300px" }}
                  >
                    <h2 className="h2 text-slate-400  font-serif">
                      {val.post}
                    </h2>
                    <h4 className="h4 font-mono">{val.name}</h4>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>

      {/* details */}
      <section className="stats js-stats-counter mega-section">
        <div
          className="overlay-photo-image-bg"
          style={{
            backgroundImage:
              'url("https://amincodes.com/html/one-pages/flex-it/assets/images/sections-bg-images/pattern-bg-3.jpg")',
            opacity: "0.2",
          }}
        ></div>
        <div className="container">
          <div className="stats-inner" style={{ marginTop: "-310px" }}>
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-3  stat-box">
                <div
                  className="stat-box-inner  d-flex align-items-center flex-column justify-content-center"
                  data-tilt="data-tilt"
                >
                  <TbSettingsCode className="stat-icon " />
                  <p className="stat-num">
                    <span
                      className="counter"
                      data-from="10"
                      data-to="750"
                      data-speed="3000"
                      data-refresh-interval="50"
                    >
                      <CountUp
                        start={0}
                        end={100}
                        duration={5}                      
                      />
                    </span>
                    <span className="sign">+</span>
                  </p>
                  <span className="stat-desc">finished projects</span>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3 stat-box">
                <div
                  className="stat-box-inner d-flex align-items-center flex-column justify-content-center"
                  data-tilt="data-tilt"
                >
                  <BiSolidBookContent className="stat-icon" />
                  <p className="stat-num">
                    <span
                      className="counter"
                      data-from="10"
                      data-to="750"
                      data-speed="3000"
                      data-refresh-interval="50"
                    ><CountUp
                    start={0}
                    end={30}
                    duration={5}                      
                  />
                    </span>
                    <span className="sign">+</span>
                  </p>
                  <span className="stat-desc">Created Jobs </span>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3 stat-box">
                <div
                  className="stat-box-inner d-flex align-items-center flex-column justify-content-center"
                  data-tilt="data-tilt"
                >
                  <FaUserAlt className="stat-icon" />
                  <p className="stat-num">
                    <span
                      className="counter"
                      data-from="10"
                      data-to="750"
                      data-speed="3000"
                      data-refresh-interval="50"
                    >
                      <CountUp
                        start={0}
                        end={90}
                        duration={5}                      
                      />
                    </span>
                    <span className="sign">+</span>
                  </p>
                  <span className="stat-desc"> Happy Customers</span>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3 stat-box">
                <div
                  className="stat-box-inner d-flex align-items-center flex-column justify-content-center"
                  data-tilt="data-tilt"
                >
                  <GiSupersonicArrow className="stat-icon" />
                  <p className="stat-num">
                    <span
                      className="counter"
                      data-from="10"
                      data-to="750"
                      data-speed="3000"
                      data-refresh-interval="50"
                    >
                     <CountUp
                        start={0}
                        end={25}
                        duration={5}                      
                      />
                    </span>
                    <span className="sign">+</span>
                  </p>
                  <span className="stat-desc"> Technologies have</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
