import styled from "styled-components";
import ReactSpinner from "react-spinners/PuffLoader";

const Title = styled.h1`
    font-size: 64px; font-weight: 400; color: #5A8DF3;
    margin: 8px; margin-bottom: 96px;
    text-align: center;
`;
const Flex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const EmptyOne = styled.div`
    width: 150px;
    height: 150px;
`
const EmptyTwo = styled.div`
    width: 150px;
    height: 900px;
`

const Spinner = () => {
    return (
        <Flex>
            <ReactSpinner
                size="150px"
                color="#5A8DF3"
            />
        </Flex>
    )
};

const Loader = () => {
    return (
        <div>
            <EmptyOne />
            <Title>Loading...</Title>
            <Spinner></Spinner>
            <EmptyTwo />
        </div>
    );
};

export default Loader;