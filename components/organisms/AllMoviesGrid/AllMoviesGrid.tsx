"use client"

import React, {useEffect, useState} from 'react';
import AllMoviesGridTemplate from './AllMoviesGridTemplate';
import axiosInstance from "@/lib/axiosInstance";

import {AllMoviesGridProps} from "@/types";

const AllMoviesGrid: React.FC<AllMoviesGridProps> = ({searchTerm}) => {
  const [moviesList, setMoviesList] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log("search term: ",searchTerm)

  const fetchMovies = async (searchTerm = "") => {
    setLoading(true);
    try {
      let endpoint = "/discover/movie";
      const params = {
      };

      if (searchTerm.trim() !== "") {
        endpoint = "/search/movie";
        params.query = searchTerm.trim();
      }

      const response = await axiosInstance.get(endpoint, { params });
      const moviesList = response.data.results;

      setMoviesList(moviesList);
      console.log("Movies", response.data.results)
    } catch(error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchMovies(searchTerm)
  }, [searchTerm])

  return <AllMoviesGridTemplate
            loading={loading}
            moviesList={moviesList}
          />;
};

export default AllMoviesGrid;
