import * as React from "react";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ButtonGroup from '@mui/material/ButtonGroup';

import styled from "styled-components";
import ListGroup from "react-bootstrap/ListGroup";

export function SongList({ songs, onSelectSong }) {
  const [selectedSong, setSelectedSong] = React.useState(null);

  const handleSelect = (song) => {
    setSelectedSong(song.id);
    onSelectSong(song); // Passa a música selecionada para o componente pai
  };

  return (
    <List component="nav" >
      {songs.map((song) => (
        <ListItemButton
          key={song.id}
          selected={selectedSong === 0}
          onClick={() => handleSelect(song)}
        >
          <ListItemText primary={song.song} />
        </ListItemButton>
      ))}
    </List>
  );
}