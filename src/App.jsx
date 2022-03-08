import React, { useState, useEffect } from "react";
import "./index.css";
import styled from "styled-components";
import NotesList from "./components/notesList/NotesList";
import { nanoid } from "nanoid";
import Search from "./search/Search";
import Header from "./header/Header";

const ScApp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 960px;
    min-height: 100vh;
`;

const App = () => {
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

    const [searchText, setSearchText] = useState("");
    const [darkMode, setDarkMode] = useState(false);

    // retrieve from local storage. Parse from a string into JSON
    useEffect(() => {
        const savedNotes = JSON.parse(
            localStorage.getItem("react-notes-app-data")
        );
        if (savedNotes) {
            setNotes(savedNotes);
        }
    }, []);

    // save to local storage, made it into a string
    useEffect(() => {
        localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
    }, [notes]);

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
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
    };

    return (
        <div className={`${darkMode && "dark-mode"}`}>
            {/* <GlobalStyles /> */}
            {/* <ScApp className={`${mainCss}-theme`}> */}
            <ScApp>
                <Header
                    className={`${darkMode && "dark-mode"}`}
                    handleToggleDarkMode={setDarkMode}
                />
                <Search
                    onSearchText={searchText}
                    onSetSearchText={setSearchText}
                />
                <NotesList
                    onNotes={notes.filter((note) =>
                        note.text.toLowerCase().includes(searchText)
                    )}
                    onHandleDeleteNote={handleDeleteNote}
                    handleAddNote={addNote}
                />
            </ScApp>
        </div>
    );
};

export default App;

// https://www.youtube.com/watch?v=8KB3DHI-QbM&t=35s
// till min 01.07.55;
