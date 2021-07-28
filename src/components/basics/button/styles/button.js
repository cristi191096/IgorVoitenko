import styled from 'styled-components/macro';
import { Link as ReachRouterLink } from 'react-router-dom';

export const ButtonLink = styled(ReachRouterLink)`
display: block;
background-color: ${props => props.theme.button.color};
color: ${props => props.theme.button.textColor};
width: fit-content;
height: fit-content;
font-size:  ${props => props.theme.button.fontSize};
margin:  ${props => props.theme.button.margin};
padding: 12px 30px;
cursor: pointer;
text-decoration: none;

border-style: ${props => props.theme.button.border.style};
border-color: ${props => props.theme.button.border.color};
border-width: ${props => props.theme.button.border.width};
border-radius: ${props => props.theme.button.border.radius};


&:hover {
  background: ${props => props.theme.button.hoverColor};
}
`;

export const ButtonLinkA = styled.a`
display: block;
background-color: ${props => props.theme.button.color};
color: ${props => props.theme.button.textColor};
width: fit-content;
height: fit-content;
font-size:  ${props => props.theme.button.fontSize};
margin:  ${props => props.theme.button.margin};
padding: 12px 30px;

cursor: pointer;
text-decoration: none;

border-style: ${props => props.theme.button.border.style};
border-color: ${props => props.theme.button.border.color};
border-width: ${props => props.theme.button.border.width};
border-radius: ${props => props.theme.button.border.radius};


&:hover {
  background: ${props => props.theme.button.hoverColor};
}
`;