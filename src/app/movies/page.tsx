import { fetchMovies } from '@/services/api';
import { Movie } from '@/model';
import MovieSearch from "@/components/MovieSearch";

export default async function MoviesPage() {
  const movies: Movie[] = await fetchMovies();

  return <MovieSearch movies={movies} />
}