import {Cinema, Movie} from "@/model";
import {parseEntity} from "@/utils/parseEntity";

export async function fetchCinemas(): Promise<Cinema[]> {
  const response = await fetch('https://api.cineamo.com/cinemas');
  const data = await response.json();
  return parseEntity<Cinema>(data, 'cinemas')
}

export async function fetchMovies(): Promise<Movie[]> {
  const response = await fetch('https://api.cineamo.com/movies', {
    headers: {
      "Content-Type": "application/json",
    },});
  const data = await response.json();
  return parseEntity<Movie>(data, 'movies')
}