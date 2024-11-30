import * as React from "react";
import styled from "styled-components";
import { PlaylistCard } from "../components/PlaylistCard";
import { SongList } from "../components/SongList";
import { SongDetails } from "../components/SongDetails";
import { Header } from "../components/Header";

const playlist = "Nome da Playlist";

const songs = [
  { id: 1, title: "Nome da Música 1", letra: "Letra da música 1Letra da música 1Letra da música 1Letra da música 1Letra da música 1..." },
  { id: 2, title: "Nome da Música 2", letra: "Letra da música 2Letra da música 2Letra da música 2Letra da música 2Letra da música 2Letra da música 2Letra da música 2Letra da música 2..." },
  { id: 3, title: "Nome da Música 3", letra: "Letra da música 3Letra da música 3Letra da música 3Letra da música 3..." },
  { id: 4, title: "Nome da Música 4", letra: "Letra da música 4Letra da música 4Letra da música 4Letra da música 4Letra da música 4Letra da música 4..." },
  { id: 5, title: "Nome da Música 5", letra: "Letra da música 5Letra da música 5Letra da música 5Letra da música 5Letra da música 5Letra da música 5Letra da música 5..." },
];

export function PlaylistCreator() {
  // Define a música com ID 1 como selecionada inicialmente
  const [selectedSong, setSelectedSong] = React.useState(songs.find((song) => song.id === 1));

  const handleSongSelect = (song) => {
    setSelectedSong(song); // Atualiza o estado com a música selecionada
  };

  return (
    <PageWrapper>
      <Header />
      <ContentContainer>
        <ColumnsLayout>
          <Column>
            <PlaylistCard playlist={playlist}/>
          </Column>
          <Column>
            <SongList songs={songs} onSelectSong={handleSongSelect} />
          </Column>
          <Column>
            {selectedSong && (
              <SongDetails title={selectedSong.title} lyrics={selectedSong.letra} />
            )}
          </Column>
        </ColumnsLayout>
      </ContentContainer>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  background-color: #efefef;
  display: flex;
  padding-bottom: 275px;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 991px) {
    padding-bottom: 100px;
  }
`;

const ContentContainer = styled.div`
  align-self: center;
  width: 100%;
  max-width: 1606px;
  margin: 50px 0 0 41px; /* Margem superior reduzida */
  
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 20px; /* Também reduzido no mobile */
  }
`;


const ColumnsLayout = styled.div`
  gap: 20px;
  display: flex;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;

  @media (max-width: 991px) {
    width: 100%;
  }
`;
