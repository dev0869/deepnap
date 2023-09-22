import React from "react";
import { TiTick } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
const Message = () => {
    const navigate= useNavigate();
  const Card = ({
    icon,
    title,
    description,
    primaryBtnText,
    secondaryBtnText,
  }) => {
    return (
      <div className="w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-xl">
        <span
          className=" h-10 my-2  flex justify-content-center align-items-center  "
        
        >
          {icon}
        </span>
        <h1 className="mt-2 text-center text-2xl font-bold text-gray-500">
          {title}
        </h1>
        <p className="my-4 text-center text-sm text-gray-500 p-2">
          {description}
        </p>
        <div className="space-x-4 bg-gray-100 py-4 text-center">
          <div className="inline-block rounded-md bg-red-500 px-10 py-2 font-semibold text-red-100 shadow-md duration-75 hover:bg-red-400"  onClick={()=>navigate("/quotes")}>
            {secondaryBtnText}
          </div>
          <div className="inline-block rounded-md bg-green-500 px-6 py-2 font-semibold text-green-100 shadow-md duration-75 hover:bg-green-400" onClick={()=>navigate("/")}>
            {primaryBtnText}
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      
      <div className="flex pt-28 pb-28 flex-col items-center justify-center space-y-6 bg-gray-100 px-4 sm:flex-row sm:space-x-6 sm:space-y-0">
        <Card
          icon={<TiTick size={30} color="green" />}
          title="Success"
          description="Your booking has been successful for the demo! Thank you for
        expressing interest in our digital product. You can expect a call from
        one of our knowledgeable professionals within the next 24 hours."
          primaryBtnText="Home"
          secondaryBtnText="Quotes"
        />
      </div>
    </>
  );
};

export default Message;
