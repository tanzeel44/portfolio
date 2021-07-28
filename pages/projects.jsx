import Head from 'next/head';
import styled from 'styled-components';
import FlipCard from '../components/Projects/FlipCard';

const ProjectList = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  font-family: ${(props) => props.theme.fonts.main};
  padding: 0 0.5rem;
  
  .heading,
  .instructions {
    text-align: center;
    margin-bottom: 1rem;
  }

  .heading {
    font-size: 2.25rem;
    @media only screen and (min-width: 540px) and (max-width: 991px) {
      font-size: 3rem;
    }
  }

  .instructions {
    font-size: 0.8rem;
  }

  // subtract all above from 100% 
  .projects-container {
    width: 100%;
    height: calc(100% - 2rem - 2.25rem - 1.6rem);
    border: 1px solid red;
  }
`;

const projects = [
  { title: 'Where In The World', image: 'countries' },
  { title: 'Odin Weather', image: 'odinweather' },
  { title: 'Odin Library', image: 'odinlibrary' },
  { title: 'Express Library', image: 'expresslibrary' },
];

export default function Projects() {
  return (
    <ProjectList>
      <Head>
        <title>My Projects</title>
      </Head>
      <h1 className="heading">
        My Projects
      </h1>
      <h2 className="instructions">
        Tap, Click, or Hover Over a Project Tile For More Details
      </h2>
      <div className="projects-container" />
    </ProjectList>
  );
}
