import styled from "styled-components";

export const PeopleListContainer = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 6px;
    width: 300px;
    &:hover {
        cursor: pointer;
        background-color: #ADD8E6;
    }
`;

export const PeopleListItem = ({name}) => {
    return (
        <PeopleListContainer>
            {name}
        </PeopleListContainer>
    )
}