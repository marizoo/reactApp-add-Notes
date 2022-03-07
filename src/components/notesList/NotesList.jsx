import React from "react";
import AddNote from "../addNote/AddNote";
import Note from "../note/Note";
import { ScNotesList } from "./notesList.styled";

const NotesList = ({ onNotes, onHandleDeleteNote, handleAddNote }) => {
    return (
        <ScNotesList>
            {onNotes.map((note) => (
                <Note
                    key={note.id}
                    id={note.id}
                    text={note.text}
                    date={note.date}
                    onHandleDeleteNote={onHandleDeleteNote}
                />
            ))}
            <AddNote handleAddNote={handleAddNote} />
        </ScNotesList>
    );
};

export default NotesList;
