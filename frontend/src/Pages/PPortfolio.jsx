import { useState } from "react";
import "../../src/Component/Home/Home.css";
import { NavLink } from "react-router-dom";
import { cardImages } from "./protfolioPages/AllContant";

const PPortfolio = () => {
  const uniqueCategories = [
    ...new Set(cardImages.flatMap((item) => item.category)),
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Filter the data based on the selected category
  const filteredData =
    selectedCategory === "All"
      ? cardImages
      : cardImages.filter((item) => item.category.includes(selectedCategory));

  console.log(selectedCategory);

  return (
    <div className="background-image h-[100%] pt-[95px]  relative flex flex-col  ">
      <nav
        className="relative select-none bg-grey w-full  uppercase"
        style={{
          padding: "12px",
          backgroundColor: "black",
          color: "red",
          position: "fixed",
          top: "80px",
          overflowX: "auto",
          whiteSpace: "nowrap",
          maxWidth: " 100%", // Allow the navigation bar to be as wide as needed
        }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="flex items-center px-4 gap-3 md:justify-center">
                {["All", ...uniqueCategories].map((val, index) => {
                  return (
                    <p
                      className={`text-white cursor-pointer ${
                        val === selectedCategory ? "font-bold" : ""
                      }`}
                      key={index}
                      onClick={() => handleCategoryClick(val)}
                    >
                      {val}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="container flex  flex-wrap mt-9">
        {filteredData.map((item, index) => (
          <div
            className="wrapper pt-3 px-8 uppercase gap-10 col-xl-3 col-lg-4 col-md-4 col-sm-6 flex flex-wrap"
            key={index}
          >
            <NavLink to={item.to} target="_blank">
              <article
                className="mb-4 break-inside border rounded-xl bg-white dark:bg-slate-800 flex 
              flex-col bg-clip-border p-3"
              >
                <div className="py-0">
                  <div className="flex justify-between gap-1 mb-1">
                    <img
                      className="max-w-full rounded-lg rounded-tl-lg"
                      src={item.image}
                      alt="Image 1"
                      target="_blank"
                    />
                  </div>
                </div>

                <h5 className="dark:text-slate-200 h5 text-center pt-2">
                  {item.text}
                </h5>
              </article>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PPortfolio;
