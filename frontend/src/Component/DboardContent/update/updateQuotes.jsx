import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { base_url } from "../../../utils/base_url";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector,useDispatch } from "react-redux";
import {fetchQuote} from "../../../feature/quoteSlice" 

export default function UpdateQuote() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setphone] = useState("");
  const [city, setCity] = useState("");
  const [requirement, setRequire] = useState("");
  const [remark, setremark] = useState("");

  const location = useLocation().pathname.split("/");
  console.log(location);
  const params = location[location.length - 1];
  console.log(location[location.length - 1]);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const data = useLocation().state;
  console.log(data);


  // console.log(params._id);
  
  const getQuoteDetails = async () => {
    let quotedetail = await fetch(
      `${base_url}/admin/getupdatequotes/${params}`
    );
    quotedetail = await quotedetail.json();
    setName(quotedetail.name);
    setEmail(quotedetail.email);
    setphone(quotedetail.phone);
    setCity(quotedetail.city);
    setRequire(quotedetail.requirement);
    setremark(quotedetail.remark)
    console.log(quotedetail+'fssssssssssssssssss');
  };

  // const updateitem = async () => {
  //   const datainfo = {
  //     name,
  //     email,
  //     phone,
  //     city,
  //     requirement,
  //   };
  //   console.log(datainfo);
  //   let updateinfo = await axios.put(`${base_url}/admin/updatequotes/${params}`,{datainfo});
  //   updateinfo = await updateinfo.json();
  //   console.log(updateinfo);
  //   navigate("/admin/enquire");
  // };

  const updateitem = async () => {
    try {
      const datainfo = {
        name,
        email,
        phone,
        city,
        requirement,
        remark
      };

      console.log(datainfo);

      const updateinfo = await axios.put(
        `${base_url}/admin/updatequotes/${params}`,
        datainfo
      );
      console.log(updateinfo);
      console.log(updateinfo.data.message);
      if (!updateinfo.data.success) {
        toast.error(`${updateinfo.data.message}`);
      } else {
        toast.success(`${updateinfo.data.message}`);
        navigate("/admin/enquire");
      }
    } catch (error) {
      console.error("An error occurred while updating the quote:", error);
      toast.error(`${error}`);
    }
  };

  useEffect(() => {
    getQuoteDetails();
  }, []);


  useEffect(() => {
    dispatch(fetchQuote());
  }, []);


  return (
    <div className="flex items-center justify-center border  ">
      <div
        className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl z-[99] overflow-hidden border mt-4 py-5"
        style={{
          position: "relative",
          left: "130px",
          bottom: "20px",
          width: "78%",
          height: "fit-content",
        }}
      >
        <div>
          <div className="ml-10 ">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="updtbtn "
              style={{ marginLeft: "70px" }}
            />

            <br />
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="updtbtn "
              style={{ marginLeft: "75px" }}
            />

            <br />
            <label>Mobile:</label>
            <input
              type="tel"
              // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="xxx-xxx-xxxx"
              value={phone}
              onChange={(e) => {
                setphone(e.target.value);
              }}
              className="updtbtn"
              style={{ marginLeft: "65px" }}
            />

            <br />
            <label>City:</label>
            <input
              type="text"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
              className="updtbtn"
              style={{ marginLeft: "85px" }}
            />
            <br />
            <label style={{ display: "flex", alignItems: "center" }}>
              <span> Requirement</span>

              <input
                type="text"
                value={requirement}
                onChange={(e) => {
                  setRequire(e.target.value);
                }}
                className="updtbtn"
                style={{ marginLeft: "25px" }}
              />
            </label>
            <label style={{ display: "flex", alignItems: "center", }}>
              <span>Remark</span>
              <textarea
                name=""
                id=""
                cols="100"
                rows="3"
                value={remark}
                style={{ marginLeft: "75px" }}
                onChange={(e) => setremark(e.target.value)}
              ></textarea>
            </label>
            <br />
            <br />
            <button
              onClick={updateitem}
              className=" w-full max-w-xs  bg-indigo-500 hover:bg-indigo-700 flex justify-content-center align-items-center focus:bg-indigo-700 text-white rounded-lg 
              px-4 py-3 font-semibold "
              style={{ position: "relative", bottom: "0%", right: "0px" }}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
