import * as React from "react";
import styled from "styled-components";

export function PlaylistCard({ playlist }) {
  return (
    <CardWrapper>
      <PlaylistImage
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee3ee7b1bb1b711007b7b66edabb028feabb4e3d0ce6349192023da3f52c4423?placeholderIfAbsent=true&apiKey=ff680b0682e2437998d0719e369713f3"
        alt="Playlist cover"
      />
      <PlaylistTitle>{ playlist }</PlaylistTitle>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  background-color: #107a92;
  display: flex;
  min-height: 500px;
  flex-direction: column;
  align-items: center;
  color: #fff;
  justify-content: center;
  width: 100%;
  padding: 53px 24px;
  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const PlaylistImage = styled.img`
  aspect-ratio: 0.99;
  object-fit: contain;
  object-position: center;
  width: 320px;
  max-width: 100%;
`;

const PlaylistTitle = styled.h2`
  margin-top: 24px;
  font: 700 40px Inter, sans-serif;
`;