import styled from 'styled-components';

export const Container = styled.div`
  width: 40vw;
  min-width: 100px;
  height: 90vh;
  min-height: 400px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  padding: 10px;
  display: flex;
  flex-direction: row;
`;

export const Photo = styled.div`
  background-color: #FFF;
  padding: 2px;
  border-radius: 50%;
  margin-right: 15px;
  width: 40px;
  height: 40px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

`;

export const Description = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #FFF;
  width: 90%;

  a{
    color: #FFF;
    text-decoration: none;
  }
`;

export const ContainerSlide = styled.section`
  height: 100%;
  width: 100%;
  
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const StoriesSlide = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
`;

export const BtnChangeSlide = styled.button`
  background-color: transparent;
  color: #FFF;
  font-size: 2em;
  width: 90px !important;
  padding: 0 !important;
  outline: none;

  &:hover {
    cursor: pointer;
  }
`;

export const Progress = styled.div`

  padding-bottom: 6px;

  progress {
    width: 100%;
    height: 2px;
    /* background: red !important; */
    appearance: none;
    -webkit-appearance: none;
    /* transition: ease-in-out; */
  }

  /* progress::-webkit-progress-bar {
    background-color: #eee;
    border-radius: 2px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
  } */

  progress::-webkit-progress-value {
    background-color: lightblue;
  }

`;