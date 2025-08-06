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
    searchTerm: string;
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
}


export type {
    Movie,
    AllMoviesGridTemplateProps,
    MovieCardProps,
    MovieCardTemplateProps,
    HeroSectionProps,
    HeroSectionTemplateProps,
    SearchBarProps,
    AllMoviesGridProps
}