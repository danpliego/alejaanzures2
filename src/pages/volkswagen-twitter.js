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
      subtitle="Twitter"
      description={
        <>
          <p>
            Al cumplir mis primeras dos semanas trabajando en la agencia, el VP
            creativo me puso a prueba y me hizo la encargada oficial de la
            parrilla de twitter de la marca. El reto aquí era elevar el
            engagement de manera orgánica, pues los tweets no pasaban de tener
            20 likes. El primer mes subió la interacción un 40% y para el
            segundo mes, nuestros tweets ya tenían más de 100 likes. Para mí
            esto fue una gran experiencia pues muchas veces tenía que convencer
            al VP para que me dejará mandar tweets que “no nos iban a aprobar” y
            que al final fueron los que más gustaron y generaron conversación.
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
