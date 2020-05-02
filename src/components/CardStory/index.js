import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaAngleLeft, FaAngleRight, FaTimes } from 'react-icons/fa'

import { Container, Header, Photo, Description, StoriesSlide, BtnChangeSlide, ContainerSlide } from './styles';
import { StoriesContext } from '../../contexts/StoriesContext';

export default function CardStory({ id }) {

  const history = useHistory();

  const [img, setImg] = useState("");

  const { byId, next, before, reset } = useContext(StoriesContext);
  const [story, setStory] = useState(null);
  


  const [count, setCount] = useState(0);
  const [interval, setIntervalo] = useState(null);

  useEffect(() => {
    handleImg();    
  }, [story]);

  useEffect(() => {
    handleStory();
  }, []);

  const handleImg = () => {
    if(story){
      setImg(story.list[story.current]);
      // handleTimeVisible();
      
    }
    
  }

  const handleStory = () => {
    
    let s = byId(id);

    if(s != null){
      setStory(() => s);
    } 
    
  }

  const handleNext = () => {
    next(id);
    handleStory();
    handleImg();  
  }

  const handleBefore = () => {
    before(id);
    handleStory();
    handleImg();  
  }

  const resetInterval = () => {
    // setCount(0);
    clearInterval(interval);
    setIntervalo(null);
    if(interval){
      alert('interval', interval);
      console.log(interval);
    }
    
  }

  // const handleTimeVisible =  function(){
  //     let a = 0;

  //     let newInterval = setInterval( function(){
  //       a++;
  //       console.log(a);
  //       if(a > 100){
  //         a = 0;
  //         clearInterval(interval);
  //         if(story.current < story.list.length - 1){
  //           handleNext();
  //         }else{
  //           reset(id);
  //           history.push('/');
  //         }
  //       }
  //     }, 100);

  //     setIntervalo(newInterval);
  // }

  if(story){
    return (
      <Container >
        {/* <button onClick={() => clearInterval(interval)}>teste</button>  */}
        <ContainerSlide>
          <BtnChangeSlide>
            { story.current > 0 ? <FaAngleLeft onClick={() => handleBefore()} /> : ''}
          </BtnChangeSlide>
            <StoriesSlide>
              <Header>
              <Photo>
                <img src={story.photo} alt=""/>
              </Photo>
              <Description>
                <div>{ story.name }</div>
                <Link to='/'>
                  <FaTimes />
                </Link>
              </Description>
            </Header> 
            <img src={img} alt=""/>
          </StoriesSlide>
          <BtnChangeSlide>
            { story.current < story.list.length - 1 ?  <FaAngleRight onClick={() => handleNext()}/> : '' }
          </BtnChangeSlide>
        </ContainerSlide>
     </Container>
   );
  }else{
    return (
      <Container>
        Carregando
      </Container>
    );
  }

 
}
