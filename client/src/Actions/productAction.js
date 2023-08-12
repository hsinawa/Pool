import { type } from "@mui/material";
import axios from "axios";

const Prod_Req = "Prod_Req";
const Prod_Suc = "Prod_Suc";
const Prod_Fail = "Prod_Fail";
const Prod_API = "/api/product";
export const ProductAddAction = (data) => (dispatch) => {
  dispatch({ type: Prod_Req });
  axios
    .post(`${Prod_API}/addproduct`, data)
    .then((res) => {
      dispatch({ type: Prod_Suc });
      window.location.href = "/admin/productlist";
    })
    .catch((err) => {
      dispatch({ type: Prod_Fail, payload: err });

      window.location.href = "/error";
    });
};

export const GetAllProductsAction = () => (dispatch) => {
  dispatch({ type: Prod_Req });
  axios
    .get(`${Prod_API}/getall`)
    .then((res) => {
      dispatch({ type: Prod_Suc, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: Prod_Fail, payload: err });
    });
};

export const GetProductByIdAction =
  ({ id }) =>
  (dispatch) => {
    dispatch({ type: Prod_Req });
    axios
      .post(`${Prod_API}/prodbyId`, { id })
      .then((res) => {
        dispatch({ type: Prod_Suc, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: Prod_Fail, payload: err });
      });
  };

const Prod_Enq_Req = "Prod_Enq_Req";
const Prod_Enq_Suc = "Prod_Enq_Suc";
const Prod_Enq_Fail = "Prod_Enq_Fail";

export const AddReviewProductAction =
  ({ id, data }) =>
  (dispatch) => {
    dispatch({ type: Prod_Enq_Req });
    axios
      .post(`${Prod_API}/addreview`, { id, data })
      .then((res) => {
        dispatch({ type: Prod_Enq_Suc, payload: res.data });
        window.location.href='/success'
      })
      .catch((err) => {
        dispatch({ type: Prod_Enq_Fail, payload: err });
      });
  };

const Del_Prod = "Del_Prod";
const Del_Prod_Suc = "Del_Prod_Suc";
const Del_Prod_Fail = "Del_Prod_Fail";

export const DeleteProductAction =
  ({ id }) =>
  (dispatch) => {
    dispatch({ type: Del_Prod });

    axios
      .post(`${Prod_API}/delete`, { id })
      .then((res) => {
        dispatch({ type: Del_Prod_Suc, payload: res.data });
        alert("Deleted Successfully");
        window.location.reload();
      })
      .catch((err) => {
        dispatch({ type: Del_Prod_Fail, payload: err });
        window.location.href = "/error";
      });
  };
