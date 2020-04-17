import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { ProjectLayout, ProjectColumn } from "../components/projectLayout";
import * as Comp from "../components/layoutComponents";

// eslint-disable-next-line
const Food = require("../images/projects/sams-micro/food.jpg");
// eslint-disable-next-line
const Tech = require("../images/projects/sams-micro/tech.gif");

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
      <Comp.Row padded mobile>
        <ProjectColumn padded>
          <img src={Food} style={{ marginBottom: "2rem" }} />
          <div className="card">
            <a
              href="http://lp.sams.com.mx/el-sabor-de_sams-club/201809-lp.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Newsletter &quot;El Sabor de Sam&apos;s Club&quot; Septiembre 2018
            </a>
          </div>
          <div className="card">
            <a
              href="http://lp.sams.com.mx/el-sabor-de_sams-club/201810-lp.html/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Newsletter &quot;El Sabor de Sam&apos;s Club&quot; Octubre 2018
            </a>
          </div>
        </ProjectColumn>
        <ProjectColumn padded>
          <img src={Tech} style={{ marginBottom: "2rem" }} />
          <div className="card">
            <a
              href="http://lp.sams.com.mx/club-tecnologia/201810.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Newsletter de tecnología Octubre 2018
            </a>
          </div>
        </ProjectColumn>
      </Comp.Row>
    </ProjectLayout>
  </Layout>
);

export default IndexPage;
