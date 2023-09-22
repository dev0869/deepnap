
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./navbar.css";
import { Stack } from "@mui/material";
import { Deepnap } from "../Assets/Index";
import { NavLink } from "react-router-dom";
import BtmDrawer from "./BtmDrawer";


const Navbar = () => {

  const routes = [
    {
      label: "Home",
      path: "/",
    },

    {
      label: "Development",
      path: "/webdesigns",
      children: [
        {
          label: "Website Designs",
          path: "/webdesigns",
        },
        {
          label: "Meta-ads",
          path: "/metaads",
        },
        {
          label: "Web Development",
          path: "/webdevelopment",
        },
        {
          label: "Software Development",
          path: "/software",
        },
        {
          label: "App Development",
          path: "/appdev",
        },
        {
          label: "CRM Development",
          path: "/crmdev",
        },
        // Add more development-related routes here
      ],
    },
    {
      label: "Digital Marketing",
      path: "/metaads",
      children: [
        {
          label: "Meta Ads",
          path: "/metaads",
        },
        {
          label: "Google Ads",
          path: "/googleads",
        },
        {
          label: "Email Marketing",
          path: "/emailMarketing",
        },
        {
          label: "Content Marketing",
          path: "/ContentMarketing",
        },
        {
          label: "Seo & Smo",
          path: "/SeoSmo",
        },
        {
          label: "PPC",
          path: "/PPC",
        },
      ],
    },
    {
      label: "Become brand",
      path: "/brand",
      children: [
        {
          label: "Brand Building",
          path: "/brand   ",
        },
        {
          label: "Public Relations",
          path: "/publicrelation",
        },
        {
          label: "ORM",
          path: "/orm",
        },
        {
          label: "Digital Marketing",
          path: "/digitalmarketing",
        },
        {
          label: "Influence Marketing",
          path: "/influence",
        },
        {
          label: "SocialMedia Presence",
          path: "/socialmedia",
        },
        // Add more brand-related routes here
      ],
    },
    {
      label: "Portfolio",
      path: "/portfolio",
    },
    {
      label: "About us",
      path: "/about",
    },

    {
      label: "Contact us",
      path: "/contact",
    },
  ];

 

  const [dropdownOpen, setDropdownOpen] = useState(null);

  const handleDropdownOpen = (index) => {

      setDropdownOpen(index);
    
  };

  const handleDropdownClose = () => {
    setDropdownOpen(null);
  };

  const atAdmin = useLocation().pathname.includes("admin");

  return (
    <>
      {!atAdmin && (
        <div
          style={{ background: " #00000082", backdropFilter: "blur(16px)" }}
          className="flex  fixed  w-full cursor-pointer text-white h-[80px] p-3 items-center justify-between z-[999] "
        >
          <div className="logoContainer max-sm:w-[50%] lg:w-[15%] h-full flex items-center justify-around p-1">
            <NavLink to="/">
              <img
                src={Deepnap}
                width="130px"
                style={{ filter: "invert(1)" }}
                alt=""
              />
            </NavLink>
          </div>
          <Stack flexDirection={"row"} alignItems={"center"} gap={2}>
            <div
              className="d-none d-lg-flex gap-8 h-full  items-center justify-content-evenly align-items-center text-[14px] "
              style={{
                fontWeight: "bolder",
                paddingRight: "28px",
                borderRight: "2px solid white",
              }}
            >
              {routes.map((route, index) => (
                <div
                  className="dropdown"
                  key={index}
                  style={{
                    textTransform: "uppercase",
                    position: "relative",
                  }}
                  onMouseEnter={() => handleDropdownOpen(index)}
                  onMouseLeave={handleDropdownClose}
                >
                  <NavLink
                    to={route.path}
                    className={`hover:text-cyan-500 active uppercase d-flex align-items-center gap-[2px] ${
                      dropdownOpen === index ? "active" : ""
                    }`}
                    aria-current="page"
                  >
                    {route.label}
                  </NavLink>
                  {route.children && (
                    <ul
                      className={`dropdown-menu ${
                        dropdownOpen === index ? "show" : ""
                      }`}
                    >
                      {route.children.map((child, childIndex) => (
                        <li key={childIndex}>
                          <NavLink
                            className="dropdown-item"
                            to={child.path}
                            onClick={handleDropdownClose}
                          >
                            {child.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <div
              style={{
                borderRadius: "5px",
                border: "1px solid white",
                paddingRight: "4px",
              }}
              className="  flex justify-content-center align-items-center p-2  gap-[6px] hover:border-red-500"
            >
              {/* Add buttons and login/registration links here */}

              <NavLink
                to={"/login"}
                className="hover:text-cyan-500 active px-3"
              >
                Login
              </NavLink>
              <BtmDrawer />
            </div>
          </Stack>
        </div>
      )}
    </>
  );
};

export default Navbar;
