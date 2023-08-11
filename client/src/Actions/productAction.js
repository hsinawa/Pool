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



export const GetAllProductsAction = () =>dispatch =>{
  dispatch({ type: Prod_Req });
  axios
    .get(`${Prod_API}/getall`)
    .then((res) => {
      dispatch({ type: Prod_Suc , payload:res.data});
      
    })
    .catch((err) => {
      dispatch({ type: Prod_Fail, payload: err });
      
      
    });
}