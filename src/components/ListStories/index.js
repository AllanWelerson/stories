import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Container, Header, List } from './styles';

import BtnListStories from './../BtnListStories';
import { StoriesContext } from '../../contexts/StoriesContext';

export default function ListStories() {

  const context = useContext(StoriesContext);

  const data = context.stories
        .filter(story => story.list.length > 0)
        .map(story => ( 
          <BtnListStories key={story.id} story={story}></BtnListStories> 
  ));

  return (
    <Container>
      <Header>
        <div className='title'>
          Stories
        </div>
        <Link to='/stories' className='link'>
          See All
        </Link>
      </Header>
      <List>
        {data}
       
        {/* {data}
        {data} */}
      </List>

    </Container>
  );
}
