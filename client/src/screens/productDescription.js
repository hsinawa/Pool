import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  AddReviewProductAction,
  GetProductByIdAction,
} from "../Actions/productAction";
import RecomendationGrid from "./RecommendationGrid";
import { GetAllproductsReducer } from "../Reducers/productReducer";
import { Button, CircularProgress } from "@mui/material";
import ErrorPage from "./errorPage";
import textData from "../Static/Text.json";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";

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

  const [open, setOpen] = React.useState(false);

  const [name, setname] = useState("");
  const [contact, setcontact] = useState("");

  const AddReview = (e) => {
    e.preventDefault();

    const data = {
      name: name,
      contact: contact,
    };

    dispatch(AddReviewProductAction({ id, data }));
  };

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

                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "12px",
                    width: "90%",
                    marginLeft: "15%",

                    backgroundColor: "#002D62",
                  }}
                  onClick={() => setOpen(true)}
                >
                  GET BEST QUOTES
                </Button>

                <Modal
                  aria-labelledby="modal-title"
                  aria-describedby="modal-desc"
                  open={open}
                  onClose={() => setOpen(false)}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Sheet
                    variant="outlined"
                    sx={{
                      maxWidth: 500,
                      borderRadius: "md",
                      p: 3,
                      boxShadow: "lg",
                    }}
                  >
                    <ModalClose
                      variant="outlined"
                      sx={{
                        top: "calc(-1/4 * var(--IconButton-size))",
                        right: "calc(-1/4 * var(--IconButton-size))",
                        boxShadow: "0 2px 12px 0 rgba(0 0 0 / 0.2)",
                        borderRadius: "50%",
                        bgcolor: "background.surface",
                      }}
                    />
                    <Typography
                      component="h2"
                      id="modal-title"
                      level="h4"
                      textColor="inherit"
                      fontWeight="lg"
                      mb={1}
                    >
                      Enter Details
                    </Typography>
                    <Typography id="modal-desc" textColor="text.tertiary">
                      <form onSubmit={AddReview}>
                        <TextField
                          id="outlined-basic"
                          label="Enter Name"
                          variant="outlined"
                          autoComplete="off"
                          style={{
                            width: "90%",
                            marginLeft: "5%",
                            marginRight: "auto",
                            marginTop: "3%",
                          }}
                          value={name}
                          onChange={(e) => {
                            setname(e.target.value);
                          }}
                        />

                        <TextField
                          id="outlined-basic"
                          label="Enter Number"
                          type="tel"
                          variant="outlined"
                          style={{
                            width: "90%",
                            marginLeft: "5%",
                            marginRight: "auto",
                            marginTop: "3%",
                          }}
                          autoComplete="off"
                          value={contact}
                          onChange={(e) => {
                            setcontact(e.target.value);
                          }}
                        />

                        <Button
                          variant="contained"
                          sx={{
                            borderRadius: "12px",
                            width: "90%",
                            marginLeft: "5%",
                            marginRight: "auto",
                            marginTop: "3%",
                            backgroundColor: "#002D62",
                          }}
                          type="submit"
                          value="submit"
                        >
                          SUBMIT
                        </Button>
                      </form>
                    </Typography>
                  </Sheet>
                </Modal>
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
                          ₹ {products.price} / Unit
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
                          {products.Category}
                        </p>
                      </Grid>

                      <Grid item xs={6} md={6}>
                        {products?.description?.map((k) => {
                          return (
                            <p
                              style={{
                                fontWeight: "bold",
                                color: "#989898",
                                textAlign: "left",
                                marginLeft: "3%",
                              }}
                            >
                              {k.key}
                            </p>
                          );
                        })}
                      </Grid>
                      <Grid item xs={6} md={6}>
                        {products?.description?.map((k) => {
                          return (
                            <p style={{ color: "#202020", textAlign: "start" }}>
                              {k.value}
                            </p>
                          );
                        })}
                      </Grid>
                    </Grid>
                  </Box>
                </p>
              </section>
            </Grid>
          </Grid>
        </Box>
      )}

      <br />
      <br />
      <br />

      {products && (
        <p>
          <Box sx={{ flexGrow: 1 , marginTop:'5%'}}  >
            <Grid container spacing={2}>
              <Grid item xs={5} md={5}>
                <h3 style={{ color: "#002D62" }}>Similar Items</h3>
              </Grid>
              <Grid item xs={5} md={5}>
                {" "}
                <p style={{ color: "#89CFF0", fontWeight:'bold' }}>
                  <a
                    href={`/product/${products.type}`}
                    style={{ textDecoration: "none", textAlign:'right', float:'right' }}
                  >
                    View All
                  </a>
                </p>{" "}
              </Grid>
            </Grid>
          </Box>
          <RecomendationGrid type={products.type} />
        </p>
      )}
    </div>
  );
};

export default ProductDescription;
