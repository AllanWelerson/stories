import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaAngleLeft, FaAngleRight, FaTimes, FaPause } from 'react-icons/fa'

import { Container, Header, Photo, Description, StoriesSlide, BtnChangeSlide, ContainerSlide, Progress } from './styles';
import { StoriesContext } from '../../contexts/StoriesContext';

export default function CardStory({ id }) {

  const history = useHistory();

  const [img, setImg] = useState("");

  const { byId, next, before, reset } = useContext(StoriesContext);
  const [story, setStory] = useState(null);
  const [seconds, setSeconds] = useState(0);
  const [pause, setPause] = useState(false);
  

  useEffect(() => {
    handleImg();    
  }, [story]);

  useEffect(() => {
    handleStory();
  }, []);

  useEffect(() => {
    console.log(seconds);
    if(!pause){
      if(seconds < 400){
        let interval = setInterval(() => {
          setSeconds(seconds => seconds + 1);
        } , 10);
        return () => clearInterval(interval);
      }else{
        handleNext();
        setSeconds(seconds => 0);
      }
    }
    
  }, [seconds, pause]);

  const handleImg = () => {
    if(story){
      setImg(story.list[story.current]);     
    }
  }

  const handleStory = () => {
    
    let s = byId(id);

    if(s != null){
      setStory(() => s);
    } 
    
  }

  const handleNext = () => {
    if(story.current < story.list.length - 1){
      next(id);
      handleStory();
      handleImg();
      setSeconds(seconds => 0); 
    }else{
      reset(id);
      history.push('/');
    }
  }

  const handleBefore = () => {
    before(id);
    handleStory();
    handleImg();
    setSeconds(seconds => 0);   
  }



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
                  { pause === true ? <FaPause className='pause' /> : <FaTimes />}
                </Link>
              </Description>
            </Header> 
            <Progress>
              <progress value={seconds} max='400'></progress>
            </Progress>
            <img  src={img} alt="Stories"
                  onMouseDown={() => setPause(true)} 
                  onMouseUp={() => setPause(false)}/>
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
