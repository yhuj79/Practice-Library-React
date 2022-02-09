import styled from 'styled-components';

const StHeadTitle = styled.div`
    background-color: #B2CCFF; color: white;
    font-size: 4rem; font-weight: 700; text-shadow:2px 2px 2px #8C8C8C;
    display: flex; align-items: center; justify-content: center;
    padding: 1rem;
`;

const HeadTitle = () => {
    return (
        <StHeadTitle>Welcome React!</StHeadTitle>
    )
}
export default HeadTitle;