import React from "react";

interface Movie {
  id: string;
  title: string;
  poster_path: string;
  vote_average: number;
  original_language: string;
  release_date: string;
}

interface Filters {
  language: string;
}

interface AllMoviesGridTemplateProps {
  loading: boolean;
  moviesList: Movie[];
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

interface MovieCard {
  title: string;
  poster: string;
  language: string;
  releaseYear: string;
}

interface MovieCardProps extends MovieCard {
  ratings: number;
}

interface MovieCardTemplateProps extends MovieCard {
  ratings: string;
}

interface HeroSectionProps {
  setSearchTerm: (search: string) => void;
  searchTerm: string;
  setCurrentPage: (page: number) => void;
}

interface HeroSectionTemplateProps {
  handleSearchTermChange: (e: string) => void;
  searchTerm: string;
}

interface SearchBarProps {
  handleSearchTermChange: (e: string) => void;
  searchTerm: string;
}

interface AllMoviesGridProps {
  searchTerm: string;
  setTotalPageCount: (totalPageCount: number) => void;
  currentPage: number;
}

interface Pagination {
  totalPageCount: number;
}

interface PaginationProps extends Pagination {
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
}

interface PaginationTemplateProps extends Pagination {
  handleNextPageChange: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  handlePreviousPageChange: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  handlePageChange: (pageNumber: number) => void;
  currentPage: number;
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
  pageItems: PageOrEllipsis[];
}

type PageOrEllipsis = number | "ellipsis";

export type {
  Movie,
  AllMoviesGridTemplateProps,
  MovieCardProps,
  MovieCardTemplateProps,
  HeroSectionProps,
  HeroSectionTemplateProps,
  SearchBarProps,
  AllMoviesGridProps,
  PaginationProps,
  PaginationTemplateProps,
  PageOrEllipsis,
};
