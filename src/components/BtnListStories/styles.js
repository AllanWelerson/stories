import styled from 'styled-components';

export const Container = styled.div`
  overflow-y: none !important;
  display: flex;
  flex-direction: row;
  padding-bottom: 10px;
  margin-bottom: 5px; 

  &:hover {
    cursor: pointer;
  }
`;

export const Photo = styled.div`
  background-color: #FFF;
  padding: 2px;
  border: 1px solid red;
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
  flex-direction: column;
  justify-content: center;
`;
