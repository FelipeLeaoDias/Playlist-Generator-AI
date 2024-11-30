import * as React from "react";
import styled from "styled-components";

export function SongDetails({ title, lyrics }) {
    return (
      <DetailsWrapper>
        <SongTitle>{title}</SongTitle>
        <SongDescription>{lyrics}</SongDescription>
      </DetailsWrapper>
    );
  }
  
  const DetailsWrapper = styled.div`
    background-color: #107a92;
    display: flex;
    min-height: 500px;
    flex-grow: 1;
    flex-direction: column;
    align-items: center;
    font-family: Inter, sans-serif;
    color: #fff;
    justify-content: center;
    width: 100%;
    padding: 36px 24px;
    @media (max-width: 991px) {
      max-width: 100%;
      margin-top: 40px;
      padding: 0 20px;
    }
  `;
  
  const SongTitle = styled.h2`
    font-size: 32px;
    font-weight: 600;
    text-align: center;
  `;
  
  const SongDescription = styled.p`
    font-size: 24px;
    font-weight: 500;
    margin-top: 12px;
    flex: 1;
  `;
  