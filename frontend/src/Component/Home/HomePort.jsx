import React from "react";
import "./Home.css";
import {
  b2b,
  doctor,
  ecommerce,
  education,
  finance,
  hospital,
  hostel,
  industries,
} from "../../Assets/Index";


const HomePort = () => {
  const business = [
    {
      img: b2b,
      text: "B2B & B2C",
    },
    {
      img: doctor,
      text: "Medical",
    },
    {
      img: ecommerce,
      text: "e-commerce",
    },
    {
      img: education,
      text: "education",
    },
    {
      img: finance,
      text: "finance",
    },
    {
      img: hospital,
      text: "hospital",
    },
    {
      img: hostel,
      text: "hotel",
    },
    {
      img: industries,
      text: "indusrtries",
    },
  ];

  return (
    <>
      <section
        className="portfolio portfolio-blocks mega-section "
        id="portfolio"
      >
        <div className="container">
          <div className="row ">
            <div className="sec-heading ">
              <div className="content-area text-center  w-100 ">
                <span className="font-bold text-white text-3xl lg:text-3xl xl:text-5xl  text-center">
                  Boundless Solutions for Business Excellence in Every Domain
                </span>
           
              </div>
            </div>

            <div className="container mb-5 ">
              <div className="flex items-center justify-center gap-3 flex-wrap ">
                {business.map((val, id) => {
                  return (
                    <div
                      className="max-sm:w-[30%] md:w-[14%] xl:w-[15%] "
                      key={id}
                    >
                      <div
                        className=" shadow-md p-2 flex flex-col items-center rounded-lg "
                        style={{ background: "rgb(16 28 54)" }}
                      >
                        <img
                          className="rounded-t-lg w-80"
                          src={val.img}
                          alt=""
                        />

                        <h5 className="text-gray-200 font-bolder text-md  lg:text-lg xl:text-lg capitalize">
                          {val.text}
                        </h5>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePort;
