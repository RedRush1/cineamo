'use client';

import {ChangeEvent, useEffect, useState} from "react";
import {Movie} from "@/model";

interface MoviesSearchProps {
  movies: Movie[]
}
export default function MovieSearch({ movies }: MoviesSearchProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMovies, setFilteredMovies] = useState(movies);

  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(term)
    );
    setFilteredMovies(filtered);
  };

  return (
    <div className="container mx-auto p-4">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search Movies"
        className="border rounded-md p-2 w-full mb-4"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredMovies.map((movie) => (
          <div key={movie.title} className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold">{movie.title}</h2>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdropPath}`}
              alt={movie.title}
              className="w-full h-40 object-cover mt-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
}