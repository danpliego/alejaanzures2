import React from "react";
import * as Comp from "./layoutComponents";
import AlejaFoto from "../images/foto.jpg";
import styled from "styled-components";
import { theme } from "./theme";

const Hero = () => (
  <HeroContainer>
    <HeroContent>
      <HeroRow mobile padded>
        <div style={{ flex: 1, marginRight: "1rem" }}>
          <h1 className="reset-m">
            ¡Hola! Soy <br />
            <i>Ale Anzures</i>
          </h1>
        </div>
        <div>
          <img src={AlejaFoto} width="400px" />
        </div>
      </HeroRow>
      <Comp.Row mobile padded>
        <p style={{ padding: "1rem" }}>
          Mi especialidad es la comunicación, me encargo de contar la historia
          de una marca a través de diferentes canales para lograr crear un
          vínculo con la comunidad y hacer que esta crezca.
        </p>
        <p style={{ padding: "1rem" }}>
          Actualmente soy Co-founder y Brand Content Manager de La hora SAT,
          Organizadora del festival Pachefest y Directora general de la marca
          High Gaang.{" "}
        </p>
      </Comp.Row>
    </HeroContent>
  </HeroContainer>
);

export default Hero;

export const HeroContainer = styled.div`
  padding: 2rem 0 4rem;

  @media ${theme.breakpoint.upFromMobile} {
    max-width: 1000px;
    margin: 0 auto;
  }
`;

const HeroRow = styled(Comp.Row)`
  align-items: center;
  margin-bottom: 50px;
`;

const HeroContent = styled.div``;
