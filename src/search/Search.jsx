import React from "react";
import { MdSearch } from "react-icons/md";
import { ScSearch } from "./search.styled";

const Search = ({ onSearchText, onSetSearchText }) => {
    return (
        <ScSearch>
            <div className="search-container">
                <MdSearch className="search-icon" size="1.3rem" />
                <input
                    className="search-input"
                    type="text"
                    placeholder="type to search..."
                    value={onSearchText}
                    onChange={(ev) => onSetSearchText(ev.target.value)}
                />
            </div>
        </ScSearch>
    );
};

export default Search;
