import React from "react";
import MovieCard from "@/components/molecules/MovieCard";
import MovieCardSkeleton from "@/components/molecules/MovieCard/MovieCardSkeleton";
import {AllMoviesGridTemplateProps} from "@/types";
import MovieFilters from "@/components/molecules/MovieFilters";

const AllMoviesGridTemplate: React.FC<AllMoviesGridTemplateProps> = ({
                                                                         loading,
                                                                         moviesList,
                                                                         setFilters,
                                                                         searchTerm,
                                                                         filters,
                                                                     }) => {
    return (
        <section className="pt-[20px] px-[40px]">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight my-6">
                All Movies
            </h4>


            <div className="pb-[20px]">
                {searchTerm ?
                    <p>Showing Results for: {searchTerm}</p> :
                    <MovieFilters
                        setFilters={setFilters}
                        filters={filters}
                    />}
            </div>

            <div
                className="grid gap-6.5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-auto justify-items-center pb-10">
                {loading
                    ? Array.from({length: 20}).map((_, index) => (
                        <MovieCardSkeleton key={index}/>
                    ))
                    : moviesList.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            title={movie.title}
                            poster={movie.poster_path}
                            ratings={movie.vote_average}
                            language={movie.original_language}
                            releaseYear={movie.release_date}
                        />
                    ))}
            </div>
        </section>
    );
};

export default AllMoviesGridTemplate;
