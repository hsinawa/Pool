import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProductByTypeAction } from "../Actions/productAction";
import { GetAllproductsReducerT } from "../Reducers/productReducer";
import { CircularProgress } from "@mui/material";
import ErrorPage from "../screens/errorPage";
import GridCard from "./GridProduct";


const RecomendationGrid = ({type}) => {
 
    const { products, loading, error } = useSelector(
        (state) => state.GetAllproductsReducerT
      );
    
      const dispatch = useDispatch();
      useEffect(() => {
        dispatch(GetProductByTypeAction({type}));
      }, [type,dispatch]);

      

    return(
        <div>
            {loading&&<CircularProgress />}
            {error&&<ErrorPage/>}
            <div className='pool-box' style={{width:'95%', marginLeft:'auto', marginRight:'auto'}}  >
            {products&&(
                products.slice(0,3).map(i=>{
                    return <a href={`/productitem/${i._id}`} style={{textDecoration:'none', margin:'10px'}} > <GridCard i={i}  /></a>
                })
            )}
            </div>
        </div>
    )
}

export default RecomendationGrid