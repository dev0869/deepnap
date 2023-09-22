import React, { useState } from "react";
import { uploadDoc } from "../utils/uploadimg";
import axios from "axios";
import { base_url } from "../utils/base_url";
import { toast } from "react-toastify";
import { career } from "../Assets/Index";
const Career = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [resume, setresume] = useState("");
  const [designation, setdesignation] = useState("");
  const [isdisabled, setisdisabled] = useState(false);

  const designations = [
    { text: "Select Position you are applying for", value: "" },
    { text: "Web Designer", value: "WD" },
    { text: "Web Developer", value: "WBD" },
    { text: "Software Developer", value: "SD" },
    { text: "App Developer", value: "AD" },
    { text: "Hybrid Web Developer", value: "HWD" },
    { text: "Sales Executive", value: "SE" },
    { text: "Sales Manager", value: "SM" },
    { text: "Relationship Manager", value: "RM" },
    { text: "Business Analyst", value: "BA" },
  ];

  const handlecvupload = async (e) => {
    const file = [e.target.files[0]];
    try {
      setisdisabled(true);
      const res = await uploadDoc(file);
      setresume(res[0]);
      toast.success("your cv is uploaded successfully");
    } catch (error) {
      console.log(error.message);
    }
    setisdisabled(false);
  };

  const CareerDetails = async () => {
    console.log({ name, email, phone, resume, designation });
    try {
      const careerDetails = await axios.post(`${base_url}/admin/fillcareer`, {
        name,
        email,
        phone,
        resume,
        designation,
      });
      
    } catch (error) {
      console.log(error.response.data);
      toast.error(error.response.data.message);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isdisabled) {
      toast.info("Please wait your cv is uploading");
    } else {
      CareerDetails();
      toast.success("Your form is uploaded successfully");
      window.location.reload();
    }
  };
  return (
    <>
      <div
        className="section  bg-[#060922] text-white "
      >
        <div className="container">
          <div className="row ">
            <div className="col-sm-12 mb-2 text-center">
              <h1 className="h1 font-serif mt-4">Career</h1>
              <h3 className="h4 font-thin">
                You have landed on a perfect link in accelerating your career
                path!
              </h3>
            </div>
            <div className="col-sm-12 col-lg-6 col-md-6 pt-3 d-flex">
              <img src={career} alt="career" />
            </div>
            <div className="col-sm-12 col-lg-6 col-md-6   d-flex justify-content-center align-items-center flex-column pt-3">
              <div
                className=" max-sm:w-[100%] lg:w-[70%] "
                style={{ marginTop: "30px" }}
              >
                <div
                  className="form-containerr mb-5 max-sm:w-[100%] lg:w-[100%]"
                  style={{
                    border: "1px solid white",
                    boxShadow: "1px 1px 10px 2px white",
                    height: "600px",
                  }}
                >
                  <p className="title login-box">Apply For a Job</p>
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
                      <label htmlFor="email">Email</label>
                      <input
                        type="email" // Use 'email' input type for email fields
                        value={email}
                        name="email" // Change name to 'email'
                        id="email" // Change id to 'email'
                        placeholder=""
                        onChange={(e) => setemail(e.target.value)}
                      />
                    </div>
                    <div className="input-group">
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="tel" // Use 'tel' input type for phone fields
                        value={phone}
                        name="phone" // Change name to 'phone'
                        id="phone" // Change id to 'phone'
                        placeholder=""
                        onChange={(e) => setphone(e.target.value)}
                      />
                    </div>
                    <div className="input-group">
                      <label htmlFor="designation">Designation</label>
                      <select
                        name="designation"
                        id="designation"
                        onChange={(e) => setdesignation(e.target.value)}
                      >
                        {designations.map((val, id) => (
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
                    <div className="input-group">
                      <label>Upload your CV (PDF or image)</label>
                      <input
                        id="file"
                        type="file"
                        name="attachment"
                        onChange={handlecvupload}
                        accept="application/pdf,image/*" // Accept PDF and image files
                        required
                      />
                    </div>
                    <a
                      className="anchor"
                      onClick={(e) => handleSubmit(e)}
                      style={{ cursor: "pointer" }}
                    >
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
      </div>
    </>
  );
};

export default Career;
