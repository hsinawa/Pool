const Prod_Req = "Prod_Req";
const Prod_Suc = "Prod_Suc";
const Prod_Fail = "Prod_Fail";

export const GetAllproductsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
      case Prod_Req:
        return {
          ...state,
          loading: true,
        };
  
      case Prod_Suc:
        return {
          ...state,
          loading: false,
          products: action.payload,
        };
  
      case Prod_Fail:
        return {
          ...state,
          loading: true,
          error: false,
        };
  
      default:
        return state;
    }
  };


  const Prod_ReqT = "Prod_ReqT";
  const Prod_SucT = "Prod_SucT";
  const Prod_FailT = "Prod_FailT";
  export const GetAllproductsReducerT = (state = { products: [] }, action) => {
    switch (action.type) {
      case Prod_ReqT:
        return {
          ...state,
          loading: true,
        };
  
      case Prod_SucT:
        return {
          ...state,
          loading: false,
          products: action.payload,
        };
  
      case Prod_FailT:
        return {
          ...state,
          loading: true,
          error: false,
        };
  
      default:
        return state;
    }
  };