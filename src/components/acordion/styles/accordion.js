import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  background: ${props => props.theme.accordion.BGColor};
`;

export const Frame = styled.div`
  margin-bottom: 40px;
`;

export const Inner = styled.div`
  display: flex;
  padding: 70px 45px;
  flex-direction: column;
  max-width: 815px;
  margin: auto;
`;

export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 8px;
  color: ${props => props.theme.accordion.title.color === "" ? props.theme.accordion.textColor : props.theme.accordion.title.color};
  text-align: center;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const Item = styled.div`
  color: ${props => props.theme.accordion.textColor};
  margin: auto;
  margin-bottom: 10px;
  max-width: 815px;
  width: 100%;

  &:first-of-type {
    margin-top: 3em;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 1px;
  font-size: 26px;
  font-weight: normal;
  background: ${props => props.theme.accordion.item.BGColor};
  padding: 0.8em 1.2em 0.8em 1.2em;
  user-select: none;
  align-items: center;

  border-style: ${props => props.theme.accordion.border.style};
  border-color: ${props => props.theme.accordion.border.color};
  border-width: ${props => props.theme.accordion.border.width};
  border-radius: ${props => props.theme.accordion.border.radius};

  img {
    filter: brightness(0) invert(0);
    width: 24px;
    user-select: none;

    &.closed {
      transform: rotate(-45deg);

      
    transition: transform;
    transition-duration: ${props => props.theme.accordion.transition.duration};
    transition-timing-function: cubic-bezier(${props => props.theme.accordion.transition.cubicBezier});
    }

    &.open {
      transform: rotate(-90deg);

    transition: transform;
    transition-duration: ${props => props.theme.accordion.transition.duration};
    transition-timing-function: cubic-bezier(${props => props.theme.accordion.transition.cubicBezier});
    }

    @media (max-width: 600px) {
      width: 16px;
    }
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const Body = styled.div`
  font-size: 26px;
  font-weight: normal;
  line-height: normal;
  background: ${props => props.theme.accordion.item.BGColor};
  white-space: pre-wrap;
  user-select: none;
  overflow: hidden;

  border-style: ${props => props.theme.accordion.border.style};
  border-color: ${props => props.theme.accordion.border.color};
  border-width: ${props => props.theme.accordion.border.width};
  border-radius: ${props => props.theme.accordion.border.radius};

  &.closed {  
    max-height: 0;
    border-style: none;
    
    overflow: hidden;
    transition: max-height;
    transition-duration: ${props => props.theme.accordion.transition.duration};
    transition-timing-function: cubic-bezier(${props => props.theme.accordion.transition.cubicBezier});
  }

  &.open {
    max-height: ${props => props.theme.accordion.item.maxHeight};
    transition: max-height;
    transition-duration: ${props => props.theme.accordion.transition.duration};
    transition-timing-function: cubic-bezier(${props => props.theme.accordion.transition.cubicBezier});
  }

  span {
    display: block;
    padding: 0em 2.2em 0.8em 1.2em;
  }

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
