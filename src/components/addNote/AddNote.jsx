import React, { useState } from "react";
import { ScAddNote } from "./addNote.styled";

const AddNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState("");
    const characterLimit = 200;

    const handleChange = (ev) => {
        if (characterLimit - ev.target.value.length >= 0) {
            setNoteText(ev.target.value);
        }
    };

    const handleSaveClick = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText);
        }
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
                <small className="addNoteFooter-chars">
                    {characterLimit - noteText.length} remaining
                </small>
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
