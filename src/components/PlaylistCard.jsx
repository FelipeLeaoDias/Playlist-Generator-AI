import * as React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import styled from "styled-components";

export function PlaylistCard({ playlist, description, image }) {
  return (
    <CardActionArea>
      <CardMedia
        component="img"
        image={image}
        alt="Playlist cover"
        sx={{ objectFit: 'contain' }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {playlist}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', maxHeight: '100px', overflow: 'auto' }}>
          {description}
        </Typography>
      </CardContent>
    </CardActionArea>
  );
}