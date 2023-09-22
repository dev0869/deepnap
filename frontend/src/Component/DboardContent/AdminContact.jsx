import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SearchContact, fetchContact } from "../../features/contactSlice";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import { base_url } from "../../utils/base_url";
import { toast } from "react-toastify";

const Contactus = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.contact.service.list); // Check the correct path to your data in the Redux store

  console.log(data);

  useEffect(() => {
   
      dispatch(fetchContact());

  }, [dispatch]);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `${base_url}/admin/deletecontact/${id}`
      );

      if (response.data.success) {
        toast.success("User deleted successfully");
        dispatch(fetchContact());
      } else {
        toast.error("User can't be deleted");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleInputChange = (e) => {
    const key = e.target.value;
    console.log(key)
    if(key){
      dispatch(SearchContact(key));
    }
    else{
      dispatch(fetchContact());
    }
  };

  return (
    <div>
      <h1
        style={{
          position: "relative",
          fontWeight: "bold",
          fontSize: "30px",
          top: "20px",
        }}
      >
        Contact Us
      </h1>
      <span style={{ position: "relative", left: "500px" , bottom:"20px"}}>
        <form>
          <input
            type="search"
            placeholder="Search"
            style={{
              padding: "10px",
              width: "450px",
              textAlign: "right",
              border: "none",
              outline: "1px solid #827280",
            }}
            onChange={(e) => handleInputChange(e)}
          />
        </form>
      </span>
      <div >
        <div className="  rounded-lg border" style={{width:"80vw",left:"0%", position:"relative" }}>
          <div className="" style={{ overflow: "auto", maxHeight: "600px" }}>
            <table className="responsive-table "
              style={{ width: "100%"}}
            >
              <thead>
                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase  dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                  <th className="px-4 py-3">S.No.</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3" style={{maxWidth:"300px"}}>Email</th>
                  <th className="px-4 py-3">Mobile</th>
                  <th className="px-4 py-3">City</th>
                  <th className="px-4 py-3">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                {data?.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400"
                    >
                      <td className="px-4 py-3">{index + 1}</td>
                      <td className="px-4 py-3">
                        {item.date?.split("T")[0]}
                      </td>
                      <td className="px-4 py-3">{item.name}</td>
                      <td className=" py-3">{item.email}</td>
                      <td className="px-4 py-3">{item.phone}</td>
                      <td className="px-4 py-3">{item.city}</td>
                      <td
                        className="px-4 py-3 "
                        style={{ display: "flex", gap: "10px" }}
                      >
                        <Link to="#">
                          <FaEye size={20} style={{ color: "blue" }} />
                        </Link>
                        <AiFillDelete
                          size={20}
                          className="icon"
                          style={{ color: "red", cursor: "pointer" }}
                          onClick={() => handleDelete(item._id)}
                        />
                      </td>
                    </tr>
                  );
                })}
                {/* Repeat similar structure for other table rows */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
