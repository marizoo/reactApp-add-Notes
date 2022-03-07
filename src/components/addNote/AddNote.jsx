import React, { useState } from "react";
import { ScAddNote } from "./addNote.styled";

const AddNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState("");

    const handleChange = (ev) => {
        setNoteText(ev.target.value);
    };

    const handleSaveClick = () => {
        handleAddNote(noteText);
        setNoteText("");
    };

    return (
        <ScAddNote>
            <textarea
                className="addNote-text"
                cols="10"
                rows="8"
                placeholder="Type to add a note"
                value={noteText}
                onChange={handleChange}
            ></textarea>
            <div className="addNoteFooter">
                <small className="addNoteFooter-chars">200 remaining</small>
                <button
                    onClick={handleSaveClick}
                    className="addNoteFooter-saveBtn"
                >
                    Save
                </button>
            </div>
        </ScAddNote>
    );
};

export default AddNote;
