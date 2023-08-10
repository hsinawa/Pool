import React, { useEffect } from "react";
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

const Homescreen = () => {


  return (
    <div>
    <Carousel  >
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://w0.peakpx.com/wallpaper/822/161/HD-wallpaper-night-resort-thailand-villa-phuket-pool.jpg"
          alt="Slide 1"
         id='carousel-image'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://e0.pxfuel.com/wallpapers/161/574/desktop-wallpaper-minimalist-house-for-ultra-house-mansion.jpg"
          alt="Slide 2"
          id='carousel-image'
        />
      </Carousel.Item>
    
    </Carousel>
      <br />

      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={6}>
            <img src={image_pool} className="images" />
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
            </p>
          </Grid>
        </Grid>
      </Box>

      <CompSearchByTypeonent />
    </div>
  );
};

export default Homescreen;
