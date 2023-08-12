import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import React from 'react'

const GridCard = ({i}) => {
    return(
        <div>
           <Card>
      <CardMedia
        sx={{ height: 200 }}
        image={i.image}
        title="Pool Image:Wadbros"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {i.name}
        </Typography>
   
      </CardContent>
      
    </Card>
        </div>
    )
}

export default GridCard;