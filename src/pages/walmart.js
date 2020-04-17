import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { ProjectLayout, ProjectColumn } from "../components/projectLayout";
import * as Comp from "../components/layoutComponents";

// eslint-disable-next-line
// const Yam1 = require("../images/projects/yam/yam-1.jpg");

const IndexPage = () => (
  <Layout>
    <SEO title="Walmart" keywords={[`gatsby`, `application`, `react`]} />
    <ProjectLayout
      name="Walmart"
      subtitle="Subjects para campaña de Buen Fin y Black Week"
      description={
        <>
          <p>
            En el 2018 tuve la oportunidad de trabajar para Walmart y Sam’s Club
            Mi tarea era hacer el contenido para mailing y blogs, pero el reto
            principal era la creación de subjects cortos y atractivos, pues era
            lo primero que vería el consumidor y lo haría decidir si abría el
            mail o no. Durante mi periodo de trabajo en la agencia me tocó
            cubrir dos eventos muy importantes, que fueron Black Week y el Buen
            Fin. Aquí el reto fue que las promociones nos llegaban 10 minutos
            antes de salir al público y tenía justo ese tiempo para sacar un
            subject que llamará la atención. Y al parecer trabajo muy bien bajo
            presión, pues los subjects llegaron hasta las redes sociales y la
            gente comenzó a hablar de ellos.
          </p>
          <p>Aquí algunos de los mejores.</p>
        </>
      }
    >
      <Comp.Row padded mobile>
        <ProjectColumn padded>
          <div className="card">
            <p className="reset-m">🙊Ay Huawei...📱con el precio del Huawei</p>
          </div>
        </ProjectColumn>
        <ProjectColumn padded>
          <div className="card">
            <p className="reset-m">En caso de Buen Fin📅 Abra este correo💥</p>
          </div>
        </ProjectColumn>
      </Comp.Row>
      <Comp.Row padded mobile>
        <ProjectColumn padded>
          <div className="card">
            <p className="reset-m">🙉 ¡Ya se armó el trío! Lleva 3 y paga 2*</p>
          </div>
        </ProjectColumn>
        <ProjectColumn padded>
          <div className="card">
            <p className="reset-m">
              Cambia tu vieja por una nueva 💻MacBook $16,990*
            </p>
          </div>
        </ProjectColumn>
      </Comp.Row>
      <Comp.Row padded mobile>
        <ProjectColumn padded>
          <div className="card">
            <p className="reset-m">
              ¡Ay prro!🐶Estos precios tienen Pedigree😉
            </p>
          </div>
        </ProjectColumn>
        <ProjectColumn padded>
          <div className="card">
            <p className="reset-m">
              👉Ponte Smart y estrena Smart TV antes que todos
            </p>
          </div>
        </ProjectColumn>
      </Comp.Row>
      <Comp.Row padded mobile>
        <ProjectColumn padded>
          <div className="card">
            <p className="reset-m">
              Suelta el listón de tu pelo🎶 Pantene 2x$130
            </p>
          </div>
        </ProjectColumn>
        <ProjectColumn padded>
          <div className="card">
            <p className="reset-m">
              ¡No manches!💦 Suavitel Complete 1.5L 2x$50
            </p>
          </div>
        </ProjectColumn>
      </Comp.Row>
      <Comp.Row padded mobile>
        <ProjectColumn padded>
          <div className="card">
            <p className="reset-m">Ya cayó... 💤 Colchón + Box $3,590*</p>
          </div>
        </ProjectColumn>
        <ProjectColumn padded>
          <div className="card">
            <p className="reset-m">
              Vas a ver triple🍷🍷🍷¡Últimas horas del 3x!
            </p>
          </div>
        </ProjectColumn>
      </Comp.Row>
    </ProjectLayout>
  </Layout>
);

export default IndexPage;
