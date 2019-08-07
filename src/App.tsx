import React from 'react';
import Map from './TaxiMap/Map';
import { Container } from '@material-ui/core';


const App: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Map />
    </Container>
  );
}

export default App;
