import React from 'react';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface Filters {
    language: string;
}

type MovieFiltersTemplateProps = {
    langOptions: {
        iso_639_1: string;
        english_name: string;
        name: string;
    }[]
    setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

const
    MovieFiltersTemplate    = ({langOptions = [], setFilters}:  MovieFiltersTemplateProps) => {

    return (
            <div className="flex items-center gap-2">
                <label htmlFor="movie-filter">Select your preferences:</label>
                <Select
                    onValueChange={(value) =>
                        setFilters((prev: {language: string}) => ({
                            ...prev,
                            language: value
                        }))
                    }
                >
                <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Language" />
                    </SelectTrigger>
                    <SelectContent>
                        {
                            langOptions.map((lang) => <SelectItem key={lang.iso_639_1} value={lang.iso_639_1}>{lang.english_name}</SelectItem>)
                        }
                    </SelectContent>
                </Select>
            </div>
        );
    };
export default MovieFiltersTemplate;