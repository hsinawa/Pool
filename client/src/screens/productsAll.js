import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllProductsAction } from "../Actions/productAction";
import { GetAllproductsReducer } from "../Reducers/productReducer";
import { Button, CircularProgress } from "@mui/material";
import ErrorPage from "../screens/errorPage";
import GridCard from "./GridProduct";


const AllProducts = ({ limit }) => {
  const { products, loading, error } = useSelector(
    (state) => state.GetAllproductsReducer
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllProductsAction());
  }, [dispatch]);

  return (
    <div>
      {loading && <CircularProgress />}
      {error && <ErrorPage />}

      <div
        className="pool-box"
        style={{ width: "95%", marginLeft: "auto", marginRight: "auto" }}
      >
        {products &&
          products.map((i) => {
            return (
              <a
                href={`/productitem/${i._id}`}
                style={{ textDecoration: "none", margin: "10px" }}
              >
                {" "}
                <GridCard i={i} />
              </a>
            );
          })}
      </div>
    </div>
  );
};

export default AllProducts;
