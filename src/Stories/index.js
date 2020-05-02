import React from 'react';
import { useParams } from 'react-router-dom';

import { Container } from './styles';
import CardStory from './../components/CardStory';

export default function Stories() {

  let { id } = useParams();
 
  return (
    <Container>
      { id != null ? <CardStory id={id}/> : 'Carregando'}
    </Container>
  );
}
