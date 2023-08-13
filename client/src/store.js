import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { LoginAdminReducer } from "./Reducers/adminReducer";
import {GetAllEnqReducer} from './Reducers/enqReducer';
import {GetAllproductsReducer,GetAllproductsReducerT,GetDescriptionproductsReducer} from './Reducers/productReducer'

const FinalReducer = combineReducers({
  LoginAdminReducer: LoginAdminReducer,
  GetAllEnqReducer:GetAllEnqReducer,
  GetAllproductsReducer:GetAllproductsReducer,
  GetAllproductsReducerT:GetAllproductsReducerT,
  GetDescriptionproductsReducer:GetDescriptionproductsReducer
  
});

const InitialState = {};

let store;

if (process.env.NODE_ENV === "production") {
  store = createStore(FinalReducer, InitialState, applyMiddleware(thunk));
} else {
  const { composeWithDevTools } = require("redux-devtools-extension");
  store = createStore(
    FinalReducer,
    InitialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
}

export default store;
