import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import React from 'react'

const GridCard = ({i}) => {
    return(
    //     <div>
    //        {/* <Card style={{width:'90%'}} >
    //   <CardMedia
    //     sx={{ height: 200}}
    //     image={i.image}
    //     title="Pool Image:Wadbros"

    //   />
    //   <CardContent>
    //     <Typography gutterBottom variant="h5" component="div">
    //       {i.name} Rs.{i.price}
    //     </Typography>
   
    //   </CardContent>
      
    // </Card> */}
    //     </div>
    <Card raised
    sx={{
      maxWidth: 350,
      margin: "0 auto",
      padding: "0.1em",
      borderRadius:'15px'
    }}
    id='card'
    >
      <CardActionArea>
   

<CardMedia
        component="img"
        height="235"
        alt={"Grid Image"}
        title={"Image"}
        image={i.image}
        alt="Blog Image"
      />
        
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
           {i.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {i.Category}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
          ₹{i.price}
          </Typography>

        </CardContent>
      </CardActionArea>
    </Card>
    )
}

export default GridCard;