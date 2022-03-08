import styled from "styled-components";

export const ScHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin-top: 1rem;

    .header-title {
    }

    .header-button {
        cursor: pointer;
        padding: 5px 10px;
        border-radius: 15px;
        background: #e1e1e1;
        border: 0;

        &:hover {
            background: #ededed;
        }
    }
`;
