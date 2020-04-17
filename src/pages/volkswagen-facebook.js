import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import {
  ProjectLayout,
  ProjectColumn,
  ProjectSection,
} from "../components/projectLayout";
import * as Comp from "../components/layoutComponents";
import styled from "styled-components";

// eslint-disable-next-line
const IngenioMexa = require("../images/projects/volkswagen-fb/1-ingenio-mexa.mp4");
// eslint-disable-next-line
const Refacciones = require("../images/projects/volkswagen-fb/2-refacciones-originales.png");
// eslint-disable-next-line
const ToyStory = require("../images/projects/volkswagen-fb/3-Toy-story.jpg");
// eslint-disable-next-line
const VolanteCarro = require("../images/projects/volkswagen-fb/6-volante-carro.mp4");
// eslint-disable-next-line
const MagicBall = require("../images/projects/volkswagen-fb/10-magic-ball.mp4");
// eslint-disable-next-line
const Scouter = require("../images/projects/volkswagen-fb/8-scouter.mp4");
// eslint-disable-next-line
const Video4 = require("../images/projects/volkswagen-fb/4.mp4");
// eslint-disable-next-line
const Video5 = require("../images/projects/volkswagen-fb/5.mp4");
// eslint-disable-next-line
const Video7 = require("../images/projects/volkswagen-fb/7.mp4");
// eslint-disable-next-line
const Video11 = require("../images/projects/volkswagen-fb/11.mp4");
// eslint-disable-next-line
const Video12 = require("../images/projects/volkswagen-fb/12.mp4");
// eslint-disable-next-line
const Video13 = require("../images/projects/volkswagen-fb/13.mp4");
// eslint-disable-next-line
const Video14 = require("../images/projects/volkswagen-fb/14.mp4");
// eslint-disable-next-line
const Video15 = require("../images/projects/volkswagen-fb/15.mp4");
// eslint-disable-next-line
const Video16 = require("../images/projects/volkswagen-fb/16.mp4");

// eslint-disable-next-line
const VideoIG1 = require("../images/projects/volkswagen-fb/videoig-1.mp4");
// eslint-disable-next-line
const VideoIG2 = require("../images/projects/volkswagen-fb/videoig-2.mp4");
// eslint-disable-next-line
const VideoIG3 = require("../images/projects/volkswagen-fb/videoig-3.mp4");
// eslint-disable-next-line
const VideoIG4 = require("../images/projects/volkswagen-fb/videoig-4.mp4");
// eslint-disable-next-line
const VideoIG5 = require("../images/projects/volkswagen-fb/videoig-5.mp4");
// eslint-disable-next-line
const VideoIG6 = require("../images/projects/volkswagen-fb/videoig-6.mp4");

// eslint-disable-next-line
const Iphone = require("../images/iphone.png");

