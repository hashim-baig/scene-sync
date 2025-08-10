import React, {useCallback, useState, useEffect} from 'react';
import MovieFiltersTemplate from './MovieFiltersTemplate';
import axiosInstance from "@/lib/axiosInstance";

interface Filters {
    language: string;
}

type MovieFiltersProps = {
    setFilters: React.Dispatch<React.SetStateAction<Filters>>;
    filters: Filters;
}

const MovieFilters = ({setFilters, filters}: MovieFiltersProps) => {
    const [loading, setLoading] = useState(false);
    const [languages, setLanguages] = useState([]);

    const fetchLanguages = useCallback(
        async () => {
            setLoading(true);
            try {
                const response = await axiosInstance.get(`/configuration/languages`);
                const langOptions = response.data;
                const sortedLangs = [...langOptions].sort((a, b) =>
                    a.english_name.localeCompare(b.english_name)
                );
                setLanguages(sortedLangs);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        },
        [],
    );
    
    useEffect(() => {
        fetchLanguages().then(() => {})
    }, [fetchLanguages]);

    return <MovieFiltersTemplate
        langOptions={languages}
        setFilters={setFilters}
        filters={filters}
    />;
};

export default MovieFilters;
