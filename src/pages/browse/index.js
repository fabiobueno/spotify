import React from "react";

import { Container, Title, List, PlayList } from "./styles";

const Browse = () => (
  <Container>
    <Title>Navegar</Title>
    <List>
      <PlayList to="/playlists/1">
        <img
          src="https://images.theconversation.com/files/258026/original/file-20190208-174861-nms2kt.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
          alt="Playlist"
        />
        <strong>Rock Top</strong>
        <p>Relaxe equanto você programa ouvindo o melhor do rock.</p>
      </PlayList>
      <PlayList to="/playlists/1">
        <img
          src="https://images.theconversation.com/files/258026/original/file-20190208-174861-nms2kt.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
          alt="Playlist"
        />
        <strong>Rock Top</strong>
        <p>Relaxe equanto você programa ouvindo o melhor do rock.</p>
      </PlayList>
      <PlayList to="/playlists/1">
        <img
          src="https://images.theconversation.com/files/258026/original/file-20190208-174861-nms2kt.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
          alt="Playlist"
        />
        <strong>Rock Top</strong>
        <p>Relaxe equanto você programa ouvindo o melhor do rock.</p>
      </PlayList>
      <PlayList to="/playlists/1">
        <img
          src="https://images.theconversation.com/files/258026/original/file-20190208-174861-nms2kt.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
          alt="Playlist"
        />
        <strong>Rock Top</strong>
        <p>Relaxe equanto você programa ouvindo o melhor do rock.</p>
      </PlayList>
    </List>
  </Container>
);

export default Browse;
