import React, {useState} from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Background,
  Container,
  Logo,
  ButtonLink,
  Feature,
  Text,
  FeatureCallOut,
  Link,
  LinkA,
  Picture,
  Profile,
  Dropdown,
  Search,
  SearchIcon,
  SearchInput,
  PlayButton,
  Group,
} from "./styles/header";
import {ThemeProvider} from "styled-components"
import { DefaultTheme } from "../../themes";

export default function Header({theme=DefaultTheme, bg = true, children, ...restProps }) {
  return(
    <ThemeProvider theme={theme}>
    { bg ? <Background {...restProps}>{children}</Background> : children}
     </ThemeProvider>
     );

};

Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>;
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
    return <Profile {...restProps}>{children}</Profile>;
  };

Header.Picture = function HeaderFeature({ src, ...restProps }) {
    return <Picture src={`/images/users/${src}.png`} {...restProps}/>;
  };

Header.FeatureCallOut = function HeaderFeatureCallOut({
  children,
  ...restProps
}) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
    return <PlayButton {...restProps}>{children}</PlayButton>;
  };

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {
    const [searchActive, setSearchActive] = useState(false)
    return <Search {...restProps}>
        <SearchIcon onClick={() => setSearchActive(searchActive => !searchActive)} data-testid="search-click">
            <img src="/images/icons/search.png" alt="Search"/>
        </SearchIcon>
            <SearchInput
            value={searchTerm}
             onChange={(e) => setSearchTerm(e.target.value)}
             placeholder="Search films and series"
             active={searchActive}
             data-testid="search-input"
            />
    </Search>;
  };

Header.Text = function HeaderText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
  };
  

Header.TextLink = function HeaderTextLink({ goToSection="", children, ...restProps }) {
  return goToSection === "" ? <Link {...restProps}>{children}</Link> : <LinkA href={`#${goToSection}`} {...restProps}>{children}</LinkA>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
