const Enq_Req = "Enq_Req";
const Enq_Suc = "Enq_Suc";
const Enq_Fail = "Enq_Fail";

export const GetAllEnqReducer = (state = { enquiries: [] }, action) => {
    switch (action.type) {
      case Enq_Req:
        return {
          ...state,
          loading: true,
        };
  
      case Enq_Suc:
        return {
          ...state,
          loading: false,
          enquiries: action.payload,
        };
  
      case Enq_Fail:
        return {
          ...state,
          loading: true,
          error: false,
        };
  
      default:
        return state;
    }
  };