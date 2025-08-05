import React from 'react';
import {Input} from "@/components/ui/input";
import {SearchBarProps} from "@/types";

const SearchBarTemplate: React.FC<SearchBarProps> = ({searchTerm, setSearchTerm}) => {
  return (
    <div>
      <Input
        placeholder={"Search thousands of movies..."}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBarTemplate;
