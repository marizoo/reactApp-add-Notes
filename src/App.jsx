import React, { useState } from "react";
import { GlobalStyles } from "./globalStyle/globalStyle";
import styled from "styled-components";
import NotesList from "./components/notesList/NotesList";
import { nanoid } from "nanoid";

const ScApp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; ;
`;

const App = () => {
    const [mainCss, setMainCss] = useState("light");
    const toggleTheme = () => {
        setMainCss((currentCss) => (currentCss === "light" ? "dark" : "light"));
    };

    const [notes, setNotes] = useState([
        {
            id: nanoid(),
            text: "this is my first note!",
            date: "08/03/2022",
        },
        {
            id: nanoid(),
            text: "this is my second note!",
            date: "10/03/2022",
        },
        {
            id: nanoid(),
            text: "this is my third note!",
            date: "14/03/2022",
        },
        {
            id: nanoid(),
            text: "this is my fourth note!",
            date: "20/03/2022",
        },
    ]);

    const addNote = (text) => {
        const date = new Date();
        const newNote = {
            id: nanoid(),
            text: text,
            date: date.toLocaleDateString(),
        };
        const newNotes = [...notes, newNote];
        setNotes(newNotes);
    };

    const handleDeleteNote = (id) => {
        console.log(id);
        // setNotes(notes.filter((note) => !note.id === id));
    };

    return (
        <>
            <GlobalStyles />
            <ScApp className={`${mainCss}-theme`}>
                <NotesList
                    onNotes={notes}
                    onHandleDeleteNote={handleDeleteNote}
                    handleAddNote={addNote}
                />
            </ScApp>
        </>
    );
};

export default App;

// https://www.youtube.com/watch?v=8KB3DHI-QbM&t=35s
// till min 43.
