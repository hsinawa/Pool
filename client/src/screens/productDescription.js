import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GetProductByIdAction } from "../Actions/productAction";
import { GetAllproductsReducer } from "../Reducers/productReducer";
import { Button, CircularProgress } from "@mui/material";
import ErrorPage from "./errorPage";
import textData from "../Static/Text.json";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const ProductDescription = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector(
    (state) => state.GetAllproductsReducer
  );

  useEffect(() => {
    dispatch(GetProductByIdAction({ id }));
  }, [dispatch]);

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

  var isMobile = useCheckMobileScreen();

  return (
    <div>
      {loading && <CircularProgress />}
      {error && <ErrorPage />}

      {products && (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={10} md={6}>
              <section
                style={{
                  width: "90%",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <img
                  src={products.image}
                  style={{
                    width: "90%",
                    marginLeft: "15%",
                    borderRadius: "12px",
                    height: isMobile ? "180px" : "350px",
                  }}
                />
                <br />
                <p
                  style={{
                    width: "90%",
                    marginLeft: "15%",
                    borderRadius: "12px",
                    textAlign: "justify",
                    marginTop: "5%",
                    color: "#505050",
                  }}
                >
                  {products.details}
                </p>
              </section>
            </Grid>
            <Grid item xs={10} md={6}>
              <section
                style={{
                  width: "90%",
                  marginLeft: isMobile ? "15%" : "7%",
                  marginRight: "auto",
                  textAlign: "justify",
                  marginTop: "3%",
                }}
              >
                <h3
                  style={{
                    color: "#002D62",
                  }}
                >
                  Product Description
                </h3>
                <p className="companybox">
                  <Box sx={{ width: "100%", textAlign: "center" }}>
                    <br />
                    <h4
                      style={{
                        fontWeight: "bold",
                        marginLeft: "10px",
                      }}
                    >
                      Name: {products.name}
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
                          Brand:
                        </p>
                      </Grid>
                      <Grid item xs={6} md={6}>
                        <p style={{ color: "#202020", textAlign: "start" }}>
                          {products.brand}
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
                          Price:
                        </p>
                      </Grid>
                      <Grid item xs={6} md={6}>
                        <p style={{ color: "#202020", textAlign: "start" }}>
                          {products.price}
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
                 Category:
                </p>
              </Grid>
              <Grid item xs={6} md={6}>
                <p style={{ color: "#202020", textAlign: "start" }}>
                 {products.category}
                </p>
              </Grid>
                    </Grid>
                  </Box>
                </p>
              </section>
            </Grid>
          </Grid>
        </Box>
      )}
    </div>
  );
};

export default ProductDescription;
