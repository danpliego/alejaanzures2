import React from "react";
import { FlexAlignChild } from "./layoutComponents";
import { Link } from "gatsby";
import styled from "styled-components";

// import Logo from "../images/logo.svg";
import { theme } from "./theme";

const Menu = () => (
  <MenuContainer>
    <MenuRight>
      <MenuItem to="#work">Work</MenuItem>
      <MenuItem to="#about">Acerca de mí</MenuItem>
      <MenuItem as="a" href="mailto:alejaanzures@gmail.com">
        Contacto
      </MenuItem>
    </MenuRight>
  </MenuContainer>
);
export default Menu;

const MenuContainer = styled(FlexAlignChild)`
  padding: 1.7rem 1rem 1.7rem 0;
  justify-content: flex-end;

  @media ${theme.breakpoint.onlyMobile} {
    justify-content: center;
  }
`;

export const MenuRight = styled(FlexAlignChild)`
  position: relative;
`;
export const MenuItem = styled(Link)`
  padding: 1rem 1.5rem;
  display: block;
  transition: all 0.15s ease-in-out;

  &.hide-mobile {
    @media ${theme.breakpoint.onlyMobile} {
      display: none;
    }
  }

  @media ${theme.breakpoint.onlyMobile} {
    padding: 1rem;
  }

  &:hover {
    transform: translate(0px, -3px);
  }
`;
