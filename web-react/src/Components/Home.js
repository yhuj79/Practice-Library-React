import styled from 'styled-components';
import Weather from './Weather';

const StHome = styled.div`
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

const Home = () => {
  return (
    <div>
      <Weather></Weather>
      <StHome>
        <h1>What is React?</h1>
        <h2>A JavaScript library for building user interfaces</h2>
        <p>React makes it painless to create interactive UIs.
          Design simple views for each state in your application,
          and React will efficiently update and render just the right
          components when your data changes.
          Declarative views make your code more predictable and
          easier to debug.</p>
      </StHome>

    </div>
  )
}
export default Home;