import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StoriesContext } from '../contexts/StoriesContext';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';
import CardStory from './../components/CardStory';

export default function Stories() {

  const history = useHistory();

  const context = useContext(StoriesContext);

  let { id } = useParams();
  // const [story, setStory] = useState(null);

  // useEffect(() => {
  //   alert('a');
  //   if(id){
  //     // // let s = context.stories[id];
  //     // // let s = context.byId(id);
  //     // console.log(typeof s.photo);
  //     // if(s != null){
  //     //   setStory(() => s);
  //     //   return;
  //     // }              
  //   }
    
  //   history.push("/");
    
  // }, [context.stories]);

  return (
    <Container>
      {/* {
        story != null ? <CardStory story={story} /> : 'carregando'
      } */}
      { id != null ? <CardStory id={id}/> : 'Carregando'}
      
    </Container>
  );
}
