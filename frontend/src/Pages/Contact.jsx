import React, { useState } from "react";
import { MdLocationPin } from "react-icons/md";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import {
  BsTelephoneFill,
  BsFillEnvelopeOpenHeartFill,
} from "react-icons/bs";
import axios from "axios";
import { base_url } from "../utils/base_url";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [city, setcity] = useState("");
  

const handleConatact=async (e)=>{
  e.preventDefault();
  try {
    const data= await axios.post(`${base_url}/admin/fillcontact`,{name,email,phone,city});
    setcity("");
    setemail("");
    setname("");
    setphone("");
    console.log(data);
toast.success("success");
  } catch (error) {
     console.log(error);
      toast.error(error.response.data.message);
  }
}


  return (
    <>
      <div
        className="container-fluid"
        style={{
          backgroundImage:
            'url("https://amincodes.com/html/one-pages/flex-it/assets/images/sections-bg-images/pattern-bg-3.jpg")',
          height: "fit-content",
          padding: "10px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <div className="bgcol" style={{ width: "100%", padding: "10px" }}>
          <div className="row">
            
              <div
                className="col-sm-12 col-md-12 col-lg-6"
                style={{
                  display: "flex",
                  background: "#060922",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: "20px",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  padding: "50px",
                  height: "fit-content",
                }}
              >
                <div
                  className="stat-box-inner"
                  data-tilt="data-tilt"
                  style={{
                    border: "4px solid #09aff4",
                    background: "#060922",
                    color: "#FFF",
                    width: "250px",
                    textAlign: "center",
                    height: "250px",
                    padding: "15px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MdLocationPin
                    size={40}
                    style={{
                      fontSize: "3rem",
                      lineHeight: "1",
                      color: "#09aff4",
                      opacity: "0.65",
                      transition: "all 0.2s ease-in-out 0s",
                    }}
                  />

                  <span
                    className="stat-desc"
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: "400",
                      display: "block",
                      textTransform: "capitalize",
                      marginTop: "20px",
                    }}
                  >
                    5E/12BP, Block E, New Industrial Twp 5, New Industrial Town,
                    Faridabad, Haryana 121001
                  </span>
                </div>

                <div
                  className="stat-box-inner"
                  data-tilt="data-tilt"
                  style={{
                    border: "4px solid #09aff4",
                    background: "#060922",
                    color: "#FFF",
                    width: "250px",
                    textAlign: "center",
                    height: "250px",
                    padding: "15px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <BsTelephoneFill
                    size={40}
                    style={{
                      fontSize: "3rem",
                      lineHeight: "1",
                      color: "#09aff4",
                      opacity: "0.65",
                      transition: "all 0.2s ease-in-out 0s",
                    }}
                  />

                  <span
                    className="stat-desc"
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: "400",
                      display: "block",
                      textTransform: "capitalize",
                      marginTop: "50px",
                    }}
                  >
                    +91-7042707091,
                    <br />
                    <br />
                    +91-7042707092
                  </span>
                </div>

                <div
                  className="stat-box-inner"
                  data-tilt="data-tilt"
                  style={{
                    border: "4px solid #09aff4",
                    background: "#060922",
                    color: "#FFF",
                    width: "250px",
                    textAlign: "center",
                    height: "250px",
                    padding: "15px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TbDeviceLandlinePhone
                    size={40}
                    style={{
                      fontSize: "3rem",
                      lineHeight: "1",
                      color: "#09aff4",
                      opacity: "0.65",
                      transition: "all 0.2s ease-in-out 0s",
                    }}
                  />

                  <span
                    className="stat-desc"
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: "400",
                      display: "block",
                      textTransform: "capitalize",
                      marginTop: "50px",
                    }}
                  >
                    0129-400-1529
                  </span>
                </div>

                <div
                  className="stat-box-inner"
                  data-tilt="data-tilt"
                  style={{
                    border: "4px solid #09aff4",
                    background: "#060922",
                    color: "#FFF",
                    width: "250px",
                    textAlign: "center",
                    height: "250px",
                    padding: "15px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <BsFillEnvelopeOpenHeartFill
                    size={40}
                    style={{
                      fontSize: "1rem",
                      lineHeight: "1",
                      color: "#09aff4",
                      opacity: "0.65",
                      transition: "all 0.2s ease-in-out 0s",
                    }}
                  />

                  <span
                    className="stat-desc"
                    style={{
                      fontSize: "1rem",
                      fontWeight: "400",
                      display: "flex",
                      justifyContent: "center",
                      // alignContent:"center",
                      marginTop: "50px",
                    }}
                  >
                    support@deepnapsoftech.com <br />
                    <br />
                    enquiry@deepnapsoftech.com
                  </span>
                </div>
              </div>
            

            <div className="col-sm-12 col-md-12 col-lg-6 mt-2 ">
              <div
                className="form-contactus max-sm:w-[100%] md:w-[70%] lg:w-[70%] xl:w-[75%] "
                style={{
                  border: "1px solid white",
                  boxShadow: "1px 1px 10px 2px white",
                  height: "600px",
                }}
              >
                <p className="title mt-3 login-box">Contact us</p>
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
                      name="username"
                      id="username"
                      placeholder=""
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="username">Phone</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder=""
                      value={phone}
                      onChange={(e) => setphone(e.target.value)}
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="username">City</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder=""
                      value={city}
                      onChange={(e) => setcity(e.target.value)}
                    />
                  </div>

                  <a className="anchor" onClick={(e)=>handleConatact(e)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
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

export default Contact;

// https://nicepage.com/website-templates/preview/contact-info-block-287675?device=desktop
