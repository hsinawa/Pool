import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import textData from "../Static/Text.json";
import logo from "../Static/wadbros.jpg";

const AboutUs = () => {
  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={6}>
            <img
              src={logo}
              style={{
                width: "70%",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "1%",
              }}
              alt="Pool"
              title="src:google"
            />
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
            </p>
          </Grid>
        </Grid>
      </Box>

      <br />

      <section
        style={{
          width: "85%",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "justify",
          marginTop: "3%",
        }}
      >
        <h2
          style={{
            color: "#002D62",
          }}
        >
          {textData.AboutPage.CompanyFactSheet.name}
        </h2>
        <p className="companybox">
          <Box sx={{ width: "100%", textAlign: "center" }}>
            <br />
            <h4
              style={{
                fontWeight: "bold",
                marginLeft: "10px",
              }}
            >
              {textData.AboutPage.CompanyFactSheet.basicinfo.name}
            </h4>
            <hr />
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6} md={6}>
                <p
                  style={{
                    fontWeight: "bold",
                    color: "#989898",
                    textAlign: "left",
                    marginLeft: "3%",
                  }}
                >
                  {textData.AboutPage.CompanyFactSheet.basicinfo.nature[0]}
                </p>
              </Grid>
              <Grid item xs={6} md={6}>
                <p style={{ color: "#202020", textAlign: "start" }}>
                  {textData.AboutPage.CompanyFactSheet.basicinfo.nature[1]}
                </p>
              </Grid>

              <Grid item xs={6} md={6}>
                <p
                  style={{
                    fontWeight: "bold",
                    color: "#989898",
                    textAlign: "left",
                    marginLeft: "3%",
                  }}
                >
                  {
                    textData.AboutPage.CompanyFactSheet.basicinfo
                      .AdditionalBusiness[0]
                  }
                </p>
              </Grid>
              <Grid item xs={6} md={6}>
                <li style={{ color: "#202020", textAlign: "start" }}>
                  {
                    textData.AboutPage.CompanyFactSheet.basicinfo
                      .AdditionalBusiness[1]
                  }
                </li>
                <li style={{ color: "#202020", textAlign: "start" }}>
                  {
                    textData.AboutPage.CompanyFactSheet.basicinfo
                      .AdditionalBusiness[2]
                  }
                </li>
                <li style={{ color: "#202020", textAlign: "start" }}>
                  {
                    textData.AboutPage.CompanyFactSheet.basicinfo
                      .AdditionalBusiness[3]
                  }
                </li>
                <li style={{ color: "#202020", textAlign: "start" }}>
                  {
                    textData.AboutPage.CompanyFactSheet.basicinfo
                      .AdditionalBusiness[4]
                  }
                </li>
                <li style={{ color: "#202020", textAlign: "start" }}>
                  {
                    textData.AboutPage.CompanyFactSheet.basicinfo
                      .AdditionalBusiness[5]
                  }
                </li>
                <li style={{ color: "#202020", textAlign: "start" }}>
                  {
                    textData.AboutPage.CompanyFactSheet.basicinfo
                      .AdditionalBusiness[6]
                  }
                </li>
              </Grid>

              <Grid item xs={6} md={6}>
                <p
                  style={{
                    fontWeight: "bold",
                    color: "#989898",
                    textAlign: "left",
                    marginLeft: "3%",
                  }}
                >
                  {textData.AboutPage.CompanyFactSheet.basicinfo.CEO[0]}
                </p>
              </Grid>
              <Grid item xs={6} md={6}>
                <p style={{ color: "#202020", textAlign: "start" }}>
                  {textData.AboutPage.CompanyFactSheet.basicinfo.CEO[1]}
                </p>
              </Grid>

              <Grid item xs={6} md={6}>
                <p
                  style={{
                    fontWeight: "bold",
                    color: "#989898",
                    textAlign: "left",
                    marginLeft: "3%",
                  }}
                >
                  {textData.AboutPage.CompanyFactSheet.basicinfo.address[0]}
                </p>
              </Grid>
              <Grid item xs={6} md={6}>
                <p style={{ color: "#202020", textAlign: "start" }}>
                  {textData.AboutPage.CompanyFactSheet.basicinfo.address[1]}
                </p>
              </Grid>

              <Grid item xs={6} md={6}>
                <p
                  style={{
                    fontWeight: "bold",
                    color: "#989898",
                    textAlign: "left",
                    marginLeft: "3%",
                  }}
                >
                  {textData.AboutPage.CompanyFactSheet.basicinfo.employees[0]}
                </p>
              </Grid>
              <Grid item xs={6} md={6}>
                <p style={{ color: "#202020", textAlign: "start" }}>
                  {textData.AboutPage.CompanyFactSheet.basicinfo.employees[1]}
                </p>
              </Grid>

              <Grid item xs={6} md={6}>
                <p
                  style={{
                    fontWeight: "bold",
                    color: "#989898",
                    textAlign: "left",
                    marginLeft: "3%",
                  }}
                >
                  {textData.AboutPage.CompanyFactSheet.basicinfo.established[0]}
                </p>
              </Grid>
              <Grid item xs={6} md={6}>
                <p style={{ color: "#202020", textAlign: "start" }}>
                  {textData.AboutPage.CompanyFactSheet.basicinfo.established[1]}
                </p>
              </Grid>

              <Grid item xs={6} md={6}>
                <p
                  style={{
                    fontWeight: "bold",
                    color: "#989898",
                    textAlign: "left",
                    marginLeft: "3%",
                  }}
                >
                  {textData.AboutPage.CompanyFactSheet.basicinfo.legal[0]}
                </p>
              </Grid>
              <Grid item xs={6} md={6}>
                <p style={{ color: "#202020", textAlign: "start" }}>
                  {textData.AboutPage.CompanyFactSheet.basicinfo.legal[1]}
                </p>
              </Grid>

              <Grid item xs={6} md={6}>
                <p
                  style={{
                    fontWeight: "bold",
                    color: "#989898",
                    textAlign: "left",
                    marginLeft: "3%",
                  }}
                >
                  {textData.AboutPage.CompanyFactSheet.basicinfo.turnover[0]}
                </p>
              </Grid>
              <Grid item xs={6} md={6}>
                <p style={{ color: "#202020", textAlign: "start" }}>
                  {textData.AboutPage.CompanyFactSheet.basicinfo.turnover[1]}
                </p>
              </Grid>
            </Grid>
          </Box>
        </p>

        <p className="companybox">
          <Box sx={{ width: "100%", textAlign: "center" }}>
            <br />
            <h4
              style={{
                fontWeight: "bold",
                marginLeft: "10px",
              }}
            >
              {textData.AboutPage.CompanyFactSheet.statuory.name}
            </h4>
            <hr />
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
        

  

              <Grid item xs={6} md={6}>
                <p
                  style={{
                    fontWeight: "bold",
                    color: "#989898",
                    textAlign: "left",
                    marginLeft: "3%",
                  }}
                >
                  {textData.AboutPage.CompanyFactSheet.statuory.GST[0]}
                </p>
              </Grid>
              <Grid item xs={6} md={6}>
                <p style={{ color: "#202020", textAlign: "start" }}>
                  {textData.AboutPage.CompanyFactSheet.statuory.GST[1]}
                </p>
              </Grid>
            </Grid>
          </Box>
        </p>

  
      </section>
      <br />

      <section
        style={{
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "justify",
          marginTop: "3%",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
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
                  {textData.AboutPage.CompanyFactSheet.OurTeam.name}
                </h2>

                <p
                  style={{
                    marginTop: "5%",
                  }}
                >
                  {textData.AboutPage.CompanyFactSheet.OurTeam.description}
                </p>
              </p>
            </Grid>

            <Grid item xs={12} md={6}>
              <img
                src={
                  "https://www.poolmagazine.com/wp-content/uploads/2022/05/investing-luxury-pool-jason-brownlee-1000x600.jpg"
                }
                className="images"
                style={{
                  width: "90%",
                  marginLeft: "5%",
                }}
                alt="Pool"
                title="src:google"
              />
            </Grid>
          </Grid>
        </Box>
      </section>


      <br/><br/>
    </div>
  );
};

export default AboutUs;
