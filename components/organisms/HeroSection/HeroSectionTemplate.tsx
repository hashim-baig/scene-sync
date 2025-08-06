import React from "react";
import SearchBar from "@/components/molecules/SearchBar";
import HeroText from "@/components/atoms/HeroText";
import { HeroSectionTemplateProps } from "@/types";

const HeroSectionTemplate: React.FC<HeroSectionTemplateProps> = ({
  handleSearchTermChange,
  searchTerm,
}) => {
  return (
    <section className="flex justify-center w-full my-10">
      <section className="flex flex-col items-center gap-7.5 w-[745px] px-12">
        <HeroText />
        <SearchBar
          handleSearchTermChange={handleSearchTermChange}
          searchTerm={searchTerm}
        />
      </section>
    </section>
  );
};

export default HeroSectionTemplate;
