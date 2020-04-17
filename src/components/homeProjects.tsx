import React from "react";
import styled from "styled-components";
import * as Comp from "./layoutComponents";
import { Link } from "gatsby";

// eslint-disable-next-line
const MyBusiness = require("../images/thumbnails/mybusiness.jpg");

export const HomeProjects: React.FC = () => {
  return (
    <ProjectsContainer id="work">
      <Comp.Row mobile padded>
        <ProjectCard
          image={MyBusiness}
          name="Volkswagen"
          description="Facebook e Instagram"
          url="/volkswagen-facebook"
        />
        <ProjectCard
          image={MyBusiness}
          name="Volkswagen"
          description="Twitter"
          url="/volkswagen-instagram"
        />
        <ProjectCard
          image={MyBusiness}
          name="Walmart"
          description="Subjects para campaña de Buen Fin y Black Week"
          url="/walmart"
        />
      </Comp.Row>
      <Comp.Row mobile padded>
        <ProjectCard
          image={MyBusiness}
          name="Sam's"
          description="Micrositio"
          url="/sams"
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
                <span>View website</span>
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
                <span>View project</span>
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

const ProjectsContainer = styled.div``;

const ProjectCardContainer = styled(Comp.Column)`
  width: 100%;
  transition: all 0.15s ease-in-out;
  margin: 1rem 0;

  > a {
    display: block;
  }

  &:hover {
    text-decoration: line-through;
    transform: translate(0px, -1px);
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
