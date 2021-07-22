import Head from 'next/head';
import styled from 'styled-components';

import ProjectCard from '../components/Projects/ProjectCard';

const ProjectList = styled.div`
  width: 100%;
  height: 100%;
  border: 6px solid #121212;
  font-family: inherit;
  
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Projects() {
  return (
    <ProjectList>
      <Head>
        <title>My Projects</title>
      </Head>
      <ProjectCard />
    </ProjectList>
  );
}
