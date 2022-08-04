import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";

const StyledNavbarWrapper = styled.nav`
  background-color: ${({ theme }) => theme.teriarty};
  height: 80px;
  display: flex;
  ${(props) =>
    props.mobileNavActive &&
    css`
      position: fixed;
      width: 100vw;
    `}
`;

const StyledNavbar = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: space-between;
`;

const StyledNavLogo = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  font-size: 2.4rem;
  display: flex;
  color: cornsilk;
`;

const StyledCorpName = styled.h1`
  text-transform: uppercase;
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0px;
    right: 0;
    transform: translate(-100%, 60%);
    cursor: pointer;
    font-size: 3rem;
  }
`;

const StyledNavMenu = styled.ul`
  list-style-type: none;
  width: 80%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 80px);
    position: fixed;
    top: 80px;
    left: ${({ mobile }) => (mobile ? 0 : "-100%")};
    background-color: ${({ theme }) => theme.teriarty};
    transition: all 0.5s ease;
    overflow: hidden;
  }
`;
const StyledItem = styled.li`
  text-transform: uppercase;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid #ff1493;
    transition: all 0.5s ease;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border-bottom: 2px solid transparent;
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  font-size: 1.4rem;
  color: cornsilk;
  z-index: 9999;
  &.active {
    font-weight: 600;
    font-size: 1.6rem;
  }
`;

const StyledBorder = styled.div`
  border: 2px solid white;
  padding: 10px;
  font-weight: bold;
  &:hover {
    padding: 8px;
    transition: all 0.5s ease;
  }
`;
export const Navbar = () => {
  const [mobileActive, setMobileActive] = useState(false);

  const handleMobileActive = () => setMobileActive(!mobileActive);

  const removeMenuMobile = () => setMobileActive(false);

  return (
    <StyledNavbarWrapper mobileNavActive={mobileActive && true}>
      <StyledNavbar>
        <StyledNavLogo to="/" onClick={removeMenuMobile}>
          <StyledCorpName>LOGO</StyledCorpName>
        </StyledNavLogo>

        <MobileIcon onClick={handleMobileActive}>
          {mobileActive ? <MdClose /> : <MdMenu />}
        </MobileIcon>
        {mobileActive ? (
          <StyledNavMenu mobile>
            <StyledItem mobile onClick={removeMenuMobile}>
              <StyledNavLink as={NavLink} to="/oferta">
                Oferta
              </StyledNavLink>
            </StyledItem>
            <StyledItem mobile onClick={removeMenuMobile}>
              <StyledNavLink as={NavLink} to="/cennik">
                Cennik
              </StyledNavLink>
            </StyledItem>
            <StyledItem mobile onClick={removeMenuMobile}>
              <StyledNavLink as={NavLink} to="/galeria">
                Galeria
              </StyledNavLink>
            </StyledItem>
            <StyledItem mobile onClick={removeMenuMobile}>
              <StyledNavLink as={NavLink} to="/polenamiotowe">
                Pole Namiotowe Audioriver/HHPF
              </StyledNavLink>
            </StyledItem>
            <StyledItem mobile onClick={removeMenuMobile}>
              <StyledNavLink as={NavLink} to="/dokumenty">
                Dokumenty
              </StyledNavLink>
            </StyledItem>
            <StyledItem mobile onClick={removeMenuMobile}>
              <StyledBorder>
                <StyledNavLink as={NavLink} to="/kontakt">
                  KONTAKT
                </StyledNavLink>
              </StyledBorder>
            </StyledItem>
          </StyledNavMenu>
        ) : (
          <StyledNavMenu>
            <StyledItem>
              <StyledNavLink as={NavLink} to="/oferta" activeclass="active">
                Oferta
              </StyledNavLink>
            </StyledItem>
            <StyledItem>
              <StyledNavLink as={NavLink} to="/cennik" activeclass="active">
                Cennik
              </StyledNavLink>
            </StyledItem>
            <StyledItem>
              <StyledNavLink as={NavLink} to="/galeria" activeclass="active">
                Galeria
              </StyledNavLink>
            </StyledItem>
            <StyledItem>
              <StyledNavLink
                as={NavLink}
                to="/polenamiotowe"
                activeclass="active"
              >
                Pole Namiotowe Audioriver/HHPF
              </StyledNavLink>
            </StyledItem>
            <StyledItem>
              <StyledNavLink as={NavLink} to="/dokumenty" activeclass="active">
                Dokumenty
              </StyledNavLink>
            </StyledItem>
            <StyledItem>
              <StyledBorder>
                <StyledNavLink as={NavLink} to="/kontakt" activeclass="active">
                  KONTAKT
                </StyledNavLink>
              </StyledBorder>
            </StyledItem>
          </StyledNavMenu>
        )}
      </StyledNavbar>
    </StyledNavbarWrapper>
  );
};
