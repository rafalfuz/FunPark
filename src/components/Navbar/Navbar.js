import React, { useState } from "react";
import { StyledNavbarWrapper, 
  StyledNavbar, 
  StyledNavLogo, 
  StyledCorpName, 
  MobileIcon, 
  StyledNavMenu, 
  StyledItem, 
  StyledNavLink} from './NavbarStyles'
  import { Link, animateScroll as scroll } from "react-scroll";
import { MdMenu, MdClose } from "react-icons/md";


export const Navbar = () => {
  const [mobileActive, setMobileActive] = useState(false);
  const [smallNavbar, setSmallNavbar] = useState(false)
  const handleMobileActive = () => setMobileActive(!mobileActive);

  const removeMenuMobile = () => setMobileActive(false);

  const toTop = () => {
    scroll.scrollToTop();
    removeMenuMobile();
  };

  const changeNavbar = () => {
    if(window.scrollY >= 80){
      setSmallNavbar(true)
    } else {
      setSmallNavbar(false)
    }
  }
  window.addEventListener('scroll', changeNavbar)
  return (
    <StyledNavbarWrapper mobileNavActive={mobileActive && true} className={smallNavbar ? 'navbar microNav' : 'navbar'}>
      <StyledNavbar>
        <StyledNavLogo to="/" onClick={toTop}>
          <StyledCorpName>LOGO</StyledCorpName>
        </StyledNavLogo>

        <MobileIcon onClick={handleMobileActive}>
          {mobileActive ? <MdClose /> : <MdMenu />}
        </MobileIcon>
        {mobileActive ? (
          <StyledNavMenu mobile>
            <StyledItem mobile onClick={removeMenuMobile}>
              <StyledNavLink as={Link} to="/oferta">
                Oferta
              </StyledNavLink>
            </StyledItem>
            <StyledItem mobile onClick={removeMenuMobile}>
              <StyledNavLink as={Link} to="/cennik">
                Cennik
              </StyledNavLink>
            </StyledItem>
            <StyledItem mobile onClick={removeMenuMobile}>
              <StyledNavLink as={Link} to="/galeria">
                Galeria
              </StyledNavLink>
            </StyledItem>
            <StyledItem mobile onClick={removeMenuMobile}>
              <StyledNavLink as={Link} to="/polenamiotowe">
                Pole Namiotowe Audioriver/HHPF
              </StyledNavLink>
            </StyledItem>
            <StyledItem mobile onClick={removeMenuMobile}>
              <StyledNavLink as={Link} to="/dokumenty">
                Dokumenty
              </StyledNavLink>
            </StyledItem>
            <StyledItem mobile onClick={removeMenuMobile}>
                <StyledNavLink as={Link} to="/kontakt" className='lastStyledLink'>
                  KONTAKT
                </StyledNavLink>
            </StyledItem>
          </StyledNavMenu>
        ) : (
          <StyledNavMenu>
            <StyledItem>
              <StyledNavLink as={Link} to="/oferta" activeClass="active">
              {smallNavbar ? 'MiniOferta' : 'Oferta'}
              </StyledNavLink>
            </StyledItem>
            <StyledItem>
              <StyledNavLink as={Link} to="/cennik" activeClass="active">
                Cennik
              </StyledNavLink>
            </StyledItem>
            <StyledItem>
              <StyledNavLink as={Link} to="/galeria" activeClass="active">
                Galeria
              </StyledNavLink>
            </StyledItem>
            <StyledItem>
              <StyledNavLink
                as={Link}
                to="/polenamiotowe"
                activeClass="active"
              >
                Pole Namiotowe Audioriver/HHPF
              </StyledNavLink>
            </StyledItem>
            <StyledItem>
              <StyledNavLink as={Link} to="/dokumenty" activeClass="active">
                Dokumenty
              </StyledNavLink>
            </StyledItem>
            <StyledItem>
                <StyledNavLink as={Link} to="/kontakt" activeClass="active" className='lastStyledLink'>
                  KONTAKT
                </StyledNavLink>
            </StyledItem>
          </StyledNavMenu>
        )}
      </StyledNavbar>
    </StyledNavbarWrapper>
  );
};
