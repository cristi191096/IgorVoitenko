import styled from 'styled-components/macro';

export const Inner = styled.div`
    display: flex;
    align-items: center;
    flex-direction: ${({direction}) => direction};
    justify-content: space-between;
    max-width: 1100px;
    margin: auto;
    width: 100%;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const Pane = styled.div`
  width: 50%;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size:  ${props => props.theme.jumbotron.item.title.size};
  font-weight: ${props => props.theme.jumbotron.item.title.fontWeight};
  text-align: ${props => props.theme.jumbotron.item.title.align};
  line-height: 1.1;
  margin-bottom: 8px;
  color: ${props => props.theme.jumbotron.item.title.color};
  inline-size: ${props => props.theme.jumbotron.item.title.inlineSize};
  overflow-wrap: break-word;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  font-size: ${props => props.theme.jumbotron.item.subTitle.size};
  font-weight: ${props => props.theme.jumbotron.item.subTitle.fontWeight};
  text-align: ${props => props.theme.jumbotron.item.subTitle.align};
  line-height: normal;
  color: ${props => props.theme.jumbotron.item.subTitle.color};
  inline-size: ${props => props.theme.jumbotron.item.subTitle.inlineSize};
  overflow-wrap: break-word;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  width: 100%;
  height: auto;
`;

export const Item = styled.div`
  display: flex;
  border-bottom-style: ${props => props.theme.jumbotron.item.border.style};
  border-bottom-color: ${props => props.theme.jumbotron.item.border.color};
  border-bottom-width: ${props => props.theme.jumbotron.item.border.width};
  padding: 50px 10%;
  color: black;
  overflow: hidden;
`;

export const Container = styled.div`
  @media (max-width: 1000px) {
    ${Item}:last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`;
