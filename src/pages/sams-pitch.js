import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import {
  ProjectLayout,
  ProjectColumn,
  ProjectSection,
} from "../components/projectLayout";
import * as Comp from "../components/layoutComponents";

// eslint-disable-next-line
const Gif1 = require("../images/projects/sams-pitch/gif1.gif");
// eslint-disable-next-line
const Gif2 = require("../images/projects/sams-pitch/gif2.gif");
// eslint-disable-next-line
const Gif3 = require("../images/projects/sams-pitch/gif3.gif");

const IndexPage = () => (
  <Layout>
    <SEO
      title="Micrositio Sam’s Club."
      keywords={[`gatsby`, `application`, `react`]}
    />
    <ProjectLayout
      name="Sam’s Club."
      subtitle="Micrositio"
      description={
        <>
          <p>
            Este proyecto fue muy especial para mí, pues tuve que llevarlo sola
            con un diseñador, ya que justo en ese momento estaba corriendo la
            campaña del socio fest y los demás copywriters estaban en fuego
            sacándola a flote. Fue un gran reto porque nunca había hecho una
            estrategia yo sola y además la marca se fue a pitch general y quien
            ganara se quedaba con toda la comunicación, en la agencia solo
            llevábamos blog, mailing y páginas web, pero con este pitch eso
            estaba en juego también.
            <br /> Al final nos fue muy bien con la presentación y gracias a eso
            decidieron dejarnos con la parte de la comunicación que ya teníamos.
          </p>
          <p>Estas fueron algunas de las ideas que se presentaron.</p>
        </>
      }
    >
      <ProjectSection>
        <h3>Guión de propuesta omnicanal</h3>
        <Comp.Row padded mobile>
          <ProjectColumn padded>
            <Comp.TextCenter>
              <iframe
                width="100%"
                height="450"
                src="https://www.youtube.com/embed/-Zx71nKQZ6c?showinfo=0"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Comp.TextCenter>
          </ProjectColumn>
        </Comp.Row>
      </ProjectSection>
      <ProjectSection>
        <h3>Propuesta de contenido para redes sociales</h3>
        <Comp.Row padded mobile>
          <ProjectColumn padded>
            <img src={Gif1} />
          </ProjectColumn>
          <ProjectColumn padded>
            <img src={Gif2} />
          </ProjectColumn>
          <ProjectColumn padded>
            <img src={Gif3} />
          </ProjectColumn>
        </Comp.Row>
      </ProjectSection>
    </ProjectLayout>
  </Layout>
);

export default IndexPage;
