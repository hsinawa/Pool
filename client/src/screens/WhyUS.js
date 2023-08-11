import React from 'react'
import textData from "../Static/Text.json";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import PaymentIcon from '@mui/icons-material/Payment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import PsychologyIcon from '@mui/icons-material/Psychology';
import HandshakeIcon from '@mui/icons-material/Handshake';
import StarIcon from '@mui/icons-material/Star';

const WhyUS = () => {

    
   
    return(
        <div>
            <section  style={{
        marginTop: "7%",
        width: "85%",
        textAlign:'justify',
        marginLeft: "auto",
        marginRight: "auto",
      }} >
           <h3 style={{color: "#002D62"}} > {textData.WhyUSPage.name} </h3>
           <p> {textData.WhyUSPage.description} </p>
<p className='whyusgrid' >
<Box sx={{ width: "100%" , marginTop:'1%', textAlign:'start'}}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={4}>
        <StarIcon style={{fontSize:'30px', color:'#787878', marginRight:'-1%'}} /> {textData.WhyUSPage.values[0]}
          </Grid>
          <Grid item xs={12} md={4}>
          <PaymentIcon  style={{fontSize:'30px', color:'#787878'}}/> {textData.WhyUSPage.values[1]}
          </Grid>
          <Grid item xs={12} md={4}>
          <LocalShippingIcon  style={{fontSize:'30px', color:'#787878'}}/> {textData.WhyUSPage.values[2]}
          </Grid>

          <Grid item xs={12} md={4}>
          <Diversity3Icon  style={{fontSize:'30px', color:'#787878'}}/> {textData.WhyUSPage.values[3]}
          </Grid>

          <Grid item xs={12} md={4}>
          <PsychologyIcon  style={{fontSize:'30px', color:'#787878'}}/> {textData.WhyUSPage.values[4]}
          </Grid>

          <Grid item xs={12} md={4}>
          <HandshakeIcon  style={{fontSize:'30px', color:'#787878'}}/> {textData.WhyUSPage.values[5]}
          </Grid>

        </Grid>
      </Box>


</p>
      


                </section>
          
        </div>
    )
}

export default WhyUS