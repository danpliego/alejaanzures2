import React from "react";
import * as Comp from "./layoutComponents";
import Monstera from "../images/monstera.png";
import styled from "styled-components";
import { theme } from "./theme";

const Hero = () => (
  <HeroContainer>
    <HeroContent>
      <Comp.TextCenter>
        <div style={{ marginBottom: "1rem" }}>
          <img src={Monstera} width="100px" />
        </div>
        <h1 className="reset-m">Alejandra Anzures</h1>
        <p className="font-lg">Redactora creativa</p>
        <p>
          Siempre me ha gustado escribir y eso me llevó a ser copywriter
          creativo. Actualmente hago storytelling, guiones, newsletter, mails y
          contenido para redes sociales y sitios web; pero lo que más me gusta
          es escribir freestyle, reseñas o ideas con un tono divertido.
        </p>
        <p>Aquí un poco de lo que hago.</p>

        <div style={{ height: "1000px", background: "red" }}></div>
      </Comp.TextCenter>
    </HeroContent>
  </HeroContainer>
);

export default Hero;

const HeroContainer = styled(Comp.FlexAlignChild)`
  padding: 8rem 0 0;
  @media ${theme.breakpoint.upFromMobile} {
    padding: 10rem 0 4rem;
  }
`;

const HeroContent = styled.div``;