const IndexPage = () => (
  <Layout>
    <SEO title="Volkswagen" keywords={[`gatsby`, `application`, `react`]} />
    <ProjectLayout
      name="Volkswagen"
      subtitle="Facebook e Instagram"
      description={
        <>
          <p>
            En el 2019 tuve la fortuna de trabajar para la marca de Volkswagen,
            aquí lo interesante era que el cliente nos daba “libertad creativa”
            y el único requisito era comunicar el modelo del auto en el día
            asignado y un feature de este. Como copywriter mi reto era pensar en
            las ideas de la parrilla y sintetizarlas para que el insight se
            entendiera con un line de menos de un minuto o con un gráfico. Estas
            ideas se las contaba al equipo de diseño y video, ellos las tomaban
            como base y le metían su punch creativo para hacer de un posteo una
            obra de arte.
          </p>
          <p>Aquí algunos ejemplos.</p>
        </>
      }
    >
      <ProjectSection>
        <h3>Facebook</h3>
        <Comp.Row padded mobile>
          <ProjectColumn padded>
            <video controls>
              <source src={IngenioMexa} />
            </video>
            <small>Volkswagen 2019</small>
          </ProjectColumn>
          <ProjectColumn padded>
            <img src={Refacciones} />
            <p>Utiliza refacciones originales.</p>
            <small>Volkswagen 2019</small>
          </ProjectColumn>
          <ProjectColumn padded>
            <img src={ToyStory} />
            <p>Adiós vaquero.</p>
            <small>Último Beetle Final Edition / Estreno de Toy Story 4.</small>
          </ProjectColumn>
        </Comp.Row>
        <Comp.Row padded mobile>
          <ProjectColumn padded>
            <video controls width="300">
              <source src={VolanteCarro} />
            </video>
          </ProjectColumn>

          <ProjectColumn padded>
            <video controls width="300">
              <source src={MagicBall} />
            </video>
          </ProjectColumn>

          <ProjectColumn padded>
            <video controls>
              <source src={Scouter} />
            </video>
            <p className="mt-2 mb-0 text-light">
              ¡Su nivel de velocidad es impresionante! Golf GTI.
            </p>
          </ProjectColumn>
        </Comp.Row>
        <Comp.Row padded mobile>
          <ProjectColumn padded>
            <video controls>
              <source src={Video4} />
            </video>
            <small className="mt-2 d-block">
              Line para la entrega del primer Beetle Final Edition adquirido por
              amazon.{" "}
            </small>
          </ProjectColumn>
          <ProjectColumn padded>
            <video controls>
              <source src={Video5} />
            </video>
            <small className="mt-2 d-block">Crédito automotriz AFASA. </small>
          </ProjectColumn>

          <ProjectColumn padded>
            <video controls>
              <source src={Video7} />
            </video>
          </ProjectColumn>
        </Comp.Row>
        <Comp.Row padded mobile>
          <ProjectColumn padded>
            <video controls>
              <source src={Video11} />
            </video>
          </ProjectColumn>
          <ProjectColumn padded>
            <video controls>
              <source src={Video12} />
            </video>
          </ProjectColumn>
          <ProjectColumn padded>
            <video controls>
              <source src={Video13} />
            </video>
          </ProjectColumn>
        </Comp.Row>
        <Comp.Row padded mobile>
          <ProjectColumn padded>
            <video controls>
              <source src={Video14} />
            </video>
            <small className="d-block mt-2">
              Idea para campaña de los perros de Volkswagen.{" "}
            </small>
          </ProjectColumn>
          <ProjectColumn padded>
            <video controls>
              <source src={Video15} />
            </video>
            <small className="d-block mt-2">Analogía de perros y autos </small>
          </ProjectColumn>
          <ProjectColumn padded>
            <video controls>
              <source src={Video16} />
            </video>
            <small className="d-block mt-2">Analogía de perros y autos </small>
          </ProjectColumn>
        </Comp.Row>
      </ProjectSection>
      <ProjectSection>
        <h3>Instagram Stories</h3>
        <Comp.Row padded mobile>
          <ProjectColumn padded>
            <IphoneContainer>
              <img className="iphone" src={Iphone} />
              <video width="300" autoPlay muted loop>
                <source src={VideoIG1} />
              </video>
            </IphoneContainer>
          </ProjectColumn>
          <ProjectColumn padded>
            <IphoneContainer>
              <img className="iphone" src={Iphone} />
              <video width="300" autoPlay muted loop>
                <source src={VideoIG2} />
              </video>
            </IphoneContainer>
          </ProjectColumn>
          <ProjectColumn padded>
            <IphoneContainer>
              <img className="iphone" src={Iphone} />
              <video width="300" autoPlay muted loop>
                <source src={VideoIG3} />
              </video>
            </IphoneContainer>
          </ProjectColumn>
        </Comp.Row>
        <Comp.Row padded mobile>
          <ProjectColumn padded>
            <IphoneContainer>
              <img className="iphone" src={Iphone} />
              <video width="300" autoPlay muted loop>
                <source src={VideoIG4} />
              </video>
            </IphoneContainer>
          </ProjectColumn>
          <ProjectColumn padded>
            <IphoneContainer>
              <img className="iphone" src={Iphone} />
              <video width="300" autoPlay muted loop>
                <source src={VideoIG5} />
              </video>
            </IphoneContainer>
          </ProjectColumn>
          <ProjectColumn padded>
            <IphoneContainer>
              <img className="iphone" src={Iphone} />
              <video width="300" autoPlay muted loop>
                <source src={VideoIG6} />
              </video>
            </IphoneContainer>
          </ProjectColumn>
        </Comp.Row>
      </ProjectSection>
    </ProjectLayout>
  </Layout>
);

const IphoneContainer = styled.div`
  position: relative;
  min-height: 520px;

  .iphone {
    position: absolute;
    width: 70%;
    left: 15%;
    right: 15%;
  }

  video {
    position: absolute;
    z-index: 1;
    width: 64%;
    left: 18%;
    top: 8%;
  }
`;

export default IndexPage;
