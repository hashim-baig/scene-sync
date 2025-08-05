"use client"

import React, {useState} from 'react';
import SearchBarTemplate from './SearchBarTemplate';
import {SearchBarProps} from "@/types";
import {useDebounce} from "@reactuses/core";

const SearchBar: React.FC<SearchBarProps> = ({ setSearchTerm}) => {
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

    useDebounce(() => setSearchTerm(debouncedSearchTerm), 500);

  return <SearchBarTemplate
              searchTerm={debouncedSearchTerm}
              setSearchTerm={setDebouncedSearchTerm}
            />;
};

export default SearchBar;
