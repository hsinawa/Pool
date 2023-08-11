import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './admin.css'
import { Button, CircularProgress } from "@mui/material";
import { GetAllEnquiries } from '../Actions/enquiryAction';
import {GetAllEnqReducer} from '../Reducers/enqReducer'
import ErrorPage from '../screens/errorPage';
const EnquiriesAdmin = () => {

    const dispatch = useDispatch()

    const enqdata = useSelector(
        (state) => state.GetAllEnqReducer
      );
    const { enquiries, loading, error } = enqdata
    
      React.useEffect(() => {
        dispatch(GetAllEnquiries());
      },[dispatch]);

    return(
        <div>
            <table class="table">
  <thead>
    
    <th>Name</th>
    <th>Contact</th>
    <th>Comment</th>
    <th>Date</th>
  </thead>
  <tbody>
      {loading&&(<CircularProgress/>)}
      {error&&(<ErrorPage/>)}
  
     {
         enquiries&&( 
             
             enquiries.map(i=>{
                 return  <tr>
                 <td data-label="Name">{i.name}</td>
                 <td data-label="Contact">{i.contact}</td>
                 <td data-label="Comment"> {i.comment} </td>
                 <td data-label="Date"> {i.createdAt.substr(0,10)} </td>
                 </tr>
             })
             
            
         )
     }
   
   

    
  </tbody>
</table>
        </div>
    )
}

export default EnquiriesAdmin