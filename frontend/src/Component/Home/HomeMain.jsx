import React from "react";
import Homef from "./Homef";
import Services from "./Services";
import HomePort from "./HomePort";
import "./Home.css";
import Details from "./Details";
import Phone from "../Phone/Phone";
import Formhome from "./Formhome";
import Marque from "./Marque";
const HomeMain = () => {
  return (
    <>
      <Homef />
      <Services />
      <HomePort />
      <Phone />
      <Formhome />
      <Marque />
      <Details />
    </>
  );
};

export default HomeMain;
