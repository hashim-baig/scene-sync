import React, {useEffect, useState} from 'react';
import HeroSectionTemplate from './HeroSectionTemplate';
import {HeroSectionProps} from "@/types";
import {useDebounce} from "@/hooks/useDebounce";

const HeroSection: React.FC<HeroSectionProps> = ({ setSearchTerm, searchTerm, setCurrentPage}) => {
  const [inputValue, setInputValue] = useState(searchTerm);
  const debouncedInputValue = useDebounce(inputValue, 1000);

  useEffect(() => {
    setSearchTerm(debouncedInputValue);
  }, [debouncedInputValue, setSearchTerm]);

  const handleSearchTermChange = (search: string) => {
    setInputValue(search);
    setCurrentPage(1)
  }

  return <HeroSectionTemplate
          handleSearchTermChange={handleSearchTermChange}
          searchTerm={inputValue}
        />;
};

export default HeroSection;
