import { useState, useContext } from "react";
import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";
import { Link as RRDLink, useLocation } from "react-router-dom";
import styled, { ThemeContext } from "styled-components";
import { Toggle } from "./Toggle";

const HeaderWrapper = styled.header`
  background: linear-gradient(
    to right,
    ${(p) => p.theme.primaryColor},
    ${(p) => p.theme.secondaryColor}
  );
  height: 60px;
  display: flex;
  width: 100%;
  padding: 0 1rem;
  position: fixed;
  top: 0;
  border-bottom: ${(p) => p.theme.secondaryColor}3px solid;
`;

const Menu = styled.nav`
  display: ${(p) => (p.open ? "block" : "none")};
  position: absolute;
  z-index: 40;
  width: 100%;
  top: 60px;
  left: 0;
  padding: 8px;
  font-family: "Open Sans";
  border-bottom: ${(p) => p.theme.secondaryColor}3px solid;
  background: ${(p) => p.theme.bodyBackgroundColor};

  @media (min-width: 768px) {
    position: relative;
    border-bottom: none;
    width: initial;
    margin: auto 0 auto auto;
    display: flex;
    background: none;
    left: initial;
    top: initial;
  }
`;

const Link = ({ isActive, children, ...props }) => {
  return <RRDLink {...props}>{children}</RRDLink>;
};

//${(p) => console.log(p)};
const StyledLink = styled(Link)`
  padding: 4px 8px;
  display: block;
  text-align: center;
  margin: auton 0;
  font-weight: ${(p) => (p.isActive ? "bold" : "normal")};
  color: ${(p) => p.theme.bodyFontColor};
  text-decoration: none;
`;

const Hamburger = styled.div`
  ${(p) => console.log(p)};
  margin: auto 8px auto auto;
  width: 30px;
  padding: 5px;
  > div {
    height: 3px;
    background: black;
    margin: 5px 0;
    width: 100%;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

const Header = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { id, setTheme } = useContext(ThemeContext);
  // console.log(pathname);
  return (
    <HeaderWrapper>
      <Hamburger open={menuOpen} onClick={() => setMenuOpen((s) => !s)}>
        {menuOpen ? (
          <BsChevronDoubleUp size={35} />
        ) : (
          <BsChevronDoubleDown size={35} />
        )}
      </Hamburger>
      <Menu open={menuOpen}>
        <StyledLink to="/" isActive={pathname === "/"}>
          Home
        </StyledLink>
        <StyledLink to="/login" isActive={pathname === "/login"}>
          Login
        </StyledLink>
        <Toggle isActive={id === "dark"} onToggle={setTheme} />
      </Menu>
    </HeaderWrapper>
  );
};

export { Header };
