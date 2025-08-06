"use client"
import React from "react";
import AllMoviesGrid from "@/components/organisms/AllMoviesGrid";
import SearchBar from "@/components/molecules/SearchBar";

export default function Home() {

  return (
      <>
          <SearchBar/>
          <AllMoviesGrid  />
      </>
  );
}
