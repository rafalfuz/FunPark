import styled, { css } from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const StyledNavbarWrapper = styled.nav`
  background-color: ${({ theme }) => theme.teriarty};
  height: 80px;
  display: flex;
  position: fixed;
  width: 100vw;
  ${(props) =>
    props.mobileNavActive &&
    css`
      position: fixed;
      width: 100vw;
    `}
    &.styledMicroNav{
        height: 40px;
    }
`;

export const StyledNavbar = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: space-between;
`;

export const StyledNavLogo = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  font-size: 2.4rem;
  display: flex;
  color: cornsilk;
`;

export const StyledCorpName = styled.h1`
  text-transform: uppercase;
`;

export const MobileIcon = styled.div`
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

export const StyledNavMenu = styled.ul`
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
export const StyledItem = styled.li`
  text-transform: uppercase;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid transparent;
    transition: all 0.5s ease;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border-bottom: 2px solid transparent;
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
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
    font-size: 1.4rem;
  }
  &.lastStyledLink {
    border: 2px solid white;
    padding: 10px 20px;
  &:hover {
    transition: all 0.5s ease;
  }

`;
