import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { base_url } from "../utils/base_url";
import { useNavigate } from "react-router-dom";
const Quotes = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [city, setcity] = useState("");
  const [requirement, setrequirement] = useState("");

  const navigate=useNavigate("");
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

  const submitQuotes = async () => {
    try {
      const responses = await axios.post(`${base_url}/admin/quotadmin`, {
        name,
        email,
        phone,
        city,
        requirement,
      });
      console.log(responses);

      if (responses.data.success) {
        navigate("/message")
        // toast.success(
        //   "Your booking has been successful for the demo! Thank you for expressing interest in our digital product. You can expect a call from one of our knowledgeable professionals within the next 24 hours."
        // );
      } else {
        toast.error("Booking failed. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    }

    console.log(name, email, phone, city, requirement);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitQuotes();
  };
  return (
    <>
      <section className="page-hero d-flex align-items-center " id="page-hero">
        <div className="overlay-photo-image-bg background-image " style={{}}>
          <div className="container">
            <div className="row justify-content-center align-items-center ">
              <div
                className=" max-sm:w-[100%] lg:w-[40%]"
                style={{ marginTop: "100px" }}
              >
                <div
                  className="form-containerr border max-sm:w-[100%] lg:w-[100%]  "
                  style={{
                    border: "1px solid white",
                    boxShadow: "1px 1px 10px 2px white",
                    height: "600px",
                  }}
                >
                  <p className="title mt-3 login-box">Book a Demo</p>
                  <form className="form">
                    <div className="input-group">
                      <label htmlFor="username">Name</label>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder=""
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                      />
                    </div>
                    <div className="input-group">
                      <label htmlFor="username">Email</label>
                      <input
                        type="text"
                        value={email}
                        name="username"
                        id="username"
                        placeholder=""
                        onChange={(e) => setemail(e.target.value)}
                      />
                    </div>
                    <div className="input-group">
                      <label htmlFor="username">Phone</label>
                      <input
                        type="text"
                        value={phone}
                        name="username"
                        id="username"
                        placeholder=""
                        onChange={(e) => setphone(e.target.value)}
                      />
                    </div>
                    <div className="input-group">
                      <label htmlFor="username">City</label>
                      <input
                        type="text"
                        value={city}
                        name="username"
                        id="username"
                        placeholder=""
                        onChange={(e) => setcity(e.target.value)}
                      />
                    </div>
                    <div className="input-group">
                      <label htmlFor="password">Requirement</label>
                      <select
                        name="requirement"
                        id="requirement"
                        value={requirement} // Bind the value to the state
                        onChange={(e) => setrequirement(e.target.value)}
                      >
                        {requirements.map((val, id) => (
                          <option
                            key={id}
                            value={val.text}
                            className="capitalize"
                          >
                            {val.text}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div
                      className="anchor"
                      onClick={(e) => handleSubmit(e)}
                      style={{ cursor: "pointer" }}
                    >
                      Submit
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Quotes;
