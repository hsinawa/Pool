import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import './commonStyle.css'

//Static Files
import image_pool from '../Static/pool.jpeg'
import textData from '../Static/Text.json'

const Homescreen = () => {
    const [isMobile, setisMobile] = React.useState(false)
    const handleResize = () => {
        if (window.innerWidth < 720) {
            setisMobile(true)
        } else {
            setisMobile(false)
        }
      }
    useEffect( ()=>{
        window.addEventListener("resize", handleResize)
    } )

    return(
        <div>
          <br/>
          
          <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md = {6}>
          <img  src={image_pool} className='images'  />
        </Grid>
        <Grid item xs={12} md = {6} >
          <p>
              <h2>{textData.hello}</h2>

          </p>
        </Grid>
       
      </Grid>
    </Box>
         
        </div>
    )
}

export default Homescreen