import styled from "styled-components";

export const ScNotesList = styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    width: 100%;
    max-width: 960px;
    padding: 2rem;
    place-content: center;
    /* margin-right: auto;
    margin-left: auto; */
`;
