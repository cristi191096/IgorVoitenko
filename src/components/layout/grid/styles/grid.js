import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  padding: ${props => props.theme.grid.containerPadding};
  margin: auto;

  flex-direction: column;
  background-color: ${props => props.theme.grid.BGColor};

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: ${props => props.theme.grid.columnPadding};
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${props => props.theme.grid.columnSize}, 1fr));
  grid-gap: 20px;
  

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(${props => props.theme.grid.columnSize}, 1fr));
    padding: 0 0px;
  }
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
