import Head from 'next/head';
import styled from 'styled-components';
import FlipCard from '../components/Projects/FlipCard';

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

const projects = [
  { odinWeather: { title: 'Where In The World', image: 'countries' } },
  { odinWeather: { title: 'Odin Weather', image: 'odinweather' } },
  { odinLibrary: { title: 'Odin Library', image: 'odinlibrary' } },
  { expressLibrary: { title: 'Express Library', image: 'expresslibrary' } },
];

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
        {/* <ProjectCard title="Odin Weather" imageFileName="odinweather" /> */}
        <FlipCard />
      </div>
    </ProjectList>
  );
}
