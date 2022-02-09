import styled, { css } from "styled-components";
import NewsAPI from "./NewsAPI.PNG";

const categories = [
    {
        name: 'all',
        text: '전체보기',
    },
    {
        name: 'business',
        text: '비즈니스',
    },
    {
        name: 'entertainment',
        text: '엔터테인먼트',
    },
    {
        name: 'health',
        text: '건강',
    },
    {
        name: 'science',
        text: '과학',
    },
    {
        name: 'sports',
        text: '스포츠',
    },
    {
        name: 'technology',
        text: '기술',
    },
]

const CategoriesBlock = styled.div`
    display: flex;
    padding: 1rem;
    width: 1000px;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
        width: 100%;
        overflow-x: auto;
    }
`;

const Category = styled.div`
    font-size: 1.5rem; font-weight: 500;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25rem;
    &:hover {
    color: #495057;
    }
    ${props =>
        props.active && css`
        font-weight: 600;
        border-bottom: 3px solid #1890ff;
        color: #1890ff;
        &:hover {
            color: #2478FF;
        }
    `}
    & + & {
    margin-left: 2.25rem;
    }
`;

const NewsAPILogo = styled.img`
    height: 40px;
    margin-left: 8rem;
`

const Categories = ({ onSelect, category }) => {
    return (
        <CategoriesBlock>
            {categories.map(c => (
                <Category
                    key={c.name}
                    active={category === c.name}
                    onClick={() => onSelect(c.name)}
                >{c.text}</Category>
            ))}
            <NewsAPILogo src={NewsAPI} />
        </CategoriesBlock>
    )
}
export default Categories;