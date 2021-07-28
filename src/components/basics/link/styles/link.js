import styled from 'styled-components/macro';
import { Link as ReachRouterLink } from 'react-router-dom';

export const RouterLink = styled(ReachRouterLink)`
display: block;
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
  
}
`;

export const RouterLinkA = styled.a`
display: block;
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
  
}
`;