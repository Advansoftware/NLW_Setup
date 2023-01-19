import React from 'react';
import "./video-react.css";
import { Player, BigPlayButton } from 'video-react';
import {Container, Box} from '@mui/material';
function App() {

  return (
      <Container>
        <Box>
          <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
            <BigPlayButton position="center" />
          </Player>
        </Box>
    </Container>
  )
}

export default App;