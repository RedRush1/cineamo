"use client"
import { fetchMovies } from '@/services/api';
import { Movie } from '@/model';
import {useEffect, useState} from "react";

export default function MoviesPage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getMovies() {
      try {
        const movies = await fetchMovies();
        setMovies(movies);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setLoading(false);
      }
    }

    getMovies();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Movies</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {loading && <p>Loading</p>}
        {movies?.map((movie) => (
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