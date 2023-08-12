import React from "react";

//MUI
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Grid from "@mui/material/Grid";

import brochure from '../Static/brochure-wadbrosindia.pdf'

const GridSection = () => {
  return (
    <div
      style={{
        backgroundColor: "#002244",
        color: "white",
        marginBottom: "-10%",
        borderRadius: "10px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Box sx={{ flexGrow: 1, mx: "auto" }}>
        <Grid container spacing={2}>
          <Grid item xs={10} md={6} sx={{ mx: "auto" }}>
            <Grid container spacing={2}>
              <Grid item xs={4} md={4}>
                <h3>Our Compant</h3>

                <p>
                  <a
                    href="/"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    {" "}
                    Home Page
                  </a>{" "}
                </p>

                <p>
                  <a
                    href="/about"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    {" "}
                    About Wadbros{" "}
                  </a>{" "}
                </p>

             

                <p>
                  <a
                    href="/contact"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    {" "}
                    Contact Us
                  </a>{" "}
                </p>

                <p>
                  <a
                    href={brochure}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    {" "}
                     Brochure{" "}
                  </a>{" "}
                </p>
              </Grid>

              <Grid item xs={4} md={4}>
                <h3>Our Products</h3>
                <p>
                  <a
                    href="/product/Accessories"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    {" "}
                     Pool Accessories
                  </a>{" "}
                </p>
                <p>
                  <a
                    href="/product/Equiments"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    {" "}
                     Maintenance and Equipment
                  </a>{" "}
                </p>
                <p>
                  <a
                    href="/product/Chemicals"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    {" "}
                     Pool Chemicals
                  </a>{" "}
                </p>
              </Grid>

              <Grid item xs={4} md={4}>
                <h3>About Developer</h3>
                <p>
                  <a
                    href="/aboutdeveloper"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    {" "}
                    See Details
                  </a>{" "}
                </p>
              
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={10} md={6} sx={{ mx: "auto" }}>
            <h3>Connect On</h3>
            <Grid container spacing={2}>
              <Grid item xs={2} md={2}>
                <p></p>
              </Grid>

              <Grid item xs={2} md={2}>
                <p title="FaceBook">
                  <a
                    href={`https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.wadbrosindia.com%2F`}
                    target="_blank"
                    style={{ color: "white", cursor: "pointer" }}
                  >
                    <FacebookIcon
                      style={{ verticalAlign: "-6px", fontSize: "35px" }}
                    />
                  </a>
                </p>
              </Grid>
              <Grid item xs={2} md={2}>
                <p title="Twitter:X">
                  <a
                    href={`https://twitter.com/intent/tweet?url=https://www.wadbrosindia.com/&text=Wadbros%20India`}
                    target="_blank"
                    style={{ color: "white", cursor: "pointer" }}
                  >
                    <TwitterIcon
                      style={{ verticalAlign: "-6px", fontSize: "35px" }}
                    />
                  </a>
                </p>
              </Grid>
              <Grid item xs={2} md={2}>
                <p title="LinkedIn">
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwww.wadbrosindia.com%2F`}
                    target="_blank"
                    style={{ color: "white", cursor: "pointer" }}
                  >
                    <LinkedInIcon
                      style={{ verticalAlign: "-6px", fontSize: "35px" }}
                    />
                  </a>
                </p>
              </Grid>
              <Grid item xs={2} md={2}>
                <p title="E-Mail">
                  <a
                    href={`mailto:varinder@wadbrosindia.com`}
                    target="_blank"
                    style={{ color: "white", cursor: "pointer" }}
                  >
                    <ContactMailIcon
                      style={{ verticalAlign: "-6px", fontSize: "35px" }}
                    />
                  </a>
                </p>
              </Grid>

              <Grid item xs={2} md={2}>
                <p></p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

const LastSectionScreen = () => {
  return (
    <div style={{ marginTop: "15%" }}>
      <GridSection />
    </div>
  );
};

export default LastSectionScreen;
