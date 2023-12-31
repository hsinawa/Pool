import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "./commonStyle.css";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
//Static Files
import image_pool from "../Static/pool.jpeg";
import textData from "../Static/Text.json";
import CompSearchByTypeonent from "./SearchByType";
import WhyUS from "./WhyUS";
import ContactUs from "./contactUs";
import AllProducts from "./productsAll";
import poolback from '../Static/poolback.jpeg'
import poolback2 from '../Static/poolback2.jpeg'

const Homescreen = () => {


  return (
    <div>
    <Carousel  >
      <Carousel.Item >
        <img
          className="d-block w-100"
          src={poolback}
          alt="Slide 1"
         id='carousel-image'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={poolback2}
          alt="Slide 2"
          id='carousel-image'
        />
      </Carousel.Item>
    
    </Carousel>
      <br />

    

      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={6}>
            <img src={image_pool} className="images" alt='Pool' title='src:google' />
          </Grid>
          <Grid item xs={12} md={6}>
            <p
              style={{
                width: "85%",
                textAlign: "justify",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <h2
                style={{
                  marginTop: "10%",
                  color: "#002D62",
                }}
              >
                {textData.About}
              </h2>

              <p
                style={{
                  marginTop: "5%",
                }}
              >
                {textData.AboutSection[0]}
              </p>
              <p
                style={{
                  marginTop: "3%",
                }}
              >
                {textData.AboutSection[1]}
              </p>

<a href='/about' style = {{textDecoration:'none', color:'white'}} >
              <Button
                variant="contained"
                sx={{
                  marginTop: "4%",
                  borderRadius: "12px",
                  backgroundColor: "#002D62",
                }}
              >
                {textData.knowMore}
              </Button>
              </a>
            </p>
          </Grid>
        </Grid>
      </Box>

      <CompSearchByTypeonent />
      <WhyUS />
    
      <ContactUs />
    </div>
  );
};

export default Homescreen;
