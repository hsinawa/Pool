import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Admin = () => {
    return(
        <div>
           <h4>ADMIN PAGE</h4>
<br/>
<section className='companybox' style={{width:'90%', marginLeft:'auto', marginRight:'auto', marginTop:'5%'}} >
    <br/>
    <a href='/admin/productlist' style={{textDecoration:'none', color:'black'}} > <p>See Products</p> </a>
    <hr/>
    <a href='/admin/addproduct' style={{textDecoration:'none', color:'black'}} > <p>Add Products</p> </a>
    <hr/>
    <a href='/admin/enquirylist' style={{textDecoration:'none', color:'black'}} > <p>See Enquiries</p> </a>
    <br/>
</section>


        </div>
    )
}

export default Admin