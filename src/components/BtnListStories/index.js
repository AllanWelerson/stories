import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Photo, Description } from './styles';

export default function BtnListStories({ story }) {
  
  const history = useHistory();

  const handleClick = () => {
    history.push({pathname: `/stories/${story.id}`});
  }
  
  return (
    <Container onClick={handleClick} >
      <Photo>
        <img src={story.photo} alt=""/>
      </Photo>
      <Description>
        { story.name }
      </Description>
    </Container>
  );
}
