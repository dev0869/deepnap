import React, { useState } from "react";
import { TbBrand4Chan } from "react-icons/tb";
import { BiSolidInstitution } from "react-icons/bi";
import { BsTextParagraph } from "react-icons/bs";
import { SiAzurefunctions } from "react-icons/si";
import { FaBuromobelexperte } from "react-icons/fa";
import { base_url } from "../../utils/base_url.js";
import axios from "axios";
import { toast } from "react-toastify";

const Formhome = () => {
  const data = [
    {
      icon: <TbBrand4Chan />,
      heading: "  Branding Elegance",
      para: " Your website is more than a digital address; it's an extension of your brand's identity. Our designers  meticulously infuse your brand's essence into every design  element, from color palettes to typography, ensuring a  cohesive and memorable brand experience.",
    },
    {
      icon: <BiSolidInstitution />,
      heading: " User-Centric Intuition",
      para: "Intuitive design is at the core of exceptional user  experiences. Deepnap Softech crafts user-centric interfaces  that effortlessly guide visitors through your digital   ecosystem, transforming casual browsers into engaged enthusiasts.",
    },
    {
      icon: <BsTextParagraph />,
      heading: "Emotionally Resonant Graphics",
      para: "  Visual storytelling has the power to evoke emotions. Our designers strategically incorporate graphics and imagery  that resonate with your target audience, forging a powerful emotional connection that lingers long after they've left your site.",
    },
    {
      icon: <SiAzurefunctions />,
      heading: " Design-Driven Functionality",
      para: "Visual storytelling has the power to evoke emotions. Our designers strategically incorporate graphics and imagery  that resonate with your target audience, forging a powerful emotional connection that lingers long after they've left  your site.",
    },
    {
      icon: <FaBuromobelexperte />,
      heading: "      User Experience Elevation",
      para: "Our synergy ensures that captivating design never compromises seamless functionality. Every user interaction  is carefully crafted, fostering engagement while  effortlessly guiding visitors toward key touchpoints.",
    },
  ];

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [city, setcity] = useState("");
  const [requirement, setrequirement] = useState("");

  const requirements = [
    { text: "-SELECT-", value: "" },
    { text: "Static web development", value: "swd" },
    { text: "dynamic web development", value: "dwd" },
    { text: "e-commerce web development", value: "ewd" },
    { text: "crm development", value: "crm" },
    { text: "software development", value: "sd" },
    { text: "appointment booking web development", value: "abwd" },
    { text: "digital marketing", value: "dm" },
    { text: "online reputaion management", value: "orm" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const responses = await axios.post(`${base_url}/admin/quotadmin`, {
        name,
        email,
        phone,
        city,
        requirement,
      });

      if (responses.data.success) {
        toast.success(
          "Your booking has been successful for the demo! Thank you for expressing interest in our digital product. You can expect a call from one of our knowledgeable professionals within the next 24 hours."
        );
      } else {
        toast.error("Booking failed. Please try again later.");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div className="bg-[#101c36]">
        <div className="container ">
          <h2 className="text-center text-white text-3xl lg:text-3xl xl:text-5xl py-12 h2">
            The Deepnap Softech Synergy:
            <br />{" "}
            <span className="hero-subtitle text-justify text-1xl lg:text-2xl xl:text-2xl  text-gray-400 ">
              Where Design Meets Developments
            </span>
          </h2>
          <div className="row ">
            <div className="max-sm:w-[100%] lg:w-[50%] xl:w-[50%] text-white py-2 px-4 lg:px-0 xl:px-0 lg:py-12 xl:py-12  ">
              <ul className="w-[100%]  ">
                {data.map((ele, index) => {
                  const { icon, para, heading } = ele;
                  return (
                    <div key={index}>
                      <li>
                        <div className="flex flex-col-reverse ">
                          <p className="hero-subtitle mt-2 text-1xl text-[#09aff4] ">
                            {heading}
                          </p>
                          <p
                            className="rounded-full"
                            style={{
                              width: "48px",
                              height: "10%",
                              color: "#09aff4",
                              fontSize: "25px",
                              border: "1px solid #09aff4",
                              padding: "11px",
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

            <div className=" max-sm:w-[100%] lg:w-[50%] xl:w-[50%] text-white ">
              <div className="form-containerr border max-sm:w-[100%] lg:w-[70%]  ">
                <p className=" mt-3 text-center text-3xl  font-bolder">
                  Booking Demo
                </p>
                <form className="form">
                  <div className="input-group">
                    <label className="text-lg" htmlFor="username">
                      Name
                    </label>
                    <input
                      className="text-lg"
                      type="text"
                      name="username"
                      id="username"
                      placeholder=""
                      value={name}
                      onChange={(e) => setname(e.target.value)}
                    />
                  </div>
                  <div className="input-group  mt-3">
                    <label className="text-lg" htmlFor="username">
                      Email
                    </label>
                    <input
                      className="text-lg"
                      type="text"
                      value={email}
                      name="username"
                      id="username"
                      placeholder=""
                      onChange={(e) => setemail(e.target.value)}
                    />
                  </div>
                  <div className="input-group  mt-3">
                    <label className="text-lg" htmlFor="username">
                      Phone
                    </label>
                    <input
                      className="text-lg"
                      type="text"
                      value={phone}
                      name="username"
                      id="username"
                      placeholder=""
                      onChange={(e) => setphone(e.target.value)}
                    />
                  </div>
                  <div className="input-group mt-3">
                    <label className="text-lg" htmlFor="username">
                      City
                    </label>
                    <input
                      className="text-lg"
                      type="text"
                      value={city}
                      name="username"
                      id="username"
                      placeholder=""
                      onChange={(e) => setcity(e.target.value)}
                    />
                  </div>
                  <br />
                  <div className="input-group ">
                    <label className="text-lg" htmlFor="password">
                      Requirement
                    </label>
                    <select
                      className="text-lg"
                      name="requirement"
                      id="requirement"
                      value={requirement} // Bind the value to the state
                      onChange={(e) => setrequirement(e.target.value)}
                    >
                      {requirements.map((val, id) => (
                        <option
                          key={id}
                          value={val.text}
                          className="capitalize text-[16px] cursor-pointer p-2"
                        >
                          <p className="p-2 text-xl"> {val.text}</p>
                        </option>
                      ))}
                    </select>
                  </div>
                  <a
                    className="anchor"
                    style={{ cursor: "pointer" }}
                    onClick={(e) => handleSubmit(e)}
                  >
                    Submit
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Formhome;
