import React from "react";
import styled from "styled-components";
import * as Comp from "./layoutComponents";
import { Link } from "gatsby";

// eslint-disable-next-line
const HoraSat = require("../images/thumbnails/horasat.jpg");
// eslint-disable-next-line
const Pachefest = require("../images/thumbnails/pachefest.jpg");
// eslint-disable-next-line
const HighGaang = require("../images/thumbnails/high-gaang.jpg");
// eslint-disable-next-line
const Neat = require("../images/thumbnails/neat.jpg");
// eslint-disable-next-line
const MyBusiness = require("../images/thumbnails/mybusiness.jpg");
// eslint-disable-next-line
const Malvestida = require("../images/thumbnails/malvestida.jpg");
// eslint-disable-next-line
const volks = require("../images/thumbnails/volkswagen.jpg");
// eslint-disable-next-line
const Walmart = require("../images/thumbnails/walmart.jpg");
// eslint-disable-next-line
const Sams = require("../images/thumbnails/sams.jpg");

export const HomeProjects: React.FC = () => {
  return (
    <ProjectsContainer id="work">
      <Comp.Row mobile padded>
        <ProjectCard
          image={HoraSat}
          name="La Hora SAT"
          description="Co founder - Brand Content Manager"
          external_url="http://instagram.com/lahorasat"
        />
        <ProjectCard
          image={Pachefest}
          name="Pachefest"
          description="Organizadora y directora"
          external_url="http://instagram.com/pachefestmx"
        />
        <ProjectCard
          image={HighGaang}
          name="High Gaang"
          description="Founder y directora"
          external_url="https://www.instagram.com/highgaang/"
        />
      </Comp.Row>
      <Comp.Row mobile padded>
        <ProjectCard
          image={Neat}
          name="Neat"
          description="Content Manager"
          external_url="https://www.instagram.com/neatpagos/"
        />
        <ProjectCard
          image={MyBusiness}
          name="My Business POS"
          description="Dirección de MKT"
          url="/mybusiness"
        />
        <ProjectCard
          image={Malvestida}
          name="Malvestida"
          description="Redactora"
          external_url="https://malvestida.com/2020/11/cbd-en-mexico-como-y-donde-comprar/"
        />
      </Comp.Row>
      <Comp.Row mobile padded>
        <ProjectCard
          image={volks}
          name="Volkswagen"
          description="Copywriter"
          url="/volkswagen-twitter"
        />
        <ProjectCard
          image={Walmart}
          name="Walmart"
          description="Copywriter"
          url="/walmart"
        />
        <ProjectCard
          image={Sams}
          name="Sam's Club"
          description="Copywriter"
          url="/sams-pitch"
        />
      </Comp.Row>
    </ProjectsContainer>
  );
};

interface ProjectProps {
  image: string;
  name: string;
  description: string;
  external_url?: string;
  url?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
  image,
  name,
  description,
  external_url,
  url,
}) => {
  return (
    <>
      <ProjectCardContainer padded>
        {external_url ? (
          <a href={external_url} target="_blank">
            <ProjectImage>
              <img src={image} />
              <HoverActions>
                <span>Ver proyecto</span>
              </HoverActions>
            </ProjectImage>
            <h4 style={{ marginBottom: "0.5rem" }}>{name}</h4>
            <p className="font-sm">
              <i>{description}</i>
            </p>
          </a>
        ) : (
          <Link to={url}>
            <ProjectImage>
              <img src={image} />
              <HoverActions>
                <span>Ver Proyecto</span>
              </HoverActions>
            </ProjectImage>
            <h4 style={{ marginBottom: "0.5rem" }}>{name}</h4>
            <p className="font-sm">
              <i>{description}</i>
            </p>
          </Link>
        )}
      </ProjectCardContainer>
    </>
  );
};

const ProjectsContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const ProjectCardContainer = styled(Comp.Column)`
  width: 100%;
  transition: all 0.15s ease-in-out;
  margin: 1rem 0;

  > a {
    display: block;
  }

  &:hover {
    transform: translate(0px, -3px);
  }
`;

const HoverActions = styled.a`
  opacity: 0;
  background: rgba(0, 0, 0, 0.5);
  transition: all 0.15s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 97%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-decoration: none !important;
`;

const ProjectImage = styled.div`
  display: block;
  position: relative;
  overflow: hidden;
  margin-bottom: 1rem;

  &:hover {
    ${HoverActions} {
      opacity: 1;
    }
  }
`;
