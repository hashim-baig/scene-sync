"use client"

import React, {useEffect, useState} from 'react';
import AllMoviesGridTemplate from './AllMoviesGridTemplate';
import axiosInstance from "@/lib/axiosInstance";

import {AllMoviesGridProps} from "@/types";

const AllMoviesGrid: React.FC<AllMoviesGridProps> = ({searchTerm, setTotalPageCount, currentPage}) => {
  const [moviesList, setMoviesList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    fetchMovies(searchTerm, currentPage).then(() => {})
  }, [searchTerm, currentPage]);

  const fetchMovies = async (query: string, page: number) => {
    setLoading(true);
    try {
      let endpoint = "/discover/movie";
      const params: Record<string, string | number> = {
        page: page
      };

      if (query.trim() !== "") {
        endpoint = "/search/movie";
        params.query = query.trim();
      }

      const response = await axiosInstance.get(endpoint, { params });
      const moviesList = response.data.results;
      const totalPages = response.data.total_pages;

      setMoviesList(moviesList);
      setTotalPageCount(totalPages);
    } catch(error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return <AllMoviesGridTemplate
            loading={loading}
            moviesList={moviesList}
            searchTerm={searchTerm}
          />;
};

export default AllMoviesGrid;
