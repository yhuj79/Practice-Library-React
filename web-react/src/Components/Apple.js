import styled from 'styled-components';

const StApple = styled.div`
    padding: 1rem;
    margin-top: 1rem; margin-bottom: 2rem;
    background-color: #FAFAFA;
    border-radius: 3px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    transition: all 0.7s;
    font-size: 1.5rem;
    width: 1000px;

    @keyframes smoothAppear {
        from {
          opacity: 0;
          transform: translateY(-5%);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    
    animation: smoothAppear 0.7s;
`;

const Apple = () => {
  return (
    <StApple>
      <h1>Apple Inc.</h1>
      <h2>Apple Inc. is an American multinational technology company
        that specializes in consumer electronics,
        software and online services.</h2>
      <p>Apple is the largest information technology company by revenue
        (totaling US$365.8 billion in 2021) and, as of January 2021,
        it is the world's most valuable company, the fourth-largest
        personal computer vendor by unit sales and second-largest mobile
        phone manufacturer. It is one of the Big Five American information
        technology companies, alongside Alphabet (Google), Amazon, Meta
        (Facebook), and Microsoft.</p>
    </StApple>
  )
}
export default Apple;