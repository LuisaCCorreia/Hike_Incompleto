import React from 'react';

import { Container, Main } from './styles';

import Navbar from '../../components/Navbar';

function Home() {
   return (
      <Container>
         <Navbar />

         <Main>
            <h1>Home</h1>
         </Main>
      </Container>
  );
}

export default Home;