"use client";

import React, { useEffect, useState, useCallback } from "react";
import AllMoviesGridTemplate from "./AllMoviesGridTemplate";
import axiosInstance from "@/lib/axiosInstance";

import { AllMoviesGridProps } from "@/types";

const AllMoviesGrid: React.FC<AllMoviesGridProps> = ({
  searchTerm,
  setTotalPageCount,
  currentPage,
}) => {
  const [moviesList, setMoviesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    language: ''
  });

  useEffect(() => {
    console.log(filters, `filterChanged`);
  }, [filters]);

  const fetchMovies = useCallback(
    async (query: string, page: number, fetchFilter: { language: string}) => {
      setLoading(true);
      try {
        let endpoint = "/discover/movie";
        const params: Record<string, string | number> = {
          page: page,
          with_original_language: fetchFilter.language
        };

        if (query.trim() !== "") {
          endpoint = "/search/movie";
          params.query = query.trim();
          params.language = fetchFilter.language;
        }

        const response = await axiosInstance.get(endpoint, { params });
        const moviesList = response.data.results;
        const totalPages = response.data.total_pages;

        const cappedTotalPages = totalPages > 500 ? 500 : totalPages;

        setMoviesList(moviesList);
        setTotalPageCount(cappedTotalPages);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
    [setTotalPageCount],
  );

  useEffect(() => {
    fetchMovies(searchTerm, currentPage, filters).then(() => {});
  }, [searchTerm, currentPage, fetchMovies, filters]);

  return (
    <AllMoviesGridTemplate
      loading={loading}
      moviesList={moviesList}
      setFilters={setFilters}
    />
  );
};

export default AllMoviesGrid;
