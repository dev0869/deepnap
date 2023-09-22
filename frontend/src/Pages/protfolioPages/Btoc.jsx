import React, { useState } from "react";
import Pnavbar from "./Pnavbar";
import { NavLink } from "react-router-dom";
import { cardImages } from "./AllContant";

const Btoc = () => {
  const [selectedCategory, setSelectedCategory] = useState("b2c");

  const filteredData = cardImages.filter(
    (item) =>
     item.category.includes(selectedCategory)
  );

  console.log(filteredData);

  return (
    <div className="container">
      <div className="row">
        {filteredData.map((val, id) => {
          return (
            <div
              className="wrapper pt-3 px-8 uppercase gap-10 col-xl-3 col-lg-4 col-md-4 col-sm-6 flex flex-wrap "
              key={id}
            >
              <article className="mb-4 break-inside  border rounded-xl bg-white dark:bg-slate-800 flex flex-col bg-clip-border  p-3">
                <div className="py-0">
                  <div className="flex justify-between gap-1 mb-1">
                    <NavLink className="flex" to={val.to} target="_blank">
                      <img
                        className="max-w-full rounded-lg rounded-tl-lg"
                        src={val.image}
                        alt="Image 1"
                      />
                    </NavLink>
                  </div>
                </div>

                <h5 className="dark:text-slate-200 h5 text-center pt-2">
                  {val.text}
                </h5>
              </article>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Btoc;
