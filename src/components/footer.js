import React from "react";
import styled from "styled-components";

const Footer = () => (
  <FooterContainer id="about">
    © {new Date().getFullYear()} — alejaanzures.com
  </FooterContainer>
);

const FooterContainer = styled.footer`
  background: #000;
  color: #fff;
  margin-top: 6rem;
  z-index: 2;
  position: relative;
`;

export default Footer;
