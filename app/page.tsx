"use client";
import React, { useState } from "react";
import AllMoviesGrid from "@/components/organisms/AllMoviesGrid";
import HeroSection from "@/components/organisms/HeroSection";
import Pagination from "@/components/molecules/Pagination";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [totalPageCount, setTotalPageCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  return (
    <>
      <HeroSection
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        setCurrentPage={setCurrentPage}
      />
      <AllMoviesGrid
        searchTerm={searchTerm}
        setTotalPageCount={setTotalPageCount}
        currentPage={currentPage}
      />
      <Pagination
        totalPageCount={totalPageCount}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
