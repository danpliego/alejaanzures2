import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { ProjectLayout, ProjectColumn } from "../components/projectLayout";
import * as Comp from "../components/layoutComponents";

// eslint-disable-next-line
const MyBusiness1 = require("../images/projects/mybusiness/mybusiness-1.jpg");

// eslint-disable-next-line
const MyBusiness2 = require("../images/projects/mybusiness/mybusiness-2.jpg");

// eslint-disable-next-line
const MyBusiness3 = require("../images/projects/mybusiness/mybusiness-3.jpg");

const IndexPage = () => (
  <Layout>
    <SEO title="MyBusiness" keywords={[`gatsby`, `application`, `react`]} />
    <ProjectLayout
      name="MyBusiness"
      subtitle="Twitter"
      description={
        <>
          <p>
            En el 2018 entré a trabajar a la empresa MyBusiness POS de manera
            remota, mi puesto era de servicio y atención al cliente, pero a
            mediados del 2019 la empresa me pidió que les ayudará a cambiar toda
            su identidad y a crear sus redes sociales. Así que cambiamos el
            diseño del sitio web y de su newsletter. Yo estuve encargada de
            crear todo el contenido de la página, de abrir sus redes sociales y
            de rediseñar su mailing. Actualmente hago el contenido para el
            newsletter y redes, también me encargo del posicionamiento orgánico
            y de la estrategia de promoción en google, facebook e instagram.
          </p>
          <p>Aquí un poco del cambio que se logró.</p>
        </>
      }
    >
      <Comp.Row mobile padded>
        <ProjectColumn paded>
          <img src={MyBusiness1} />
        </ProjectColumn>
      </Comp.Row>
      <Comp.Row mobile padded>
        <ProjectColumn paded>
          <img src={MyBusiness2} />
        </ProjectColumn>
      </Comp.Row>
      <Comp.Row mobile padded>
        <ProjectColumn paded>
          <img src={MyBusiness3} />
        </ProjectColumn>
      </Comp.Row>
    </ProjectLayout>
  </Layout>
);

export default IndexPage;
