
import * as React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({

  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
  backgroundColor: "transparent",
 // Set a transparent background
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem",color:'white' }} />}
    {...props}
  />
))(({ theme }) => ({
  color:"white",
  backgroundColor: "rgba(255, 255, 255, .05)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
 
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  backgroundColor: "rgb(27,41,61)", // Set a white background
}));

export default function CustomizedAccordions() {
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

  const [expanded, setExpanded] = React.useState(null);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : null);
  };

  return (
    <div className="bg-[#0F1E33] h-[100vh]  ">
      {routes.map((route, index) =>
        route.children ? (
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
          >
            <AccordionSummary
              aria-controls={`panel${index}d-content`}
              id={`panel${index}d-header`}
            >
              <Typography>{route.label}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                {route.children.map((child, childIndex) => (
                  <div key={childIndex}>
                    {childIndex > 0 && <hr />}
                    <div
                      className={`  ${
                        childIndex > 0
                          ? "flex items-center gap-2 p-3"
                          : "px-3 py-3 gap-2 flex items-center"
                      }`}
                    >
                      <ArrowForwardIosSharpIcon
                        sx={{ fontSize: "0.9rem", color: "white" }}
                      />
                      <p className="text-white">
                        <Link to={child.path}>{child.label}</Link>
                      </p>
                    </div>
                  </div>
                ))}
              </ul>
            </AccordionDetails>
          </Accordion>
        ) : (
          <div key={index}>
            <hr />
            <div className="p-3 bg-[rgb(27,41,61)] flex items-center gap-2">
              <ArrowForwardIosSharpIcon
                sx={{ fontSize: "0.9rem", color: "white" }}
              />
              <p className="text-white">
                <Link to={route.path}>{route.label}</Link>
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
}
