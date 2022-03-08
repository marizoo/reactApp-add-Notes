import styled from "styled-components";

export const ScSearch = styled.div`
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: center;
    .search-container {
        display: flex;
        width: 95%;
        max-width: 960px;
        align-items: center;
        background: rgb(233, 233, 233);
        border-radius: 10px;
        margin-bottom: 1rem;
        margin-top: 1.5rem;
        height: 2.5rem;
    }

    .search-icon {
        margin: 0 1rem;
    }

    .search-input {
        border: 0;
        background: transparent;
        width: 85%;
        height: 70%;
    }

    .search-input:focus {
        outline: none;
    }
`;
