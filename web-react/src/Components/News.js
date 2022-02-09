import { useState, useCallback } from 'react';
import NewsList from './News/NewsList';
import Categories from './News/Categories';
import styled from 'styled-components';

const StNews = styled.div`
    padding: 1rem;
    margin-top: 1rem; margin-bottom: 2rem;
    background-color: #FAFAFA;
    border-radius: 3px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    transition: all 0.3s;

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
    
    animation: smoothAppear 0.3s;
`;

const News = () => {
    const [category, setCategory] = useState('all');
    const onSelect = useCallback(category => setCategory(category), []);

    return (
        <StNews>
            <Categories category={category} onSelect={onSelect} />
            <NewsList category={category} />
        </StNews>
    )
}
export default News;