import * as React from "react";
import Box from "@mui/material/Box";
import CustomizedAccordions from "./CustomizedAccordions";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

import { Deepnap } from "../Assets/Index";


export default function BtmDrawer() {
  
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

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 ,backgroundColor:'black'}}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <img src={Deepnap} alt="" width={100} style={{ filter: "invert(1)" }} />

      <CustomizedAccordions />
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuOpenIcon />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
