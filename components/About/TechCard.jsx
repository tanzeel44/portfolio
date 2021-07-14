import styled from 'styled-components';

const StyledCard = styled.div`
  height: 150px;
  width: 120px;
  display: grid;
  grid-template-rows: 120px 30px;
  border: 1px solid white; 
  
  img {
    object-fit: fill;
  }

  p {
    font-weight: 600;
    font-size: 1.2rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  `;

export default function TechCard({ image, title }) {
  return (
    <StyledCard>
      <img src={`/tech_icons/${image}.svg`} alt={title} />
      <p>{title}</p>
    </StyledCard>
  );
}
