import styled from 'styled-components/macro';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: /*linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.35)), TODO: gradients*/ url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')}) top left / cover no-repeat;

  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none;`}
  }
`;

export const Container = styled.div`
  display: flex;
  margin: ${props => props.theme.header.navBar.margin};
  height: 100px;
  justify-content: space-between;
  align-items: center;


  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const Link = styled.p`
  color: ${props => props.theme.header.link.color};
  text-decoration: none;
  margin-right: 30px;
  text-align:  ${props => props.theme.header.link.textAlgin};
  font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
  cursor: pointer;
  width: fit-content;
  height: fit-content;

  &:hover {
    font-weight: bold;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export const LinkA = styled.a`
color: ${props => props.theme.header.link.color};
  text-decoration: none;
  margin-right: 30px;
  text-align:  ${props => props.theme.header.link.textAlgin};
  font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
  cursor: pointer;
  width: fit-content;
  height: fit-content;

  &:hover {
    font-weight: bold;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  background-color: rgba(64, 64, 64, 0.5);
  color: white;
  border: 1px solid white;
  transition: width 0.5s;
  height: 30px
  font-size: 14px;
  border-radius: 4px;
  margin-left: ${({ active }) => (active === true ? '10px' : '0')};
  padding: ${({ active }) => (active === true ? '0 10px' : '0')};
  opacity: ${({ active }) => (active === true ? '1' : '0')};
  width: ${({ active }) => (active === true ? '200px' : '0px')};

  &:focus {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: white;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const SearchIcon = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  outline: 0;
  height: 32px;
  width: 32px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    filter: brightness(0) invert(1);
    width: 16px;
  }
`;

export const ButtonLink = styled(ReachRouterLink)`
display: block;
background-color: ${props => props.theme.header.button.color};
width: fit-content;
height: fit-content;
color: ${props => props.theme.header.button.textColor};
font-size:  ${props => props.theme.header.button.fontSize};
padding: 12px 30px;
cursor: pointer;
text-decoration: none;

border-style: ${props => props.theme.header.button.border.style};
border-color: ${props => props.theme.header.button.border.color};
border-width: ${props => props.theme.header.button.border.width};
border-radius: ${props => props.theme.header.button.border.radius};


&:hover {
  background: ${props => props.theme.header.button.hoverColor};
}
`;

export const ButtonLinkA = styled.a`
display: block;
background-color: ${props => props.theme.header.button.color};
width: fit-content;
height: fit-content;
color: ${props => props.theme.header.button.textColor};
font-size:  ${props => props.theme.header.button.fontSize};
padding: 12px 30px;
cursor: pointer;
text-decoration: none;

border-style: ${props => props.theme.header.button.border.style};
border-color: ${props => props.theme.header.button.border.color};
border-width: ${props => props.theme.header.button.border.width};
border-radius: ${props => props.theme.header.button.border.radius};


&:hover {
  background: ${props => props.theme.header.button.hoverColor};
}
`;

export const Picture = styled.img`
  width: fit-content;
  height: fit-content;
  max-width:100%;

  transform: rotate(-90deg);

`;

export const ProfilePicture = styled.button`
  background: url(${({ src }) => src});
  background-size: contain;
  border: 0;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const Dropdown = styled.div`
  display: none;
  position: absolute;
  background-color: black;
  padding: 10px;
  width: 100px;
  top: 32px;
  right: 10px;

  ${Group}:last-of-type ${Link} {
    cursor: pointer;
  }

  ${Group} {
    margin-bottom: 10px;

    &:last-of-type {
      margin-bottom: 0;
    }

    ${Link} {
      cursor: pointer;
    }

    ${Picture} {
      cursor: default;
    }
  }

  button {
    margin-right: 10px;
  }

  p {
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 0;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;

  button {
    cursor: pointer;
  }

  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`;

export const Feature = styled(Container)`
  padding: ${props => props.theme.header.feature.padding};
  margin: ${props => props.theme.header.feature.margin};
  flex-direction: column;
  align-items: normal;
  align-self: ${props => props.theme.header.feature.align === "" ? "auto" : props.theme.header.feature.align};
  width: 50%;
  inline-size: ${props => props.theme.header.feature.inlineSize};
  overflow-wrap: break-word;

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const FeatureCallOut = styled.h2`
  color: ${props => props.theme.header.featureCallOut.color === "" ? props.theme.header.textColor : props.theme.header.featureCallOut.color};
  font-size: 50px;
  line-height: normal;
  font-weight: bold;
  text-align:  ${props => props.theme.header.featureCallOut.textAlgin};
  text-shadow: ${props => props.theme.header.featureCallOut.shadow ? "2px 2px 4px rgba(0, 0, 0, 0.45)" : "none"};
  margin: 0;
`;

export const Text = styled.p`
  color: ${props => props.theme.header.text.color === "" ? props.theme.header.textColor : props.theme.header.text.color};
  font-size: 22px;
  line-height: normal;
  text-align:  ${props => props.theme.header.text.textAlgin};
  text-shadow: ${props => props.theme.header.text.shadow ? "2px 2px 4px rgba(0, 0, 0, 0.45)" : "none"};
`;

export const Logo = styled.img`
  height: 36px;
  width: 134px;
  margin-right: 40px;

  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`;

export const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  color: #000;
  border-width: 0;
  padding: 10px 20px;
  border-radius: 5px;
  max-width: 130px;
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: #ff1e1e;
    color: white;
  }
`;
