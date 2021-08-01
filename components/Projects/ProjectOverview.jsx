import styled from 'styled-components';

import Button from '../Button';

const Overview = styled.div`
  height: 100%;
  width: 100%;
  border-radius: inherit;
  color: #ff304c;
  padding: 1rem;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  h1 {
    text-align: center;
    font-size: 1.25rem;
  }

  .tech-list {
    color: #002651;
    font-weight: bold;
    text-align: center;
    margin: 1rem 0 0.5rem 0;
  }

  .tech-item {
    display: inline-block;
    padding: 0.25rem;
    border-right: 1px solid #002651;
  }
  a {
    z-index: 30;
  }
  `;

const ProjectLink = styled.a`
  width: 120px;
  border: 1px solid #28c7fa;
  text-transform: uppercase;
  text-align: center;
  font-size: 1.7rem;
  margin: 0.25rem auto;
  padding: 0.5rem;
  font-weight: bold;
  border-radius: 4px;
  text-decoration: none;
  color: inherit;

  &:focus,
  &:hover {
    background-color: #28c7fa;
    transition: background 0.8s;
  }

  &:focus,
  &:hover, 
  &:visited {
    color: inherit;
  }
`;

export default function ProjectOverview({
  title, tech, github, url,
}) {
  return (
    <Overview>
      <h1>{title}</h1>
      <ul className="tech-list">
        {tech.map((technology) => <li className="tech-item" key={technology}>{technology}</li>)}
      </ul>
      <ProjectLink href={url} target="_blank" rel="noreferrer">Live</ProjectLink>
      <ProjectLink href={`https://www.github.com/dw44/${github}`} target="_blank" rel="noreferrer">Github</ProjectLink>
    </Overview>
  );
}
