"use client"
import React from "react";
import AllMoviesGrid from "@/components/organisms/AllMoviesGrid";
import SearchBar from "@/components/molecules/SearchBar";

export default function Home() {

  return (
      <>
          <section className="flex justify-center w-full my-10">
              <section className="flex flex-col items-center gap-7.5 w-[745px] px-12">

                  <h1 className="font-dm-sans font-bold text-[56px] leading-[60px] tracking-[-0.01em] text-center ">
                      Find{" "}
                      <span className="bg-gradient-to-r from-[#D6C7FF] to-[#AB8BFF] bg-clip-text text-transparent">
                    Movies
                  </span>{" "}
                      You’ll Love Without the Hassle
                  </h1>

                  <SearchBar/>

              </section>
          </section>


          <AllMoviesGrid  />
      </>
  );
}
