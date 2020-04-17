import React from "react";
import { FlexAlignChild, Flex1 } from "./layoutComponents";
import { Link } from "gatsby";
import styled from "styled-components";

// import Logo from "../images/logo.svg";
import { theme } from "./theme";

const Menu = () => (
  <MenuContainer>
    <Flex1></Flex1>
    <MenuRight>
      <MenuItem to="#work" className="hide-mobile">
        Work
      </MenuItem>
      <MenuItem to="#about" className="hide-mobile">
        Acerca de mi
      </MenuItem>
      <MenuItem as="a" href="mailto:alejaanzures@gmail.com">
        Contacto
      </MenuItem>
    </MenuRight>
  </MenuContainer>
);
export default Menu;

const MenuContainer = styled(FlexAlignChild)`
  padding: 1.7rem 1rem 1.7rem 0;
  position: fixed;
  z-index: 1;
  width: calc(100% - 2rem);
  max-width: 1200px;
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
