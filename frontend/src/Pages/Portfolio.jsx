import React from "react";
import {
  industries,
  finance,
  hospital,
  education,
  ecommerce,
  hostel,
  doctor,
  b2b,
} from "../../src/Assets/Index";
const Portfolio = () => {
  const business = [
    {
      img: b2b,
      text: "B2B & B2C",
    },
    {
      img: doctor,
      text: "Doctor",
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
                <span
                  className="pre-title text-center font-mono "
                  data-wow-delay=".2s"
                >
                  industries we are serve for
                </span>
                <h2
                  className="title wow fadeInUp h2 font-mono"
                  data-wow-delay=".4s"
                >
                  Helping Business in all domain
                </h2>
              </div>
            </div>

            <div className="container mb-5">
              <div className="flex items-center justify-center gap-3 flex-wrap">
                {business.map((val, id) => {
                  return (
                    <>
                      <div
                        className="max-sm:w-full md:w-[47%] xl:w-[23%]"
                        key={id}
                      >
                        <div
                          className=" shadow-md border flex flex-col items-center border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700"
                          style={{ background: "rgb(16 28 54)" }}
                        >
                          <img
                            className="rounded-t-lg w-50 mx-16 mt-2 "
                            src={val.img}
                            alt=""
                          />
                          <div className="p-3 text-center">
                            <a href="#">
                              <h5 className="text-white font-serif text-2xl tracking-tight mb-2 capitalize dark:text-white">
                                {val.text}
                              </h5>
                            </a>
                          </div>
                        </div>
                      </div>
                    </>
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

export default Portfolio;
