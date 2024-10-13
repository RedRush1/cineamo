export interface Cinema {
  name: string;
  profileImageUrl: string;
}

export interface Movie {
  title: string;
  backdropPath: string;
  posterPath: string;
}

export interface ApiResponse<T> {
  _embedded: {
    items: T[];
  };
}

