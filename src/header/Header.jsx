import React from "react";
import { ScHeader } from "./header.styled";

const Header = ({ handleToggleDarkMode }) => {
    return (
        <ScHeader>
            <h1>Notes</h1>
            <button
                onClick={() =>
                    handleToggleDarkMode(
                        (previousDarkMode) => !previousDarkMode
                    )
                }
                className="header-button"
            >
                Toggle Mode
            </button>
        </ScHeader>
    );
};

export default Header;
