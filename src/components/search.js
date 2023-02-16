// import React, { useState } from 'react'
import React from 'react'

const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Music Rating</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Music"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
);

export default SearchBar;