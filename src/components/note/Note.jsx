import React from "react";
import { ScNote } from "./note.styled";
import { MdDeleteForever } from "react-icons/md";

const Note = ({ text, date, id, onHandleDeleteNote }) => {
    return (
        <ScNote>
            <span className="note-text">{text}</span>
            <div className="noteFooter">
                <small className="noteFooter-date">{date}</small>
                <MdDeleteForever
                    className="noteFooter-deleteIcon"
                    size="1.3rem"
                    onClick={() => onHandleDeleteNote(id)}
                />
            </div>
        </ScNote>
    );
};

export default Note;
