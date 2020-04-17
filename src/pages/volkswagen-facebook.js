import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { ProjectLayout, ProjectColumn } from "../components/projectLayout";
import * as Comp from "../components/layoutComponents";

// eslint-disable-next-line
// const Yam1 = require("../images/projects/yam/yam-1.jpg");

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
      <Comp.Row padded>
        <ProjectColumn padded>{/* <img src={Yam1} /> */}</ProjectColumn>
      </Comp.Row>
    </ProjectLayout>
  </Layout>
);

export default IndexPage;
