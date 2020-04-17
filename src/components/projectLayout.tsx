import React from "react";
import styled from "styled-components";
import * as Comp from "./layoutComponents";
import Menu from "./menu";
import { Link } from "gatsby";

const ArrowLeft = require("../images/arrow-left.svg");

interface ProjectLayoutProps {
  name: string;
  subtitle: string;
  description: JSX.Element;
}

export const ProjectLayout: React.FC<ProjectLayoutProps> = ({
  name,
  description,
  subtitle,
  children,
}) => {
  return (
    <Comp.Container>
      <Menu />
      <ProjectHero mobile>
        <Comp.Column>
          <HeroContent>
            <h1>{name}</h1>
            <p>{subtitle}</p>
          </HeroContent>
        </Comp.Column>
        <Comp.Column>{description}</Comp.Column>
      </ProjectHero>
      {children}
      <ProjectFooter>
        <Link to="/#work">
          <img src={ArrowLeft} style={{ marginRight: "1rem" }} />
          Volver a proyectos
        </Link>
      </ProjectFooter>
    </Comp.Container>
  );
};

const ProjectHero = styled(Comp.Row)`
  padding: 11rem 0 6rem;

  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 0.9rem;
  }

  > div {
    flex: 1;
  }
`;

const HeroContent = styled.div`
  max-width: 75%;
`;

export const ProjectColumn = styled(Comp.Column)`
  margin-bottom: 2rem;
  flex: 1;

  img,
  video {
    width: 100%;
  }

  p {
    margin-bottom: 0;
    margin-top: 0.5rem;
  }

  .card {
    border: 1px solid #000;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      margin: 0;
    }
  }
`;

const ProjectFooter = styled.div`
  padding: 3rem 0;
  text-align: center;

  a {
    padding: 1rem;
    border: 1px solid #000;
    display: inline-block;
  }
`;

export const ProjectSection = styled.div`
  padding: 3rem 0;
  border-top: 1px solid #000;

  h3 {
    margin-bottom: 3rem;
  }
`;
