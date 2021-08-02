import styled from 'styled-components';

const Summary = styled.div`
  height: 100%;
  width: 100%;
  border-radius: inherit;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  & > h1 {
    font-size: 1.333rem;
    text-align: center;
    padding-bottom: 4px;
    border-bottom: 1px solid #ccc;
    color: #002651;
    @media only screen and (min-width: 992px) {
      font-size: 1.5rem;
    }
  }
`;

const SummaryText = styled.div`
  overflow-y: auto;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  z-index: 21;
  color: #002651;

  ::-webkit-scrollbar {
    width: 0.25rem;
    border-radius: 1px;
  }
  
  ::-webkit-scrollbar-track {
    background: #bbb; 
  }
   
  ::-webkit-scrollbar-thumb {
    background: #777; 
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #444; 
  }
  `;

export default function ProjectSummary({ summary }) {
  return (
    <Summary>
      <h1>Introduction</h1>
      <SummaryText>
        {summary.split('\n').map((paragraph) => (
          <>
            <p>{paragraph}</p>
            <br />
          </>
        ))}
      </SummaryText>
    </Summary>
  );
}
