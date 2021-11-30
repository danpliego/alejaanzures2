import React from "react";
import styled, { css } from "styled-components";
import * as Comp from "./layoutComponents";

const Footer = () => (
  <>
    <AboutContainer id="about">
      <Comp.Container>
        <Comp.Row mobile padded>
          <Comp.Column style={{ flex: "1" }} padded>
            <div style={{ marginBottom: "2rem" }}>
              <h5>Sobre mi</h5>
              <p>
                Desde que era pequeña me encantaba leer, cuando terminaba un
                libro me daba cuenta que las palabras del autor podían tocar
                fibras muy sensibles en las personas sin necesidad de
                conocerlas. Pensaba que era una forma sublime de transmitir el
                conocimiento. Así que a los 12 años comencé a tener un blog, ahí
                escribía lo que aprendía, lo que sentía y todas las cosas que
                leía.
              </p>
              <p>
                Desde ese momento noté que me expresaba mejor de forma escrita y
                comencé a buscar cursos y libros que me ayudaran a mejorar mi
                técnica. Poco a poco fui metiéndome en el mundo de la
                creatividad y empecé a aprender otras cosas que me ayudaron a
                explotar al máximo la forma de comunicarme. Mi experiencia de
                trabajo va desde la creación de un concepto para una marca, el
                branding, la comunicación y los medios para darla a conocer.
                Además de el liderazgo para guiar a los equipos a lograr una
                meta en conjunto.
              </p>
            </div>
            <Comp.Row mobile padded>
              <Comp.Column style={{ flex: "1" }} padded>
                <h5>skills</h5>
                <ul>
                  <li>Estrategia de comunicación </li>
                  <li>Desarrollo de conceptos creativos </li>
                  <li>Storytelling</li>
                  <li>Manejo y gestión de redes sociales</li>
                  <li>Marketing digital </li>
                  <li>Análisis de reportes </li>
                  <li>Dirección creativa </li>
                </ul>
              </Comp.Column>
              <Comp.Column style={{ flex: "1" }} padded>
                <h5>Herramientas</h5>
                <ul>
                  <li>Estrategia de comunicación </li>
                  <li>Desarrollo de conceptos creativos </li>
                  <li>Storytelling</li>
                  <li>Manejo y gestión de redes sociales</li>
                  <li>Marketing digital </li>
                  <li>Análisis de reportes </li>
                  <li>Dirección creativa </li>
                </ul>
              </Comp.Column>
            </Comp.Row>
          </Comp.Column>
          <Comp.Column style={{ flex: "1" }} padded>
            <Comp.Row mobile padded>
              <Comp.Column style={{ flex: "2" }} padded>
                <h5>experiencia laboral</h5>
                <p>
                  Social Noise (Agosto 2017 - Dic 2017)
                  <br /> Copy Trainee
                  <br />
                  <br />
                  Go Disruptive (Mayo 2018 - Abril 2019)
                  <br /> Copywriter Jr.
                  <br />
                  <br />
                  Residencia (Marzo 2019 - Septiembre 2019)
                  <br /> Copywriter Jr.
                  <br />
                  <br />
                  MyBusiness POS (Dic 2019 - )<br /> Directora de Mkt
                  <br />
                  <br />
                  La hora SAT (Sept 2020 - )<br /> Co - founder y Brand Content
                  Manager
                  <br />
                  <br />
                  Pachefest (abril 2020 - )<br /> Organizadora y directora del
                  festival
                  <br />
                  <br />
                  Neat (Junio 2021 - Nov 2021)
                  <br /> Content Manager Specialist
                </p>
              </Comp.Column>
              <Comp.Column style={{ flex: "2" }} padded>
                <h5>FORMACIÓN PROFESIONAL</h5>
                <p>
                  Licenciatura en Publicidad
                  <br /> Universidad de la comunicación <br />
                  <br />
                  Curso de producción digital <br />
                  Simulador de vuelo
                  <br />
                  <br />
                  Diplomado de creatividad digital <br />
                  Academia Mexicana de creatividad
                  <br />
                  <br />
                  Programa de especialización de arte y fotografía <br />
                  CENTRO
                  <br />
                  <br />
                  Curso de guionismo <br />
                  Complot Escuela de creatividad Barcelona
                </p>
              </Comp.Column>
            </Comp.Row>
          </Comp.Column>
        </Comp.Row>
      </Comp.Container>
    </AboutContainer>

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
        <h4>
          <a href="https://www.linkedin.com/in/alejandra-anzures-arciniega-545a99161/">
            Linkedin
          </a>
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
  background: #F3AA96;
  color: #2c0c03;
  color: #fff;
  margin-top: 6rem;
  font-size: 14px;
  h5,
  p,
  li {
    color: #2c0c03;
  }
  h5 {
    text-transform: uppercase;
    font-size: 16px;
    letter-spacing: 1px;
    font-weight: 500;
  }
`;

const Contacto = styled.div`
  width: 100%;
  background: #2c0c03;
  color: #f3aa96;
  padding: 6rem 0;
  text-align: center;
`;

export default Footer;
