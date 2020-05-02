import React from 'react';

import Header from './../../components/Header';
import ListStories from './../../components/ListStories';

import { Container } from './styles';

export default function Home() {
  return (
    <>
      <Header />
      <Container>
          <ListStories />
      </Container>
    </>
  );
}
