import React from 'react';
import MovieCardTemplate from './MovieCardTemplate';
import {MovieCardProps} from "@/types";

const MovieCard: React.FC<MovieCardProps> = ({title, poster, ratings, language, releaseYear}) => {

  const moviePoster = poster ? `https://image.tmdb.org/t/p/original${poster}` : `/No-Poster.png`

  return <MovieCardTemplate
      title={title}
      poster={moviePoster}
      ratings={ratings}
      language={language}
      releaseYear={releaseYear?.split("-")[0]}
    />;
};

export default MovieCard;
