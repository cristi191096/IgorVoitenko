import styled from "styled-components/macro";

export const NormalText = styled.p`
  color: ${(props) => props.theme.text.normal.color};
  font-size: ${(props) => props.theme.text.normal.fontSize};
  line-height: normal;
  text-align: ${(props) => props.theme.text.normal.textAlgin};
  text-shadow: ${(props) =>
    props.theme.text.normal.shadow
      ? "2px 2px 4px rgba(0, 0, 0, 0.45)"
      : "none"};
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.text.title.color};
  font-size: ${(props) => props.theme.text.title.fontSize};
  line-height: 1.1;
  text-align: ${(props) => props.theme.text.title.textAlign};
  text-shadow: ${(props) =>
    props.theme.text.title.shadow ? "2px 2px 4px rgba(0, 0, 0, 0.45)" : "none"};
  margin-top: 0;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h3`
  color: ${(props) => props.theme.text.subtitle.color};
  font-size: ${(props) => props.theme.text.subtitle.fontSize};
  line-height: 1.1;
  text-align: ${(props) => props.theme.text.subtitle.textAlign};
  text-shadow: ${(props) =>
    props.theme.text.subtitle.shadow
      ? "2px 2px 4px rgba(0, 0, 0, 0.45)"
      : "none"};
  margin-top: 0;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const Small = styled.p`
  color: ${(props) => props.theme.text.small.color};
  font-size: ${(props) => props.theme.text.small.fontSize};
  line-height: normal;
  text-align: ${(props) => props.theme.text.small.textAlgin};
  text-shadow: ${(props) =>
    props.theme.text.small.shadow ? "2px 2px 4px rgba(0, 0, 0, 0.45)" : "none"};
`;

export const Large = styled.p`
  color: ${(props) => props.theme.text.large.color};
  font-size: ${(props) => props.theme.text.large.fontSize};
  line-height: normal;
  text-align: ${(props) => props.theme.text.large.textAlgin};
  text-shadow: ${(props) =>
    props.theme.text.large.shadow ? "2px 2px 4px rgba(0, 0, 0, 0.45)" : "none"};
`;
