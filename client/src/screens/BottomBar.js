import React from "react";

//MUI
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import Grid from "@mui/material/Grid";
import CallIcon from '@mui/icons-material/Call';
import brochure from '../Static/brochure-wadbrosindia.pdf'

const GridSection = () => {
  const useCheckMobileScreen = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
    };

    React.useEffect(() => {
      window.addEventListener("resize", handleWindowSizeChange);
      return () => {
        window.removeEventListener("resize", handleWindowSizeChange);
      };
    }, []);

    return width <= 768;
  };

  var isMobile = useCheckMobileScreen()
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
          <Grid item xs={12} md={12} sx={{ mx: "auto" }}>
            <Grid container spacing={2}>
              <Grid item xs={3} md={4} style={{marginLeft:'auto', marginRight:'auto'}} >
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

              <Grid item xs={3} md={4} style={{marginLeft:'auto', marginRight:'auto'}} >
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


              <Grid item xs={3} md={4} style={{marginLeft:'auto', marginRight:'auto'}} >
                <h3>Connect On</h3>
                <p>
                  <a
                    href="mailto:varinder@wadbrosindia.com"
                    style={{ textDecoration: "none", color: "white" , fontSize:isMobile?'9px':'15px' ,  }}
                  >
                    
                    <ContactMailIcon style={{fontSize:'30px', verticalAlign:'-10px'}} /> &nbsp; <span style={{marginLeft:isMobile?'-15%':'0%'}} > varinder@wadbrosindia.com </span>
                  </a>
                </p>
                <p>
                  <a
                    href="tel:+919810970755"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                      <CallIcon style={{fontSize:'30px', verticalAlign:'-10px'}} /> 9810970755
                  </a>    
                </p>
            
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
