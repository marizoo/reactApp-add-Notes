import styled from "styled-components";

export const ScNote = styled.div`
    background: var(--color-brand);
    border-radius: 10px;
    padding: 1rem;
    min-height: 170px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .note-text {
    }

    .noteFooter {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .noteFooter-date {
    }

    .noteFooter-deleteIcon {
        cursor: pointer;
    }
`;