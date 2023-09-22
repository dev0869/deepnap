import React from "react";
import Stack from "@mui/material/Stack";

import { gif, Star } from "../../Assets/Index";
const Homef = () => {
  return (
    <>
      <div className="background-image px-[22px] pt-[32px] lg:py-[40px]  lg:px-[60px]  xl:py-[40px]  xl:px-[60px]  ">
        <Stack display={"flex"} alignItems={"center"} flexDirection={"row"}>
          <Stack flex={5}>
            <div className="   flex items-center gap-0 flex-col ">
              <p className="font-bold text-white text-3xl lg:text-2xl xl:text-5xl xl:mt-11 lg:mt-[80px]">
                Shaping Brands with the Best Website Design and Web Development
                Company in Faridabad & Delhi NCR{" "}
                <img
                  src={Star}
                  alt=""
                  style={{
                    float: "right",
                    position: "relative",
                    left: "-19%",
                    top: "6px",
                  }}
                />
              </p>
              <p className="hero-subtitle text-justify text-lg  lg:text-lg xl:text-xl text-gray-400 ">
                <span className="text-white   ">
                  Empowering Brands with Exceptional
                </span>{" "}
                Website Design and Web Development Services in Faridabad and
                Delhi NCR. Choose the Best Company to Elevate Your Online
                Presence. Deepnap Softech focuses on building robust digital
                identities. With a deep understanding of{" "}
                <span className="text-white  ">
                  {" "}
                  Best Website Design and Web Development,{" "}
                </span>{" "}
                we create platforms that amplify your brand's presence. Through
                expert website design and web development, we translate ideas
                into immersive online experiences. Elevate your brand's online
                presence with best company across Faridabad & Delhi NCR{" "}
                <span className="text-white  ">
                  With Our Cutting-Edge Solutions.
                </span>
              </p>
            </div>
          </Stack>
          <Stack flex={4} display={{ md: "block", xs: "none" }}>
            <div className="flex justify-center relative ">
              <img src={gif} alt="gif" />
            </div>
          </Stack>
        </Stack>
      </div>
    </>
  );
};

export default Homef;
