"use client"
import React, {useState} from "react";
import AllMoviesGrid from "@/components/organisms/AllMoviesGrid";
import SearchBar from "@/components/molecules/SearchBar";

export default function Home() {
    const[searchTerm, setSearchTerm] = useState("");

  return (
      <>
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
          <p>{searchTerm}</p>
          <AllMoviesGrid searchTerm={searchTerm} />
      </>
  );
}
