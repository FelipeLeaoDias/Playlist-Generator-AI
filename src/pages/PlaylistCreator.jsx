import * as React from "react";
import { useState, useEffect } from 'react';
import { Box, Card, TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import styled from "styled-components";
import { PlaylistCard } from "../components/PlaylistCard";
import { SongList } from "../components/SongList";
import { SongDetails } from "../components/SongDetails";
import { Header } from "../components/Header";

// const playlist = "Nome da Playlist";

const starter_songs = [
  { id: 0, artist: "Artista", song: "Música", lyrics: "Letra da música" }
  ];

const starter = {
  "description": "Monte sua playlist personalizada de acordo com seu anime ou jogo favorito!",
  "image": "https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png",
  "media": "Playlist"
}

export function PlaylistCreator() {
  // Define a música com ID 1 como selecionada inicialmente

  const [playlist, setPlaylist] = useState(starter);
  const [songlist, setSonglist] = useState(starter_songs)
  const [selectedSong, setSelectedSong] = React.useState(songlist.find((songlist) => songlist.id === 1));

  const handleSongSelect = (song) => {
    setSelectedSong(song); // Atualiza o estado com a música selecionada
  };


  const SearchBar = () => {
    const [media, setMedia] = useState("");

    const searchPlaylist = async () => {
      console.log(media)
      const res = await fetch(`http://127.0.0.1:5000/music/${media}`, { method: "GET", headers: {'Access-Control-Allow-Origin':'*'}});
      const data = await res.json();
      
      const songList = Object.keys(data.songs.artist).map((id) => ({
        id,
        artist: data.songs.artist[id],
        song: data.songs.song[id],
        lyrics: data.songs.text[id],
      }));

      setPlaylist(data);
      setSonglist(songList)
      console.log(data);
    }

    return (
      <Box display="flex" alignItems="center" gap={2} mt={4}>
        <TextField
          label="Pesquisar"
          variant="outlined"
          value={media}
          onChange={(e) => setMedia(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={searchPlaylist}
          sx={{backgroundColor: '#1db954', color: "#212121"}}
        >
          Buscar
        </Button>
      </Box>
    )
  };

  return (
    <Box sx={PageWrapper}>
      <Header />
      <SearchBar></SearchBar>
      <Box sx={ContentContainer}>
        <Card sx={{ width: '20%',maxHeight: '80%' }}><PlaylistCard playlist={playlist.media} description={playlist.description} image={playlist.image} /></Card>
        <Card sx={{ width: '20%' }}><SongList songs={songlist} onSelectSong={handleSongSelect} /></Card>
        <Card sx={{ width: '45%', height: '100%' }}>
          {selectedSong && (
            <SongDetails title={selectedSong.song} lyrics={selectedSong.lyrics} />
          )}
        </Card>
      </Box>
    </Box>
  )
}

const PageWrapper = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: '100%',
};

const ContentContainer = {
  display: 'flex',
  flexDirection: 'row',
  p: 1,
  alignItems: 'center',
  justifyContent: 'space-around',
  width: '90%',
  height: '75%',
};
