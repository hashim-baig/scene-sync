import React from 'react';
import {Input} from "@/components/ui/input";


const SearchBarTemplate: React.FC = ({}) => {
  return (
    <div>
      <Input
        placeholder={"Search thousands of movies..."}
      />
    </div>
  );
};

export default SearchBarTemplate;
