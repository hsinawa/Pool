import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./commonStyle.css";
import ContactUs from "./contactUs";
import textData from "../Static/Text.json";

import PersonIcon from "@mui/icons-material/Person";
import CottageIcon from "@mui/icons-material/Cottage";
import PhoneIcon from "@mui/icons-material/Phone";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

const ContactPage = () => {
  return (
    <div>
      <h2 style={{ marginTop: "5%" }}>Contact Details</h2>

      <p
        className="companybox1"
        style={{
          width: "85%",
          marginLeft: "auto",
          marginTop: "7%",
          marginRight: "auto",
        }}
      >
        <br />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{ color: "#505050" }}>
              {" "}
              <PersonIcon
                style={{
                  fontSize: "30px",
                  verticalAlign: "-10px",
                  color: "#909090",
                }}
              />{" "}
              {textData.AboutPage.CompanyFactSheet.basicinfo.contactPerson}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {textData.AboutPage.CompanyFactSheet.basicinfo.CEO[1]}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography style={{ color: "#505050" }}>
              {" "}
              <CottageIcon
                style={{
                  fontSize: "30px",
                  verticalAlign: "-10px",
                  color: "#909090",
                }}
              />{" "}
              {textData.AboutPage.CompanyFactSheet.basicinfo.address[0]}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {textData.AboutPage.CompanyFactSheet.basicinfo.address[1]}
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography style={{ color: "#505050" }}>
              {" "}
              <PhoneIcon
                style={{
                  fontSize: "30px",
                  verticalAlign: "-10px",
                  color: "#909090",
                }}
              />{" "}
              Call Us
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <a
                href="tel:+919810970755"
                style={{ textDecoration: "none", color: "black" }}
              >
                {" "}
                9810970755
              </a>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography style={{ color: "#505050" }}>
              {" "}
              <ConnectWithoutContactIcon
                style={{
                  fontSize: "30px",
                  verticalAlign: "-10px",
                  color: "#909090",
                }}
              />{" "}
              Get in Touch
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ContactUs />
          </AccordionDetails>
        </Accordion>
        <br />
      </p>
    </div>
  );
};

export default ContactPage;
