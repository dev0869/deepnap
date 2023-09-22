import React from "react";
import { AiOutlineForm, AiOutlineUsergroupAdd } from "react-icons/ai";
import {  FaRunning } from "react-icons/fa";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Card = () => { 
  const contactDetails=useSelector((state)=>state.contact.service).list
  const careerDetails = useSelector((state) => state.career.meta);
  const demoDetails = useSelector((state) => state.quote.infos);
  return (
    <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
      {/* dashboards cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
       <NavLink to="#">
        <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
          <div className="">
            <p> Deepnap Database</p>
          </div>
        </div>
        </NavLink>
        <NavLink to="#">
        <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
          <FaRunning size={30} />
      {careerDetails.length}
          <div className="text-right">
            <p>Career</p>
          </div>
        </div>
        </NavLink>
        <NavLink to="#">
        <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
          <AiOutlineForm size={30} />
    {demoDetails.length}
          <div className="text-right">
            <p>Quotes</p>
          </div>
        </div>
        </NavLink>
        <NavLink to="#">
        <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
          <TbDeviceLandlinePhone size={30} />
          {contactDetails?.length}
          <div className="text-right">
            <p>Contact Us</p>
          </div>
        </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Card;
