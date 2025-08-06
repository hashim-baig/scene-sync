"use client"
import React, {useState} from "react";
import AllMoviesGrid from "@/components/organisms/AllMoviesGrid";
import HeroSection from "@/components/organisms/HeroSection";

export default function Home() {
    const [searchTerm, setSearchTerm] = useState("");

  return (
      <>
          <HeroSection
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
          />
          <AllMoviesGrid searchTerm={searchTerm} />
      </>
  );
}
