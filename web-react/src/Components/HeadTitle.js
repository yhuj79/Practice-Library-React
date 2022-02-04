import styled from 'styled-components';

const TitleBlock = styled.div`
    background-color: #B2CCFF; color: white;
    font-size: 2rem; font-weight: 700; text-shadow:2px 2px 2px #8C8C8C;
    display: flex; align-items: center; justify-content: center;
    padding: 1.2rem;
`;

const HeadTitle = () => {
    return (
        <TitleBlock>Welcome React!</TitleBlock>
    )
}
export default HeadTitle;