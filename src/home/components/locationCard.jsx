import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, Button } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/map.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Location
          </Typography>
          <Typography variant="body2" color="text.secondary">
            102 - 2909 Bainbridge Ave, Burnaby, BC V5B 2S9
            Located in the Bainbridge Plaza Unit #102 with the big white and blue Sign GVPPS
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="big" color="secondary" href="https://www.google.com/maps/dir/?api=1&destination=2909+Bainbridge+Ave+BC+CA&travelmode=driving" target="_blank">
          Get Me There!
        </Button>
      </CardActions>
    </Card>
  );
}