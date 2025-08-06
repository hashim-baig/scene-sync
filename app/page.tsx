"use client"
import React from "react";
import AllMoviesGrid from "@/components/organisms/AllMoviesGrid";
import HeroSection from "@/components/organisms/HeroSection";

export default function Home() {

  return (
      <>
          <HeroSection />
          <AllMoviesGrid  />
      </>
  );
}
