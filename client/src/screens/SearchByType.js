import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {  CardActionArea } from "@mui/material";

//Static data
import textData from "../Static/Text.json";
import image_pool_acc from "../Static/pool-acc.jpeg";
import image_pool_maint from "../Static/pool-maint.jpeg";
import image_pool_chem from "../Static/pool-chem.webp";

const CompSearchByTypeonent = () => {
  return (
    <div
      style={{
        marginTop: "7%",
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <h3
        style={{
          marginTop: "10%",
          color: "#002D62",
        }}
      >
        {textData.SearchByType}
      </h3>
      <h3
        style={{
         
          color: "#89CFF0",
        }}
      >
        {textData.SearchByTypeSub}
      </h3>

      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid
            item
            xs={8}
            md={4}
            style={{ marginLeft: "auto", marginRight: "auto" }}
            className="head-text"
          >
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className="images-1"
                  src={image_pool_acc}
                  alt="Pool Accessories"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" style={{color:'#002D62'}} >
                    Swimming Pool Accessories
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid
            item
            xs={8}
            md={4}
            style={{ marginLeft: "auto", marginRight: "auto" }}
            className="head-text"
          >
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className="images-1"
                  src={image_pool_maint}
                  alt="Pool Maintainance"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" style={{color:'#002D62'}}>
                    Pool Maintenance and Equipment
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid
            item
            xs={8}
            md={4}
            style={{ marginLeft: "auto", marginRight: "auto" }}
            className="head-text"
          >
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className="images-1"
                  src={image_pool_chem}
                  alt="Pool Accessories"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" style={{color:'#002D62'}}>
                    Swimming Pool Chemicals
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default CompSearchByTypeonent;
