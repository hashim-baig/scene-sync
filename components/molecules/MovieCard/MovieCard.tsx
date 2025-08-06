import React from "react";
import MovieCardTemplate from "./MovieCardTemplate";
import { MovieCardProps } from "@/types";
import { upperCase } from "upper-case";

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  poster,
  ratings,
  language,
  releaseYear,
}) => {
  const moviePoster = poster
    ? `https://image.tmdb.org/t/p/w500${poster}`
    : `/No-Poster.png`;

  const formattedRating = !isNaN(ratings) ? ratings.toFixed(1) : "N/A";

  return (
    <MovieCardTemplate
      title={title}
      poster={moviePoster}
      ratings={formattedRating}
      language={upperCase(language)}
      releaseYear={releaseYear?.split("-")[0]}
    />
  );
};

export default MovieCard;
