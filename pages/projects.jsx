import Head from 'next/head';
import styled from 'styled-components';

import projects from '../data/projectList';
import FlipCard from '../components/Projects/FlipCard';

const ProjectList = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  font-family: ${(props) => props.theme.fonts.main};
  padding: 0 0.5rem;
  
  .headings {
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  .heading,
  .instructions {
    text-align: center;
    margin-bottom: 1rem;
  }

  .heading {
    font-size: 2.25rem;

    @media only screen and (min-width: 540px) and (max-width: 767px) {
      font-size: 3rem;
    }
    
    @media only screen and (min-width: 768px) and (max-width: 1023px){
      font-size: 5rem;
      padding-top: 1rem;
    }

    @media only screen and (min-width: 1024px) {
      font-size: 6rem;
      padding-top: 1rem;
    }
  }

  .instructions {
    font-size: 0.8rem;
    
    @media only screen and (min-width: 992px) {
      font-size: 1.25rem;
    }

    @media only screen and (min-width: 768px) and (max-width: 1023px){
      font-size: 1.333rem;
    }
    
    @media only screen and (min-width: 1024px) {
      font-size: 1.666rem;
    }
  }

  .projects-container {
    height: 80%;
    padding-top: 1rem;
    overflow-y: auto;
    display: grid;
    grid-template-columns: 100%;
    grid-row-gap: 1rem;

    @media only screen and (min-width: 540px) and (max-width: 991px) {
      grid-template-columns: 50% 50%;
    }
      
    @media only screen and (min-width: 992px) and (max-width: 1279px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media only screen and (min-width: 1280px) {
      padding-top: 6rem;
      grid-template-columns: repeat(4, 1fr);
      height: 70%;
    }

    .seemore {
      text-align: center;
      font-size: 1.4rem;
      @media only screen and (min-width: 540px) and (max-width: 991px) {
        font-size: 1.666rem;
        grid-column: span 2;
      }
        
      @media only screen and (min-width: 992px) and (max-width: 1279px) {
        grid-column: span 3;
        font-size: 2rem;
      }
  
      @media only screen and (min-width: 1280px) {
        grid-column: span 4;
        font-size: 3rem;
      }
    }

    .gitlink:hover {
      text-decoration: underline;
    }

    .gitlink,
    .gitlink:visited {
      color: ${(props) => props.theme.headerText};
      text-decoration: none;
    }
`;

export default function Projects() {
  return (
    <ProjectList>
      <Head>
        <title>My Projects</title>
      </Head>
      <div className="headings">
        <h1 className="heading">
          My Projects
        </h1>
        <h2 className="instructions">
          Tap, Click, or Hover Over a Project Tile For More Details
        </h2>
      </div>
      <div className="projects-container">
        {projects.map(
          (project) => (
            <FlipCard
              key={project.title}
              title={project.title}
              image={project.image}
              tech={project.tech}
              github={project.github}
              summary={project.summary}
              url={project.url}
            />
          ),
        )}
        <h2 className="seemore">
          See More On
          {' '}
          <a className="gitlink" href="https://www.github.com/dw44" target="_blank" rel="noreferrer">Github</a>
        </h2>
      </div>
    </ProjectList>
  );
}
