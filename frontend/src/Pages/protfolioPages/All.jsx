import React, { useState } from "react";
import Pnavbar from "./Pnavbar";
import { NavLink } from "react-router-dom";
import { cardImages } from "./AllContant";

const All = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter the data based on the selected category
  const filteredData =
    selectedCategory === "all"
      ? cardImages
      : cardImages.filter((item) => item.category === selectedCategory);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="mb-4">
            {/* Create a dropdown to select the category */}
            <label htmlFor="categorySelect">Select Category: </label>
            <select
              id="categorySelect"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="All">All</option>
              <option value="b2b">B2b</option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              {/* Add more options for each category */}
            </select>
          </div>
          {filteredData.map((val, id) => {
            return (
              <>
                <div
                  className="wrapper pt-3 px-8 uppercase gap-10 col-xl-3 col-lg-4 col-md-4 col-sm-6 flex flex-wrap "
                  style={{}}
                  key={id}
                >
                  <article
                    className="mb-4 break-inside  border rounded-xl bg-white dark:bg-slate-800 flex 
        flex-col bg-clip-border  p-3"
                  >
                    <div className="py-0">
                      <div className="flex justify-between gap-1 mb-1">
                        <NavLink className="flex" to={val.to} target="_blank">
                          <img
                            className="max-w-full rounded-lg rounded-tl-lg"
                            src={val.image}
                            alt="Image 1"
                            target="_blank"
                          />
                        </NavLink>
                      </div>
                    </div>

                    <h5 className="dark:text-slate-200 h5 text-center pt-2">
                      {val.text}
                    </h5>
                  </article>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default All;
