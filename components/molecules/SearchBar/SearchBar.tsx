"use client";

import React from "react";
import SearchBarTemplate from "./SearchBarTemplate";
import { SearchBarProps } from "@/types";

const SearchBar: React.FC<SearchBarProps> = ({
  handleSearchTermChange,
  searchTerm,
}) => {
  return (
    <SearchBarTemplate
      handleSearchTermChange={handleSearchTermChange}
      searchTerm={searchTerm}
    />
  );
};

export default SearchBar;
