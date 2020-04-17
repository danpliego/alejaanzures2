import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { ProjectLayout, ProjectColumn } from "../components/projectLayout";
import * as Comp from "../components/layoutComponents";

// eslint-disable-next-line
// const Yam1 = require("../images/projects/yam/yam-1.jpg");

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
            Esta era mi parte favorita de mis tareas. Cada mes sacábamos un
            artículo en el blog de Sam’s Club, yo estaba a cargo de la sección
            “El sabor de Sam’s Club” y el “Newsletter de tecnología”. Aquí
            teníamos que hacer un análisis de lo que la gente había comprado
            durante el mes y con base en eso seleccionábamos los productos que
            les llamarían la atención y que posiblemente comprarían en el
            siguiente mes. Estos los usábamos para hacer el artículo del blog y
            tener un mejor índice de conversión.
          </p>
          <p>Aquí algunos ejemplos de los artículos.</p>
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
