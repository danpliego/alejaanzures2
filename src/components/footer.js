import React from "react";
import styled, { css } from "styled-components";
import * as Comp from "./layoutComponents";

import Sativa from "../images/sativa.jpg";
import ViajaBonito from "../images/viajabonito.png";
import Guaper from "../images/foto.jpg";

const Footer = () => (
  <>
    <AboutContainer id="about">
      <Comp.Container>
        <Comp.Row mobile padded style={{ alignItems: "center" }}>
          <Comp.Column style={{ flex: "1" }} padded>
            <h1>Acerca de mí</h1>
            <img src={Guaper} />
          </Comp.Column>
          <Comp.Column style={{ flex: "2" }} padded>
            <p>
              Desde que era pequeña me encantaba leer, cuando terminaba un libro
              me daba cuenta que las palabras del autor podían tocar fibras muy
              sensibles en las personas sin necesidad de conocerlas. Pensaba que
              era una forma sublime de transmitir el conocimiento. Así que a los
              12 años comencé a tener un blog, ahí escribía lo que aprendía, lo
              que sentía y todas las cosas que leía.
            </p>
            Desde ese momento noté que me expresaba mejor de forma escrita y
            comencé a buscar cursos y libros que me ayudaran a mejorar mi
            técnica. Poco a poco fui metiéndome en el mundo de la creatividad y
            empecé a aprender otras cosas que me ayudaron a explotar al máximo
            la forma de comunicarme.
            <p>
              Después de trabajar algunos años en el mundo de la publicidad
              sentí la necesidad de usar mi tiempo libre para seguir creciendo,
              y decidí comenzar mi proyecto personal.
            </p>
            <p>Aquí les cuento un poco sobre cada uno.</p>
          </Comp.Column>
        </Comp.Row>
      </Comp.Container>
    </AboutContainer>
    <SativaContainer>
      <Comp.Container>
        <Comp.Row mobile padded style={{ alignItems: "center" }}>
          <Comp.Column style={{ flex: "1" }} padded>
            <h1>Sativa Cannabis self-care</h1>

            <p>
              Sativa nace de la necesidad de educar a las mujeres sobre los usos
              y beneficios del cannabis como planta medicinal y brindarles
              productos hechos de forma artesanal. Esto con el fin de crear una
              comunidad de mujeres informadas que lo usan de manera responsable.
            </p>
            <h5>
              <a href="https://www.instagram.com/sativamx_/">@sativamx_</a>
            </h5>
          </Comp.Column>
          <Comp.Column style={{ flex: "2" }} padded>
            <img src={Sativa} />
          </Comp.Column>
        </Comp.Row>
      </Comp.Container>
    </SativaContainer>

    <ViajaBonitoContainer>
      <Comp.Container>
        <Comp.Row mobile padded style={{ alignItems: "center" }}>
          <Comp.Column style={{ flex: "1" }} padded>
            <h1>Viaja Bonito.</h1>
            <p>
              Es un proyecto enfocado a dar recomendaciones sobre lugares
              interesantes para visitar en México y en el extranjero. Y lo más
              importante, viajar como local para conocer la cultura del lugar
              más allá de lo turístico.
            </p>
            <h5>
              <a href="https://www.instagram.com/viajabonitoo/">
                @viajabonitoo
              </a>
            </h5>
          </Comp.Column>
          <Comp.Column style={{ flex: "2" }} padded>
            <img src={ViajaBonito} />
          </Comp.Column>
        </Comp.Row>
      </Comp.Container>
    </ViajaBonitoContainer>

    <Contacto>
      <Comp.Container>
        <h1>Contacto</h1>
        Celular y Whatsapp:
        <h4>
          <a href="tel:52555615441513">+52 56 1544 1513</a>
        </h4>
        Correo electrónico:
        <h4>
          <a href="mailto:alejaanzures@gmail.com">alejaanzures@gmail.com</a>
        </h4>
        <div style={{ marginTop: "3rem" }}>
          © {new Date().getFullYear()} — alejaanzures.com
        </div>
      </Comp.Container>
    </Contacto>
  </>
);

const sharedContainer = css`
  padding: 6rem 0;
`;

const AboutContainer = styled.div`
  ${sharedContainer}
  background: #000;
  color: #fff;
  margin-top: 6rem;
`;

const SativaContainer = styled.div`
  ${sharedContainer}
  background: #B8BDFF;
  color: #345c19;
`;

const ViajaBonitoContainer = styled.div`
  ${sharedContainer}
`;

const Contacto = styled.div`
  width: 100%;
  background: #000;
  color: #fff;
  padding: 6rem 0;
  text-align: center;
`;

export default Footer;
