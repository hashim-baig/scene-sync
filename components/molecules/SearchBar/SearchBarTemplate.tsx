import React from 'react';
import {Input} from "@/components/ui/input";
import { SearchIcon } from "lucide-react";


const SearchBarTemplate: React.FC = ({}) => {
  return (

      <div className="relative w-full max-w-md">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <SearchIcon className="h-5 w-5 text-placeholderBlue" />
          </div>

          <Input
              placeholder="Search thousands of movies..."
              className="pl-10 placeholder:text-placeholderBlue placeholder:italic text-placeholderBlue focus:outline-none"
          />
      </div>
  );
};

export default SearchBarTemplate;
