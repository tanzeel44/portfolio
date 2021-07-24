import Head from 'next/head';
import styled from 'styled-components';

import ProjectCard from '../components/Projects/ProjectCard';

const ProjectList = styled.div`
  width: 100%;
  height: 100%;
  font-family: ${(props) => props.theme.fonts.main};
  
  .page-title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 
    
    @media only screen and (min-width: 375px) {
      font-size: 3rem;
    }
  }

  .card-container {
    padding: 10px;
  }
`;

export default function Projects() {
  return (
    <ProjectList>
      <Head>
        <title>My Projects</title>
      </Head>
      <h1 className="page-title">
        My Projects
      </h1>
      <div className="card-container">
        <ProjectCard title="Weather" imageFileName="weather_mobile" />
      </div>
    </ProjectList>
  );
}
