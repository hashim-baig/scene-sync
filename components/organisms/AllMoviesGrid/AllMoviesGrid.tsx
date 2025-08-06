"use client"

import React, {useEffect, useState} from 'react';
import AllMoviesGridTemplate from './AllMoviesGridTemplate';
import axiosInstance from "@/lib/axiosInstance";

import {AllMoviesGridProps} from "@/types";

const AllMoviesGrid: React.FC<AllMoviesGridProps> = ({searchTerm}) => {
  const [moviesList, setMoviesList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    fetchMovies(searchTerm).then(() => {})
  }, [searchTerm])

  const fetchMovies = async (query: string) => {
    setLoading(true);
    try {
      let endpoint = "/discover/movie";
      const params: Record<string, string | number> = {};

      if (query.trim() !== "") {
        endpoint = "/search/movie";
        params.query = query.trim();
      }

      const response = await axiosInstance.get(endpoint, { params });
      const moviesList = response.data.results;

      setMoviesList(moviesList);
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
