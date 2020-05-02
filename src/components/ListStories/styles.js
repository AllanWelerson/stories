import styled from 'styled-components';

export const Container = styled.section`
  border: 1px solid #dcdde1;
  border-radius: 5px;
  padding: 15px;
  width: 300px;
  height: 400px;
  overflow: hidden;
  background-color: #FFF;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  
  .title {
    color: #718093;
  }

  .link {
    color: black;
    text-decoration: none;
  }
`;

export const List = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  padding-bottom: 10px;
  /* background-color: red; */
  height: 340px;
  overflow-x: none;
  overflow-y: auto;
`;
