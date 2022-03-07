import styled from "styled-components";

export const ScAddNote = styled.div`
    background: var(--color-brand-alt);
    border-radius: 10px;
    padding: 1rem;
    min-height: 170px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .addNote-text {
        background: transparent;
        border: 0;
        resize: none;
    }

    .addNote-text:focus {
        outline: 0;
    }

    .addNoteFooter {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .addNoteFooter-chars {
    }

    .addNoteFooter-saveBtn {
        cursor: pointer;
        padding: 5px 10px;
        border-radius: 15px;
        background: #e1e1e1;
        border: 0;
    }

    .addNoteFooter-saveBtn:hover {
        background: #ededed;
    }
`;
