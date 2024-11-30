import * as React from "react";
import styled from "styled-components";
import ListGroup from "react-bootstrap/ListGroup";

export function SongList({ songs, onSelectSong }) {
  const [selectedSong, setSelectedSong] = React.useState(null);

  const handleSelect = (song) => {
    setSelectedSong(song.id);
    onSelectSong(song); // Passa a música selecionada para o componente pai
  };

  return (
    <ListWrapper>
      <SongListContainer>
        <StyledListGroup>
          {songs.map((song) => (
            <StyledListGroupItem
              key={song.id}
              onClick={() => handleSelect(song)}
              isSelected={selectedSong === song.id}
            >
              <Divider />
              <SongTitle>{song.title}</SongTitle>
              <Divider />
            </StyledListGroupItem>
          ))}
        </StyledListGroup>
      </SongListContainer>
    </ListWrapper>
  );
}

const ListWrapper = styled.div`
  background-color: #107a92;
  display: flex;
  min-height: 500px;
  flex-grow: 1;
  align-items: center;
  color: #fff;
  text-align: center;
  width: 100%;
  justify-content: center;
  padding: 37px 24px;
  font: 600 32px Inter, sans-serif;

  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const SongListContainer = styled.div`
  align-self: stretch;
  display: flex;
  min-width: 240px;
  width: 406px;
  flex-direction: column;
  justify-content: start;
  margin: auto 0;
`;

const StyledListGroup = styled(ListGroup)`
  background-color: transparent;
  border: none;
`;

const StyledListGroupItem = styled(ListGroup.Item)`
  background-color: ${({ isSelected }) => (isSelected ? "#a9deea" : "transparent")};
  color: ${({ isSelected }) => (isSelected ? "#107a92" : "#fff")};
  border: none;
  cursor: pointer;
  padding: 0;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ isSelected }) => (isSelected ? "#a9deea" : "#87c2cf")};
    color: #107a92;
  }
`;

const Divider = styled.div`
  background-color: #a9deea;
  display: flex;
  min-height: 2px;
  width: 100%;
  margin: 14px 0;
`;

const SongTitle = styled.div`
  margin: 14px 0;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`;
