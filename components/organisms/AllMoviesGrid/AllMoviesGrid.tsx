"use client"

import React, {useEffect, useState} from 'react';
import AllMoviesGridTemplate from './AllMoviesGridTemplate';
import axiosInstance from "@/lib/axiosInstance";

const AllMoviesGrid: React.FC = ({}) => {
  const [moviesList, setMoviesList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const endpoint = "/discover/movie";
      const params = {
      };

      // if (searchTerm.trim() !== "") {
      //   endpoint = "/search/movie";
      //   params.query = searchTerm.trim();
      // }

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

  useEffect( () => {
    fetchMovies().then(() => {})
  }, [])

  return <AllMoviesGridTemplate
            loading={loading}
            moviesList={moviesList}
          />;
};

export default AllMoviesGrid;
