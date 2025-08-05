interface Movie {
    id: string;
    title: string;
    poster_path: string;
    vote_average: number;
    original_language: string;
    release_date: string;
}

interface AllMoviesGridTemplateProps {
    loading: boolean;
    moviesList: Movie[];
}

interface MovieCardProps {
    title: string;
    poster: string;
    ratings: number;
    language: string;
    releaseYear: string;
}

interface SearchBarProps {
    setSearchTerm: (search: string) => void;
}

interface AllMoviesGridProps {
    searchTerm: string;
}

export type {
    Movie,
    AllMoviesGridTemplateProps,
    MovieCardProps,
    SearchBarProps,
    AllMoviesGridProps
}