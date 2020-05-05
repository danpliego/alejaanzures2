import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { ProjectLayout, ProjectColumn } from "../components/projectLayout";
import * as Comp from "../components/layoutComponents";

// eslint-disable-next-line
const Twitter1 = require("../images/projects/vw-twitter/1.png");

// eslint-disable-next-line
const Twitter2 = require("../images/projects/vw-twitter/2.png");
// eslint-disable-next-line
const Twitter3 = require("../images/projects/vw-twitter/3.png");
// eslint-disable-next-line
const Twitter4 = require("../images/projects/vw-twitter/4.png");
// eslint-disable-next-line
const Twitter5 = require("../images/projects/vw-twitter/5.png");
// eslint-disable-next-line
const Twitter6 = require("../images/projects/vw-twitter/6.png");
// eslint-disable-next-line
const Twitter7 = require("../images/projects/vw-twitter/7.png");
// eslint-disable-next-line
const Twitter8 = require("../images/projects/vw-twitter/8.png");
// eslint-disable-next-line
const Twitter9 = require("../images/projects/vw-twitter/9.png");
// eslint-disable-next-line
const Twitter10 = require("../images/projects/vw-twitter/10.png");
// eslint-disable-next-line
const Twitter11 = require("../images/projects/vw-twitter/11.png");
// eslint-disable-next-line
const Twitter12 = require("../images/projects/vw-twitter/12.png");
// eslint-disable-next-line
const Twitter13 = require("../images/projects/vw-twitter/13.png");
// eslint-disable-next-line
const Twitter14 = require("../images/projects/vw-twitter/14.png");
// eslint-disable-next-line
const Twitter15 = require("../images/projects/vw-twitter/15.png");
// eslint-disable-next-line
const Twitter16 = require("../images/projects/vw-twitter/16.png");
// eslint-disable-next-line
const Twitter17 = require("../images/projects/vw-twitter/17.png");
// eslint-disable-next-line
const Twitter18 = require("../images/projects/vw-twitter/18.mp4");
// eslint-disable-next-line
const Twitter19 = require("../images/projects/vw-twitter/19.mp4");
// eslint-disable-next-line
const Twitter20 = require("../images/projects/vw-twitter/20.png");
// eslint-disable-next-line
const Twitter21 = require("../images/projects/vw-twitter/21.png");
// eslint-disable-next-line
const Twitter22 = require("../images/projects/vw-twitter/12.png");
// eslint-disable-next-line
const Twitter23 = require("../images/projects/vw-twitter/23.mp4");
// eslint-disable-next-line
const Twitter24 = require("../images/projects/vw-twitter/24.mp4");

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
            al VP para que me dejara mandar tweets que “no nos iban a aprobar” y
            que al final fueron los que más gustaron y generaron conversación.
          </p>
          <p>Aquí algunos ejemplos.</p>
        </>
      }
    >
      <Comp.Row padded mobile>
        <ProjectColumn padded>
          <img src={Twitter1} />
          <br />
          <br />
          <img src={Twitter7} />
        </ProjectColumn>
        <ProjectColumn padded>
          <img src={Twitter2} />
        </ProjectColumn>
      </Comp.Row>
      <Comp.Row padded mobile>
        <ProjectColumn padded>
          <video controls>
            <source src={Twitter18} />
          </video>
        </ProjectColumn>
        <ProjectColumn padded>
          <img src={Twitter4} />
        </ProjectColumn>
      </Comp.Row>
      <Comp.Row padded mobile>
        <ProjectColumn padded>
          <img src={Twitter5} />
        </ProjectColumn>

        <ProjectColumn padded>
          <img className="img-fluid" src={Twitter6} />
          <br />
          <br />
          <img className="img-fluid" src={Twitter9} />
          <br />
          <br />
          <img className="img-fluid" src={Twitter11} />
        </ProjectColumn>
      </Comp.Row>
      <Comp.Row padded mobile>
        <ProjectColumn padded>
          <img className="img-fluid" src={Twitter8} />
        </ProjectColumn>
        <ProjectColumn padded>
          <img className="img-fluid" src={Twitter13} />
        </ProjectColumn>
      </Comp.Row>
      <Comp.Row padded mobile>
        <ProjectColumn padded>
          <img className="img-fluid" src={Twitter12} />
          <br />
          <br />
          <img className="img-fluid" src={Twitter22} />
        </ProjectColumn>
        <ProjectColumn padded>
          <img className="img-fluid" src={Twitter14} />
        </ProjectColumn>
      </Comp.Row>
      <Comp.Row padded mobile>
        <ProjectColumn padded>
          <img className="img-fluid" src={Twitter16} />
        </ProjectColumn>
        <ProjectColumn padded>
          <img className="img-fluid" src={Twitter15} />
        </ProjectColumn>
      </Comp.Row>
      <Comp.Row padded mobile>
        <ProjectColumn padded>
          <img className="img-fluid" src={Twitter17} />
        </ProjectColumn>
        <ProjectColumn padded>
          <video controls className="img-fluid">
            <source src={Twitter19} />
          </video>
        </ProjectColumn>
      </Comp.Row>
      <Comp.Row padded mobile>
        <ProjectColumn padded>
          <img className="img-fluid" src={Twitter20} />
        </ProjectColumn>
        <ProjectColumn padded>
          <img className="img-fluid" src={Twitter21} />
        </ProjectColumn>
      </Comp.Row>
      <Comp.Row padded mobile>
        <ProjectColumn padded>
          <video controls className="img-fluid">
            <source src={Twitter23} />
          </video>
        </ProjectColumn>
        <ProjectColumn padded>
          <video controls className="img-fluid">
            <source src={Twitter24} />
          </video>
        </ProjectColumn>
      </Comp.Row>
    </ProjectLayout>
  </Layout>
);

export default IndexPage;
