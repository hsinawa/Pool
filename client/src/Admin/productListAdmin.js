import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteProductAction, GetAllProductsAction } from "../Actions/productAction";
import { GetAllproductsReducer } from "../Reducers/productReducer";
import { Button, CircularProgress } from "@mui/material";
import ErrorPage from "../screens/errorPage";
import DeleteIcon from "@mui/icons-material/Delete";

const ProductListAdmin = () => {
  const { products, loading, error } = useSelector(
    (state) => state.GetAllproductsReducer
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllProductsAction());
  }, [dispatch]);
  var cnt = 0;

  const deleteProduct = (id) => {
    const r = window.confirm(id);
    if (r === true) {
      dispatch(DeleteProductAction({id}));
    } else {
      return;
    }
  };
  return (
    <div>
      <table class="table">
        <thead>
          <th>S.No</th>
          <th>Name</th>
          <th>Price</th>
          <th>Type</th>
          <th>Category</th>
          <th>Delete</th>
        </thead>
        <tbody>
          {loading && <CircularProgress />}
          {error && <ErrorPage />}

          {products &&
            products.map((i) => {
              return (
                <tr>
                  <td data-label="S.No">{++cnt}</td>
                  <td data-label="Name">{i.name}</td>
                  <td data-label="Price">Rs.{i.price}</td>
                  <td data-label="Type"> {i.type} </td>
                  <td data-label="Category"> {i.Category} </td>
                  <td data-label="Delete" onClick={() => deleteProduct(i._id)}>
                    {" "} 
                    <DeleteIcon />{" "}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductListAdmin;
