import React from 'react';
import {Input} from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import {SearchBarProps} from "@/types";


const SearchBarTemplate: React.FC<SearchBarProps> = ({handleSearchTermChange, searchTerm}) => {
    return (
      <div className="relative w-full max-w-md">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <SearchIcon className="h-5 w-5 text-placeholderBlue" />
          </div>

          <Input
              value={searchTerm}
              placeholder="Search thousands of movies..."
              className="pl-10 placeholder:text-placeholderBlue placeholder:italic text-placeholderBlue focus:outline-none"
              onChange={(e) => handleSearchTermChange(e.target.value)}
          />
      </div>
  );
};

export default SearchBarTemplate;
