import styled from 'styled-components';

const StyledCard = styled.div`
  height: 150px;
  width: 120px;
  display: grid;
  grid-template-rows: 120px 30px;

  img {
    object-fit: fill;
    max-height: 120px;
    max-width: 120px;
  }

  h4 {
    font-weight: 700;
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
      <h4>{title}</h4>
    </StyledCard>
  );
}
