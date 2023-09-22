import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { cardImages } from "./AllContant";
function Pnavbar() {
  const navigate = useNavigate();
  const uniqueCategories = [...new Set(cardImages.flatMap((item) => item.category))];
  const filteredCategories = uniqueCategories.filter((category) => category !== "");
  
  console.log(filteredCategories);



  // const business = [
  //   {
  //     text: "ALL",
  //     to: "/portfolio",
  //   },
  //   {
  //     text: "B2B",
  //     to: "/portfolio/b2b",
  //     text: "B2B",
  //   },
  //   {
  //     text: "B2C",
  //     to: "/portfolio/b2c",
  //   },
  //   {
  //     text: "Doctor",
  //     to: "/portfolio/doctor",
  //   },
  //   {
  //     text: "e-commerce",
  //     to: "/portfolio/ecom",
  //   },
  //   {
  //     text: "education",
  //     to: "/portfolio/edu",
  //   },
  //   {
  //     text: "finance",
  //     to: "/portfolio/finance",
  //   },
  //   {
  //     text: "hospital",
  //     to: "/portfolio/hospital",
  //   },
  //   {
  //     text: "hotel",
  //     to: "/portfolio/hotel",
  //   },
  //   {
  //     text: "indusrtries",
  //     to: "/portfolio/industries",
  //   },
  // ];
  return (
    // <>
  
    //   <nav
    //     className="relative select-none bg-grey w-full "
    //     style={{ background: "black" }}
    //   >
    //     <div className="flex  justify-content-center align-items-center  ">
    //       {business.map((val, index) => {
    //         return (
    //           <NavLink
    //             to={val.to}
    //             key={index}
    //             className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark uppercase"
    //           >
    //             {val.text}
    //           </NavLink>
    //         );
    //       })}
    //     </div>
    //     {/* </div> */}
    //   </nav>
    // </>
    <>
    
    
    
    </>
  );
}

export default Pnavbar;
